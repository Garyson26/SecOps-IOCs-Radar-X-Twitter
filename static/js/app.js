/**
 * IOC Radar X — Frontend Application
 * SSE live updates, Chart.js timeline, IOC table, debug console
 */

// === State ===
let currentSearchId = null;
let eventSource = null;
let timelineChart = null;
let debugInterval = null;
let allIOCs = [];

// === Initialization ===
document.addEventListener('DOMContentLoaded', () => {
    initScanForm();
    initCookieUpload();
    initDebugConsole();
    initTableSort();
});

// === Scan Form ===
function initScanForm() {
    const form = document.getElementById('scanForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const keyword = document.getElementById('keyword').value.trim();
        if (!keyword) return;

        const payload = {
            keyword,
            since: document.getElementById('since').value || null,
            until: document.getElementById('until').value || null,
            max_tweets: parseInt(document.getElementById('maxTweets').value) || 100,
        };

        setBtnLoading(true);
        updateStatus('starting', 'Initializing scan...', 0);

        try {
            const resp = await fetch('/scan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await resp.json();

            if (!resp.ok) {
                updateStatus('error', data.error || 'Scan failed', 0);
                setBtnLoading(false);
                return;
            }

            // Connect to SSE stream
            connectSSE();
        } catch (err) {
            updateStatus('error', 'Network error: ' + err.message, 0);
            setBtnLoading(false);
        }
    });
}

function setBtnLoading(loading) {
    const btn = document.getElementById('btnScan');
    const textEl = btn.querySelector('.btn-text');
    const loadEl = btn.querySelector('.btn-loading');
    
    if (loading) {
        textEl.style.display = 'none';
        loadEl.style.display = 'inline';
        btn.disabled = true;
        document.getElementById('resultsPanel').classList.add('scanning');
    } else {
        textEl.style.display = 'inline';
        loadEl.style.display = 'none';
        btn.disabled = false;
        document.getElementById('resultsPanel').classList.remove('scanning');
    }
}

// === SSE Live Status ===
function connectSSE() {
    if (eventSource) {
        eventSource.close();
    }

    let scanFinished = false;

    eventSource = new EventSource('/status-stream');

    eventSource.addEventListener('progress', (e) => {
        const data = JSON.parse(e.data);
        updateStatus('scanning', data.detail, data.count);
    });

    eventSource.addEventListener('complete', (e) => {
        scanFinished = true;
        const data = JSON.parse(e.data);
        currentSearchId = data.search_id;
        updateStatus('complete',
            `✓ Found ${data.iocs} IOCs from ${data.tweets} tweets (Risk: ${data.risk_score}/10)`,
            data.iocs
        );
        setBtnLoading(false);
        loadResults(data.search_id);
        if (eventSource) {
            eventSource.close();
            eventSource = null;
        }
    });

    eventSource.addEventListener('error', (e) => {
        if (scanFinished) return;
        if (!e.data) return;
        let errMsg = 'Scan encountered an error';
        try {
            const data = JSON.parse(e.data);
            errMsg = data.error || errMsg;
        } catch (_) {}
        scanFinished = true;
        updateStatus('error', errMsg, 0);
        setBtnLoading(false);
        if (eventSource) {
            eventSource.close();
            eventSource = null;
        }
    });

    eventSource.onerror = () => {
        if (scanFinished) {
            if (eventSource) { eventSource.close(); eventSource = null; }
            return;
        }
        setTimeout(async () => {
            if (scanFinished) return;
            try {
                const resp = await fetch('/api/scan-state');
                const state = await resp.json();
                if (!state.running) {
                    scanFinished = true;
                    if (state.status === 'complete') {
                        updateStatus('complete', state.detail, state.count);
                        if (state.search_id) {
                            currentSearchId = state.search_id;
                            loadResults(state.search_id);
                        }
                    } else if (state.error) {
                        updateStatus('error', state.error, 0);
                    } else {
                        updateStatus(state.status, state.detail, state.count);
                    }
                    setBtnLoading(false);
                    if (eventSource) { eventSource.close(); eventSource = null; }
                }
            } catch (_) {}
        }, 1500);
    };
}


function updateStatus(status, detail, count) {
    const indicator = document.getElementById('statusIndicator');
    const textEl = document.getElementById('statusText');
    const detailEl = document.getElementById('statusDetail');
    const countEl = document.getElementById('statusCount');

    indicator.className = 'status-indicator ' + status;
    
    const statusLabels = {
        idle: 'IDLE',
        starting: 'INITIALIZING',
        scanning: 'SCANNING',
        scrolling: 'SCANNING',
        extracting: 'EXTRACTING',
        correlating: 'ANALYZING',
        initializing: 'INITIALIZING',
        navigating: 'NAVIGATING',
        complete: 'COMPLETE',
        error: 'ERROR',
    };

    textEl.textContent = statusLabels[status] || status.toUpperCase();
    detailEl.textContent = detail;
    countEl.textContent = count;
}

