import Image from 'next/image';
import React from 'react'
import { BiDotsVerticalRounded, BiSolidPencil, BiZoomIn } from 'react-icons/bi';
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Link from 'next/link';
import { FiPlusCircle, FiSearch } from 'react-icons/fi';
import { AiFillCaretDown, AiFillPlusCircle } from 'react-icons/ai';
import { FaPencilAlt, FaSearchPlus } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { IoExtensionPuzzleSharp } from "react-icons/io5";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const orderdetail = [
    {
        id: '1',
        img: '/assets/catalog-1.webp',
        name: 'Hummingbird printed t-shirt',
        ref: 'demo_1',
        category: 'Men',
        pricetex: '€27.30',
        pricewithouttext: '€27.30',
        value: '100'
    },
    {
        id: '1',
        img: '/assets/catalog-1.webp',
        name: 'Hummingbird printed t-shirt',
        ref: 'demo_1',
        category: 'Men',
        pricetex: '€27.30',
        pricewithouttext: '€27.30',
        Values: '100'
    },
]
const Features = () => {
    const [enabled, setEnabled] = useState()
    const [opneModal, setOpenModal] = useState(false)

    return (
        <div>
            <div className='bg-white'>

                <div className=' flex items-center justify-between px-4 py-5 sm:px-6  lg:px-[15px] border-b '>
                    <h1 className='text-[24px] font-semibold '>
                    Features
                    </h1>
                    <div className='flex items-center gap-2'>
                        <Link  href="/features/addnewfeature"  className=' flex items-center border text-[14px] font-medium border-black text-black bg-white gap-1.5 px-3 py-1.5'>

                            <AiFillPlusCircle className='text-[16px]' />  Add new feature
                        </Link>
                        <Link href="/features/addnewfeaturevalue" className=' flex items-center border text-[14px] font-medium border-black text-black bg-white gap-1.5 px-3 py-1.5'>

                            <AiFillPlusCircle className='text-[16px]' />  Add new feature value
                        </Link>
                       
                        <button className=' flex items-center border text-[14px] font-medium  text-black bg-white gap-1.5 px-3 py-1.5'>

                            Help
                        </button>
                    </div>
                </div>
                <div className='border-b flex items-center'>
                    <Link className='p-[15px_20px] border-b-2 border-transparent cursor-pointer block' href="/attributes">Attributes</Link>
                    <Link className='p-[15px_20px] border-b-[3px] bg-[#f7fcfd] border-black cursor-pointer block' href="/features">Features</Link>
                </div>
            </div>
            <div className='px-4 py-8 sm:px-6  lg:px-8'>

                <div className='border-t  bg-white border p-6 border-t-[#78c4d8]'>
                    <h2 className='text-[24px] text-[#363a41] font-semibold'>Attributes (5)</h2>
                    <div className='mt-5 overflow-auto px-[4]'>
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#363a41] ">

                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                        ID
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                        Name
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                        Value
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                        Position
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">

                                    </th>

                                </tr>
                                <tr className='border-t border-[#78c4d8]'>
                                    <td className='text-center bg-[#f7f7f7] p-2'>
                                        --
                                    </td>
                                    <td className='p-2 max-w-[50px] bg-[#f7f7f7]' >
                                        <input className='w-full' type='number' />
                                    </td>
                                    <td className='p-2 bg-[#f7f7f7]'>
                                        <input type="text" className='w-full' />
                                    </td>
                                    <td className='text-center bg-[#f7f7f7] p-2'>
                                        --
                                    </td>
                                    <td className='p-2 bg-[#f7f7f7]'>
                                        <input type='number' className='max-w-[100px]' />
                                    </td>
                                    <td className='text-end bg-[#f7f7f7] p-2'>
                                        <button className='bg-black text-white ml-auto flex items-center px-4   p-2 gap-1'>
                                            <FiSearch /> Search
                                        </button>
                                    </td>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {orderdetail.map((item, index) => (
                                    <tr key={index} className='even:bg-gray-50'>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 ">
                                            <input type='checkbox' className='text-black ring-0 focus:ring-0 ' />
                                        </td>
                                        <td className="text-[#363a41] text-center p-2 text-[13px] ">{item.id}</td>

                                        <td className="text-[#363a41] p-2 text-[13px]">{item.name}</td>
                                        <td className="text-[#363a41] text-center p-2 text-[13px]">{item.value}</td>

                                        <td className="text-[#363a41] p-2 text-[13px]">{index + 1}</td>
                                        <td className='text-gray-500  p-2 ml-auto text-right'>
                                            <div className="relative border whitespace-nowrap float-right   align-middle ">
                                                <Link href="#" className="whitespace-nowrap pr-0 p-[8px] inline-flex items-center text-[14px]" title="View">
                                                    <FaSearchPlus className='mr-2' /> View
                                                </Link>

                                                <button onClick={() => { setEnabled(index + 1), setOpenModal(!opneModal) }} className="btn  p-[8px] btn-default relative float-none inline-flex items-center dropdown-toggle" data-toggle="dropdown">
                                                    <AiFillCaretDown />
                                                </button>
                                                <ul className={`${enabled === index + 1 && opneModal ? 'block' : 'hidden'} z-[2] absolute min-w-[160px] bg-white border p-[8px] right-0`}>
                                                    <li>
                                                        <Link href="#" title="Edit" className="p-[8px] flex items-center justify-start gap-2">
                                                            <FaPencilAlt /> Edit
                                                        </Link>
                                                    </li>
                                                    <li className="divider">
                                                    </li>
                                                    <li>
                                                        <Link href="#" title="Delete" className=" p-[8px] flex items-center justify-start gap-2" >
                                                            <RiDeleteBin6Fill /> Delete
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features