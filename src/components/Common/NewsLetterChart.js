import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,

        },
    },
    scales: {
        x: {

            ticks: {
                stepSize: 5
            }
        },
        y: {
            // beginAtZero: true,
            max: 1, // Set the maximum value on the Y-axis
            min: -1, // Set the minimum value on the Y-axis
            ticks: {
                stepSize: 0.5, // Set the step size between ticks on the Y-axis
                precision: 1, // Display one decimal place for tick values
            },
        },
    },
};

const labels = Array.from({ length: 31 }, (_, i) => i + 1);

export const data = {
    labels,
    datasets: [
        {
            label: 'Newsletter statistics',
            data: labels.map(() => faker.number.float({ min: -1, max: 1 })), // Use float to get decimal values
            borderColor: 'rgb(31, 119, 180)',
            backgroundColor: 'rgba(31, 119, 180, 0.5)',
        },
        {
            label: 'customers',
            data: labels.map(() => faker.number.float({ min: -1, max: 1 })), // Use float to get decimal values
            borderColor: 'rgb(174, 199, 232)',
            backgroundColor: 'rgba(174, 199, 232, 0.5)',
        },
        {
            label: 'Visitors',
            data: labels.map(() => faker.number.float({ min: -1, max: 1 })), // Use float to get decimal values
            borderColor: 'rgb(255, 127, 14)',
            backgroundColor: 'rgba(255, 127, 14 , 0.5)',
        },
    ],
};

const NewsLetterChart = () => {
    return (
        <div>
            <Line options={options} height={100} data={data} />
        </div>
    )
}

export default NewsLetterChart