// === Load Results ===
async function loadResults(searchId) {
    currentSearchId = searchId;

    try {
        const resp = await fetch(`/api/results/${searchId}`);
        if (!resp.ok) return;
        const data = await resp.json();

        // Show stats
        const statsGrid = document.getElementById('statsGrid');
        statsGrid.style.display = 'grid';
        document.getElementById('statTweets').textContent = data.search.total_tweets;
        document.getElementById('statIOCs').textContent = data.search.total_iocs;
        document.getElementById('statRisk').textContent = data.search.risk_score;
        document.getElementById('statTypes').textContent =
            new Set(data.iocs.map(i => i.type)).size;

        // Color risk score
        const riskEl = document.getElementById('statRisk');
        const risk = data.search.risk_score;
        if (risk >= 7) {
            riskEl.style.color = '#ff0040';
            riskEl.style.textShadow = '0 0 20px rgba(255,0,64,0.5)';
        } else if (risk >= 4) {
            riskEl.style.color = '#ffaa00';
            riskEl.style.textShadow = '0 0 20px rgba(255,170,0,0.5)';
        } else {
            riskEl.style.color = '#00ff41';
            riskEl.style.textShadow = '0 0 20px rgba(0,255,65,0.5)';
        }

        // Populate IOC table
        allIOCs = data.iocs;
        renderIOCTable(data.iocs);

        // Show sections
        document.getElementById('iocTableSection').style.display = 'block';
        document.getElementById('exportSection').style.display = 'block';

        // Build timeline if we have tweets with timestamps
        const tweetsWithTime = data.tweets.filter(t => t.timestamp);
        if (tweetsWithTime.length > 0) {
            buildTimeline(tweetsWithTime, data.iocs);
            document.getElementById('timelineSection').style.display = 'block';
        }

        // Populate type filter
        populateTypeFilter(data.iocs);

    } catch (err) {
        console.error('Failed to load results:', err);
    }
}

// === IOC Table ===
function renderIOCTable(iocs) {
    const tbody = document.getElementById('iocTableBody');
    tbody.innerHTML = '';

    if (iocs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:#555;">No IOCs found</td></tr>';
        return;
    }

    iocs.forEach(ioc => {
        const tr = document.createElement('tr');
        const confPercent = (ioc.confidence * 100).toFixed(0);
        const confColor = ioc.confidence >= 0.7 ? '#ff0040' :
                          (ioc.confidence >= 0.4 ? '#ffaa00' : '#00ff41');
        
        tr.innerHTML = `
            <td><span class="type-badge type-${ioc.type}">${ioc.type}</span></td>
            <td title="${escapeHtml(ioc.value)}">${escapeHtml(ioc.value.substring(0, 60))}</td>
            <td><span style="color:${confColor};font-weight:600;">${confPercent}%</span></td>
            <td title="${escapeHtml(ioc.context || '')}">${escapeHtml((ioc.context || '').substring(0, 80))}</td>
        `;
        tbody.appendChild(tr);
    });
}

function populateTypeFilter(iocs) {
    const select = document.getElementById('iocTypeFilter');
    const types = [...new Set(iocs.map(i => i.type))].sort();
    
    // Keep the "All Types" option
    select.innerHTML = '<option value="">All Types</option>';
    types.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = t.toUpperCase();
        select.appendChild(opt);
    });

    // Attach filter handlers
    select.onchange = filterIOCTable;
    document.getElementById('iocFilter').oninput = filterIOCTable;
}

function filterIOCTable() {
    const textFilter = document.getElementById('iocFilter').value.toLowerCase();
    const typeFilter = document.getElementById('iocTypeFilter').value;

    const filtered = allIOCs.filter(ioc => {
        const matchText = !textFilter || 
            ioc.value.toLowerCase().includes(textFilter) ||
            (ioc.context || '').toLowerCase().includes(textFilter);
        const matchType = !typeFilter || ioc.type === typeFilter;
        return matchText && matchType;
    });

    renderIOCTable(filtered);
}

// === Table Sorting ===
function initTableSort() {
    const headers = document.querySelectorAll('#iocTable th[data-sort]');
    headers.forEach(th => {
        th.addEventListener('click', () => {
            const field = th.dataset.sort;
            const dir = th.classList.contains('sort-asc') ? -1 : 1;
            
            headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
            th.classList.add(dir === 1 ? 'sort-asc' : 'sort-desc');

            allIOCs.sort((a, b) => {
                let va = a[field] || '';
                let vb = b[field] || '';
                if (typeof va === 'number') return (va - vb) * dir;
                return va.toString().localeCompare(vb.toString()) * dir;
            });

            renderIOCTable(allIOCs);
        });
    });
}

