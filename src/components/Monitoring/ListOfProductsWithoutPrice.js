import React from 'react'
import { AiFillInfoCircle, AiOutlineClose } from 'react-icons/ai'
import { BiSolidPencil } from 'react-icons/bi'
import { MdDeleteForever, MdOutlineWarning } from 'react-icons/md'
const ListOfProductsWithoutPrice = (props) => {
  return (
    <div className='w-full mt-6 bg-white border border-t-[#78c4d8] border-t-[2px]'>
                <div className='p-[24px]'>
                    <h2 className='text-[24px] font-semibold text-[#363a41]'>List of products without price (0)</h2>
                </div>
                <div className='p-[24px]'>
                    <div>
                        <div className=' px-[4]'>
                            <table className={`min-w-full  ${props.orderdetail2.length === 0 ? "" : " divide-y divide-gray-300"} `}>
                                <thead>
                                    <tr className={props.orderdetail2.length === 0 ? 'hidden' : ''}>

                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                            ID
                                        </th>
                                        {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                            Image
                                        </th> */}
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                            Name

                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                            Description
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                            Displayed
                                        </th>

                                        <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-[#363a41]">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={`${props.orderdetail2.length === 0 ? "" : " divide-y divide-gray-200"} `}>
                                    {props.orderdetail2.map((item, index) => (
                                        <tr key={index}>

                                            <td className="text-[#363a41] px-3 py-4 text-[13px] ">{item.id}</td>
                                            {/* <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                                <Image src={item.img} width={41} height={41} className='w-[41px] h-[41px]' />
                                            </td> */}
                                            <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.name}</td>
                                            <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.des}</td>
                                            <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.displayed}</td>


                                            <td className='text-gray-500  px-3 py-4 ml-auto text-right'>
                                                <div className='flex items-center'>

                                                    <button className='px-1'>
                                                        <BiSolidPencil />
                                                    </button>
                                                    <button onClick={props.openModal} className='px-1'>
                                                        <MdDeleteForever />
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                    {
                                        props.orderdetail2.length === 0 &&
                                        <tr>
                                            <td colSpan={6} className='text-center'>
                                                <MdOutlineWarning className='text-[#363a41] inline-block text-[22px]' />
                                                <p className='text-[#363a41]'>
                                                    No records found
                                                </p>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
  )
}

export default ListOfProductsWithoutPrice