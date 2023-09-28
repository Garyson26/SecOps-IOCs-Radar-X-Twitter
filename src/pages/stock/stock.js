import Image from 'next/image'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSolidPencil } from 'react-icons/bi'
import { BsCheck2 } from 'react-icons/bs'

const Stock = (props) => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div>

                    <input type='checkbox' className='text-black ring-0 mr-3 focus:ring-0 ' />
                    <input className='max-w-[100px] pr-[40px]' />
                </div>
                <div>
                    <button className='bg-black text-white gap-1 font-semibold cursor-not-allowed disabled:bg-gray-400 flex items-center px-4 py-2  h-full right-0' disabled>
                        <BiSolidPencil />   Apply new quantity
                    </button>
                </div>
            </div>
            <div className='mt-5 overflow-auto px-[4]'>
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                ID
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-[#363a41]">
                                Product name
                            </th>

                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-[#363a41]">

                                Reference

                            </th>
                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-[#363a41]">
                                Supplier
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-[#363a41]">
                                Status
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-[#363a41]">
                                Physical
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-[#363a41]">
                                Reserved
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-[#363a41]">
                                Available

                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                Edit quantity


                            </th>
                        </tr>

                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {props?.orderdetail?.map((item, index) => (
                            <tr key={index} className='even:bg-gray-50'>

                                <td className="text-[#363a41] text-start p-2 text-[13px] "><input type='checkbox' className='text-black ring-0 mr-3 focus:ring-0 ' /> {item.id}</td>

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
                                <td className="text-[#363a41] text-center p-2 text-[13px]">{item.ref}</td>


                                <td className="text-[#363a41] text-center p-2 text-[13px]">{item.sup}</td>
                                <td className="text-[#363a41] text-center p-2 text-[13px]">
                                    {
                                        item.status ?
                                            <BsCheck2 className='text-green-600 inline-block text-[20px]' />
                                            :
                                            <AiOutlineClose className='text-red-600 inline-block text-[20px]' />

                                    }
                                </td>
                                <td className="text-[#363a41] text-center p-2 text-[13px]">{item.value}</td>
                                <td className="text-[#363a41]  text-center  p-2 text-[13px]">{index + 1}</td>
                                <td className="text-[#363a41] text-center p-2 text-[13px]">{item.value}</td>
                                <td className='text-gray-500  p-2 ml-auto text-right'>
                                    <div className="relative group border whitespace-nowrap float-right   align-middle ">
                                        <input className='max-w-[100px] pr-[40px]' />
                                        <button className='w-[40px] hidden group-hover:block top-0 right-0 h-full absolute bg-green-400'>
                                            <BsCheck2 className='text-white inline-block text-[20px]' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Stock