// === Timeline Chart ===
function buildTimeline(tweets, iocs) {
    const ctx = document.getElementById('timelineChart');
    if (!ctx) return;

    // Group tweets by hour
    const hourCounts = {};
    tweets.forEach(t => {
        if (!t.timestamp) return;
        const dt = new Date(t.timestamp);
        const key = `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')} ${String(dt.getHours()).padStart(2,'0')}:00`;
        hourCounts[key] = (hourCounts[key] || 0) + 1;
    });

    const labels = Object.keys(hourCounts).sort();
    const data = labels.map(l => hourCounts[l]);

    if (timelineChart) {
        timelineChart.destroy();
    }

    timelineChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Tweets per Hour',
                data,
                backgroundColor: 'rgba(0, 255, 65, 0.3)',
                borderColor: '#00ff41',
                borderWidth: 1,
                borderRadius: 4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#888', font: { family: "'Share Tech Mono'" } }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#555', font: { size: 10 }, maxRotation: 45 },
                    grid: { color: 'rgba(30,30,46,0.5)' }
                },
                y: {
                    ticks: { color: '#555', font: { size: 10 } },
                    grid: { color: 'rgba(30,30,46,0.5)' }
                }
            }
        }
    });
}

// === Cookie Upload ===
function initCookieUpload() {
    const fileInput = document.getElementById('cookieFile');
    const btnUpload = document.getElementById('btnUpload');
    if (!fileInput || !btnUpload) return;

    // Button click opens file dialog
    btnUpload.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileInput.click();
    });

    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const statusEl = document.getElementById('cookieStatus');
        statusEl.innerHTML = '<span style="color:#ffaa00;">⏳ Uploading ' + escapeHtml(file.name) + '...</span>';

        const formData = new FormData();
        formData.append('file', file);

        try {
            const resp = await fetch('/upload-cookies', {
                method: 'POST',
                body: formData,
            });

            let data;
            const contentType = resp.headers.get('content-type') || '';
            if (contentType.includes('application/json')) {
                data = await resp.json();
            } else {
                const text = await resp.text();
                data = { error: 'Server error: ' + text.substring(0, 200) };
            }

            if (resp.ok && data.success) {
                statusEl.innerHTML = '<span style="color:#00ff41;">✓ ' + escapeHtml(data.message) + '</span>';
                if (data.expired) {
                    statusEl.innerHTML += '<br><span style="color:#ffaa00;">⚠ Warning: auth_token may be expired</span>';
                }
                // Update mode badge
                const badge = document.getElementById('modeBadge');
                badge.className = 'mode-badge mode-auth';
                badge.innerHTML = '<span class="mode-dot"></span><span>🔐 AUTH</span>';
            } else {
                let errMsg = data.error || 'Unknown error';
                if (data.details && Array.isArray(data.details)) {
                    errMsg += ': ' + data.details.join(', ');
                }
                statusEl.innerHTML = '<span style="color:#ff0040;">✗ ' + escapeHtml(errMsg) + '</span>';
            }
        } catch (err) {
            console.error('Cookie upload error:', err);
            statusEl.innerHTML = '<span style="color:#ff0040;">✗ Connection error: ' + escapeHtml(err.message) + '</span>';
        }

        // Reset file input so same file can be re-uploaded
        fileInput.value = '';
    });
}

// === Debug Console ===
function initDebugConsole() {
    // Poll for log updates when debug console is open
}

function toggleDebug() {
    const console = document.getElementById('debugConsole');
    const toggle = document.getElementById('debugToggle');

    if (console.style.display === 'none') {
        console.style.display = 'block';
        toggle.classList.add('open');
        startDebugPolling();
    } else {
        console.style.display = 'none';
        toggle.classList.remove('open');
        stopDebugPolling();
    }
}

function startDebugPolling() {
    fetchDebugLogs();
    debugInterval = setInterval(fetchDebugLogs, 2000);
}

function stopDebugPolling() {
    if (debugInterval) {
        clearInterval(debugInterval);
        debugInterval = null;
    }
}

async function fetchDebugLogs() {
    try {
        const resp = await fetch('/api/logs');
        const logs = await resp.json();
        const output = document.getElementById('debugOutput');
        
        output.innerHTML = logs.map(log => {
            try {
                const parsed = JSON.parse(log);
                const level = parsed.level || 'INFO';
                const ts = parsed.ts ? parsed.ts.split('T')[1]?.substring(0, 8) : '';
                const msg = parsed.msg || log;
                return `<div class="debug-line"><span class="ts">${ts}</span> <span class="level-${level}">[${level}]</span> ${escapeHtml(msg)}</div>`;
            } catch {
                return `<div class="debug-line">${escapeHtml(log)}</div>`;
            }
        }).join('');

        output.scrollTop = output.scrollHeight;
    } catch (_) {}
}

// === Export ===
function exportDossier(format) {
    if (!currentSearchId) {
        alert('No scan results to export');
        return;
    }
    window.location.href = `/api/export/${currentSearchId}/${format}`;
}

// === Utility ===
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
