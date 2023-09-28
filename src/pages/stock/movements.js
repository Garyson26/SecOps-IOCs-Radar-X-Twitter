import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillCaretDown, AiFillPlusCircle } from 'react-icons/ai'
import { BsCheck2 } from 'react-icons/bs'
import { FaPencilAlt, FaSearchPlus } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const Movements = (props) => {
    return (
        <>
            <div className='overflow-auto px-[4]'>
                <table className="min-w-full border-b divide-y divide-gray-300">
                    <thead>
                        <tr>

                            <th scope="col" className="px-2 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                ID
                            </th>
                            <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                Product name
                            </th>

                            <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                Reference

                            </th>
                            <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                Type
                            </th>
                            <th scope="col" className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]">
                                Quantity
                            </th>
                            <th scope="col" className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]">
                                Date & Time
                            </th>
                            <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                Employee
                            </th>

                        </tr>

                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {props?.orderdetail?.map((item, index) => (
                            <tr key={index} className='even:bg-gray-50'>

                                <td className="text-[#363a41] text-start p-2 text-[13px] "> {item.id}</td>

                                <td className="text-[#363a41] p-2 text-[13px]">
                                    <div className='flex gap-2'>
                                        <Image width={40} height={50} src={item.img} />
                                        <div>
                                            <h2>

                                                {item.name}
                                            </h2>
                                            <span>Color - black</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-[#363a41] text-left p-2 text-[13px]">{item.ref}</td>


                                <td className="text-[#363a41] text-left p-2 text-[13px]">{item.sup}</td>
                                <td className="text-[#363a41] text-center p-2 text-[13px]">
                                 <span className='bg-[#1d1d1b] rounded px-4 py-1 text-white'>

                                 + {item.quantity}
                                 </span>
                                </td>
                                <td className="text-[#363a41] text-center p-2 text-[13px]">{item.date}</td>
                                <td className="text-[#363a41]  text-left  p-2 text-[13px]">{item.employee}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Movements