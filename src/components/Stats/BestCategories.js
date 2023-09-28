import React from 'react'
import TableDataFilter from '../TableDataFilter/TableDataFilter'
import { MdCloudUpload } from 'react-icons/md'
const orderdetail = [
    {
        name: 'Home > Cloths > Man',
        qunt: '2400',
        price: '€5.49',
        Margin:'€0.00',
        viewed:'0'

    },
]
const BestCategories = () => {
    return (
        <div>
            <TableDataFilter />
            <div className='border-t mt-4 bg-white border  p-6 border-t-[#78c4d8]'>
                <h3 className='text-[24px] leading-5 font-semibold text-ellipsis'>Best categories</h3>

                <div className='overflow-auto mt-5 px-[4]'>
                    <table className="min-w-full  divide-y divide-gray-300">
                        <thead>
                            <tr>

                                <th scope="col" className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]">
                                    Name
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]">
                                    Total Quantity Sold

                                </th>

                                <th scope="col" className="px-3 py-2 text-[12px] text-end  font-bold text-[#363a41]">

                                    Total Price

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]">


                                    Total Margin

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]">


                                    Total Viewed

                                </th>
                            </tr>

                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                orderdetail.length >= 0 ?
                                <tr><td className="text-[#363a41] text-center p-2 text-[12px] " colspan="5">Empty</td></tr>
                                    :
                                <>
                                    {orderdetail.map((item, index) => (
                                        <tr key={index} className='even:bg-gray-50'>

                                            <td className="text-[#363a41] text-left p-2 text-[12px] "> {item.name}</td>


                                            <td className="text-[#363a41] text-center p-2 text-[12px]">{item.qunt}</td>


                                            <td className="text-[#363a41] text-end p-2 text-[12px]">{item.price}</td>
                                            <td className="text-[#363a41] text-center p-2 text-[12px]">{item.Margin}</td>
                                            <td className="text-[#363a41] text-center p-2 text-[12px]">{item.viewed}</td>


                                        </tr>
                                    ))}
                                    </>
                            }
                        </tbody>
                        <tfoot><tr><th colspan="5" className="text-[#363a41] text-left p-2 text-[12px] ">Displaying 0 - 0 of 0</th></tr></tfoot>
                    </table>

                </div>
                <div>
                    <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                        <MdCloudUpload className='text-[16px]' />    CSV Export
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BestCategories