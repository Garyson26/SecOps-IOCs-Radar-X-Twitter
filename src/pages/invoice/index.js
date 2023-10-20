import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
const Invoice = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    return (
        <div>
            <div className='text-end px-8 pt-4'>

            <button className='bg-black  rounded text-white px-4 py-1' onClick={handlePrint}>Save or Print</button>
            </div>
            <div ref={componentRef} >
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title> Order confirmation </title>
            <meta name="robots" content="noindex,nofollow" />
            <meta name="viewport" content="width=device-width; initial-scale=1.0;" />
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n  body { margin: 0; padding: 0; background: #e1e1e1; }\n  div, p, a, li, td { -webkit-text-size-adjust: none; }\n  .ReadMsgBody { width: 100%; background-color: #ffffff; }\n  .ExternalClass { width: 100%; background-color: #ffffff; }\n  body { width: 100%; height: 100%; background-color: #e1e1e1; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }\n  html { width: 100%; }\n  p { padding: 0 !important; margin-top: 0 !important; margin-right: 0 !important; margin-bottom: 0 !important; margin-left: 0 !important; }\n  .visibleMobile { display: none; }\n  .hiddenMobile { display: block; }\n\n  @media only screen and (max-width: 600px) {\n  body { width: auto !important; }\n  table[class=fullTable] { width: 96% !important; clear: both; }\n  table[class=fullPadding] { width: 85% !important; clear: both; }\n  table[class=col] { width: 45% !important; }\n  .erase { display: none; }\n  }\n\n  @media only screen and (max-width: 420px) {\n  table[class=fullTable] { width: 100% !important; clear: both; }\n  table[class=fullPadding] { width: 85% !important; clear: both; }\n  table[class=col] { width: 100% !important; clear: both; }\n  table[class=col] td { text-align: left !important; }\n  .erase { display: none; font-size: 0; max-height: 0; line-height: 0; padding: 0; }\n  .visibleMobile { display: block !important; }\n  .hiddenMobile { display: none !important; }\n  }\n" }} />
            {/* Header */}
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} align="center" className="fullTable">
                <tbody><tr>
                    <td height={20} />
                </tr>
                    <tr>
                        <td>
                            <table width={800} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullTable" bgcolor="#ffffff" style={{ borderRadius: '10px 10px 0 0' }}>
                                <tbody><tr className="hiddenMobile">
                                    <td height={40} />
                                </tr>
                                    <tr className="visibleMobile">
                                        <td height={30} />
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width={680} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullPadding">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table width={220} border={0} cellPadding={0} cellSpacing={0} align="left" className="col">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="left"> <img src="assets/icons/Wiestell Logo.png" width={100} height={32} alt="logo" border={0} /></td>
                                                                    </tr>
                                                                    <tr className="hiddenMobile">
                                                                        <td height={40} />
                                                                    </tr>
                                                                    <tr className="visibleMobile">
                                                                        <td height={20} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '12px', color: '#5b5b5b', fontFamily: '"Open Sans", sans-serif', lineHeight: '18px', verticalAlign: 'top', textAlign: 'left' }}>
                                                                            Hello, Philip Brooks.
                                                                            <br /> Thank you for shopping from our store and for your order.
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <table width={220} border={0} cellPadding={0} cellSpacing={0} align="right" className="col">
                                                                <tbody>
                                                                    <tr className="visibleMobile">
                                                                        <td height={20} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td height={5} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '21px', color: '#ff0000', letterSpacing: '-1px', fontFamily: '"Open Sans", sans-serif', lineHeight: 1, verticalAlign: 'top', textAlign: 'right' }}>
                                                                            Invoice
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                    </tr><tr className="hiddenMobile">
                                                                        <td height={50} />
                                                                    </tr>
                                                                    <tr className="visibleMobile">
                                                                        <td height={20} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '12px', color: '#5b5b5b', fontFamily: '"Open Sans", sans-serif', lineHeight: '18px', verticalAlign: 'top', textAlign: 'right' }}>
                                                                            <small>ORDER</small> #800000025<br />
                                                                            <small>MARCH 4TH 2016</small>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
            {/* /Header */}
            {/* Order Details */}
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} align="center" className="fullTable" >
                <tbody>
                    <tr>
                        <td>
                            <table width={800} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullTable" bgcolor="#ffffff">
                                <tbody>
                                    <tr>
                                    </tr><tr className="hiddenMobile">
                                        <td height={60} />
                                    </tr>
                                    <tr className="visibleMobile">
                                        <td height={40} />
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width={680} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullPadding">
                                                <tbody>
                                                    <tr>
                                                        <th style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', fontWeight: 'normal', lineHeight: 1, verticalAlign: 'top', padding: '0 10px 7px 0' }} width="52%" align="left">
                                                            Item
                                                        </th>
                                                        <th style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', fontWeight: 'normal', lineHeight: 1, verticalAlign: 'top', padding: '0 0 7px' }} align="left">
                                                            <small>SKU</small>
                                                        </th>
                                                        <th style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', fontWeight: 'normal', lineHeight: 1, verticalAlign: 'top', padding: '0 0 7px' }} align="center">
                                                            Quantity
                                                        </th>
                                                        <th style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#1e2b33', fontWeight: 'normal', lineHeight: 1, verticalAlign: 'top', padding: '0 0 7px' }} align="right">
                                                            Subtotal
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td height={1} style={{ background: '#bebebe' }} colSpan={4} />
                                                    </tr>
                                                    <tr>
                                                        <td height={10} colSpan={4} />
                                                    </tr>
                                                    <tr>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#ff0000', lineHeight: '18px', verticalAlign: 'top', padding: '10px 0' }} className="article">
                                                            Beats Studio Over-Ear Headphones
                                                        </td>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#646a6e', lineHeight: '18px', verticalAlign: 'top', padding: '10px 0' }}><small>MH792AM/A</small></td>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#646a6e', lineHeight: '18px', verticalAlign: 'top', padding: '10px 0' }} align="center">1</td>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#1e2b33', lineHeight: '18px', verticalAlign: 'top', padding: '10px 0' }} align="right">$299.95</td>
                                                    </tr>
                                                    <tr>
                                                        <td height={1} colSpan={4} style={{ borderBottom: '1px solid #e4e4e4' }} />
                                                    </tr>
                                                    <tr>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#ff0000', lineHeight: '18px', verticalAlign: 'top', padding: '10px 0' }} className="article">Beats RemoteTalk Cable</td>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#646a6e', lineHeight: '18px', verticalAlign: 'top', padding: '10px 0' }}><small>MHDV2G/A</small></td>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#646a6e', lineHeight: '18px', verticalAlign: 'top', padding: '10px 0' }} align="center">1</td>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#1e2b33', lineHeight: '18px', verticalAlign: 'top', padding: '10px 0' }} align="right">$29.95</td>
                                                    </tr>
                                                    <tr>
                                                        <td height={1} colSpan={4} style={{ borderBottom: '1px solid #e4e4e4' }} />
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height={20} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* /Order Details */}
            {/* Total */}
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} align="center" className="fullTable" >
                <tbody>
                    <tr>
                        <td>
                            <table width={800} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullTable" bgcolor="#ffffff">
                                <tbody>
                                    <tr>
                                        <td>
                                            {/* Table Total */}
                                            <table width={680} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullPadding">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#646a6e', lineHeight: '22px', verticalAlign: 'top', textAlign: 'right' }}>
                                                            Subtotal
                                                        </td>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#646a6e', lineHeight: '22px', verticalAlign: 'top', textAlign: 'right', whiteSpace: 'nowrap' }} width={80}>
                                                            $329.90
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#646a6e', lineHeight: '22px', verticalAlign: 'top', textAlign: 'right' }}>
                                                            Shipping &amp; Handling
                                                        </td>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#646a6e', lineHeight: '22px', verticalAlign: 'top', textAlign: 'right' }}>
                                                            $15.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#000', lineHeight: '22px', verticalAlign: 'top', textAlign: 'right' }}>
                                                            <strong>Grand Total (Incl.Tax)</strong>
                                                        </td>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#000', lineHeight: '22px', verticalAlign: 'top', textAlign: 'right' }}>
                                                            <strong>$344.90</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#b0b0b0', lineHeight: '22px', verticalAlign: 'top', textAlign: 'right' }}><small>TAX</small></td>
                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#b0b0b0', lineHeight: '22px', verticalAlign: 'top', textAlign: 'right' }}>
                                                            <small>$72.40</small>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {/* /Table Total */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* /Total */}
            {/* Information */}
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} align="center" className="fullTable" >
                <tbody>
                    <tr>
                        <td>
                            <table width={800} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullTable" bgcolor="#ffffff">
                                <tbody>
                                    <tr>
                                    </tr><tr className="hiddenMobile">
                                        <td height={60} />
                                    </tr>
                                    <tr className="visibleMobile">
                                        <td height={40} />
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width={680} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullPadding">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table width={220} border={0} cellPadding={0} cellSpacing={0} align="left" className="col">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ fontSize: '11px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', lineHeight: 1, verticalAlign: 'top' }}>
                                                                            <strong>BILLING INFORMATION</strong>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="100%" height={10} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', lineHeight: '20px', verticalAlign: 'top' }}>
                                                                            Philip Brooks<br /> Public Wales, Somewhere<br /> New York NY<br /> 4468, United States<br /> T: 202-555-0133
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <table width={220} border={0} cellPadding={0} cellSpacing={0} align="right" className="col">
                                                                <tbody>
                                                                    <tr className="visibleMobile">
                                                                        <td height={20} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '11px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', lineHeight: 1, verticalAlign: 'top' }}>
                                                                            <strong>PAYMENT METHOD</strong>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="100%" height={10} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', lineHeight: '20px', verticalAlign: 'top' }}>
                                                                            Credit Card<br /> Credit Card Type: Visa<br /> Worldpay Transaction ID: <a href="#" style={{ color: '#ff0000', textDecoration: 'underline' }}>4185939336</a><br />
                                                                            <a href="#" style={{ color: '#b0b0b0' }}>Right of Withdrawal</a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table width={680} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullPadding">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table width={220} border={0} cellPadding={0} cellSpacing={0} align="left" className="col">
                                                                <tbody>
                                                                    <tr className="hiddenMobile">
                                                                        <td height={35} />
                                                                    </tr>
                                                                    <tr className="visibleMobile">
                                                                        <td height={20} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '11px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', lineHeight: 1, verticalAlign: 'top' }}>
                                                                            <strong>SHIPPING INFORMATION</strong>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="100%" height={10} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', lineHeight: '20px', verticalAlign: 'top' }}>
                                                                            Sup Inc<br /> Another Place, Somewhere<br /> New York NY<br /> 4468, United States<br /> T: 202-555-0171
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <table width={220} border={0} cellPadding={0} cellSpacing={0} align="right" className="col">
                                                                <tbody>
                                                                    <tr className="hiddenMobile">
                                                                        <td height={35} />
                                                                    </tr>
                                                                    <tr className="visibleMobile">
                                                                        <td height={20} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '11px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', lineHeight: 1, verticalAlign: 'top' }}>
                                                                            <strong>SHIPPING METHOD</strong>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="100%" height={10} />
                                                                    </tr>
                                                                    <tr>
                                                                        <td style={{ fontSize: '12px', fontFamily: '"Open Sans", sans-serif', color: '#5b5b5b', lineHeight: '20px', verticalAlign: 'top' }}>
                                                                            UPS: U.S. Shipping Services
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="hiddenMobile">
                                        <td height={60} />
                                    </tr>
                                    <tr className="visibleMobile">
                                        <td height={30} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* /Information */}
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} align="center" className="fullTable" >
                <tbody><tr>
                    <td>
                        <table width={800} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullTable" bgcolor="#ffffff" style={{ borderRadius: '0 0 10px 10px' }}>
                            <tbody><tr>
                                <td>
                                    <table width={680} border={0} cellPadding={0} cellSpacing={0} align="center" className="fullPadding">
                                        <tbody>
                                            <tr>
                                                <td style={{ fontSize: '12px', color: '#5b5b5b', fontFamily: '"Open Sans", sans-serif', lineHeight: '18px', verticalAlign: 'top', textAlign: 'left' }}>
                                                    Have a nice day.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                                <tr className="spacer">
                                    <td height={50} />
                                </tr>
                            </tbody></table>
                    </td>
                </tr>
                    <tr>
                        <td height={20} />
                    </tr>
                </tbody></table>
        </div></div>
    )
}

export default Invoice