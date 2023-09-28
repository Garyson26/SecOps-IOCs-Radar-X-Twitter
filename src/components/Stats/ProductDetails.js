import React from 'react'
import TableDataFilter from '../TableDataFilter/TableDataFilter'
import { MdCloudUpload } from 'react-icons/md'
const orderdetail = [
    {
        reference: 'demo_19',
        name: 'Hummingbird printed t-shirt',
        qunt: '2400',
    },
]
export const ProductDetails = () => {
    return (
        <div>
            <TableDataFilter />
            <div className='border-t mt-4  bg-white border  p-6 border-t-[#78c4d8]'>
                <h3 className='text-[24px] leading-5 font-semibold text-ellipsis'>Product details</h3>
                <div className='grid mb-3 mt-4 grid-cols-12 items-center gap-2 lg:gap-6'>
                    <label className="before:content-['*'] text-[14px] text-left lg:text-right col-span-12 lg:col-span-3 before:ml-0.5 before:text-red-500">
                        Category
                    </label>

                    <select className='pr-7 border-neutral-300 text-[12px] py-1 col-span-12 lg:col-span-3 bg-[right_0.2rem_center]'>
                        <option>
                            All
                        </option>
                        <option>
                            Home
                        </option>
                        <option>
                            Clothes
                        </option>
                        <option>
                            Men
                        </option>
                        <option>
                            Women

                        </option>
                        <option>
                            Accessories

                        </option>
                        <option>
                            Stationery
                        </option>
                        <option>
                            Home Accessories
                        </option>
                        <option>
                            Art

                        </option>

                    </select>
                </div>
                <div className='overflow-auto mt-5 px-[4]'>
                    <table className="min-w-full  divide-y divide-gray-300">
                        <thead>
                            <tr>

                                <th scope="col" className="px-2 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Reference
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Name
                                </th>

                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">


                                    Available quantity for sale

                                </th>

                            </tr>

                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                orderdetail.length > 0 ?
                                    <>
                                        {orderdetail.map((item, index) => (
                                            <tr key={index} className='even:bg-gray-50'>

                                                <td className="text-[#363a41] text-left p-2 text-[12px] "> {item.reference}</td>


                                                <td className="text-[#363a41] text-left p-2 text-[12px]">{item.name}</td>


                                                <td className="text-[#363a41] text-left p-2 text-[12px]">{item.qunt}</td>


                                            </tr>
                                        ))}
                                    </>
                                    :
                                    <tr><td className="text-[#363a41] text-center p-2 text-[12px] " colspan="3">Empty</td></tr>
                            }
                        </tbody>
                        <tfoot><tr><th colspan="3" className="text-[#363a41] text-left p-2 text-[12px] ">Displaying 0 - 0 of 0</th></tr></tfoot>
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
