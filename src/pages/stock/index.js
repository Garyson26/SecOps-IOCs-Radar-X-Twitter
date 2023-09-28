import Image from 'next/image';
import React, { forwardRef } from 'react'
import { BiCalendarEvent, BiChevronDown, BiDotsVerticalRounded, BiSearchAlt2, BiSolidPencil, BiZoomIn } from 'react-icons/bi';
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Link from 'next/link';
import { FiPlusCircle, FiSearch } from 'react-icons/fi';
import { AiFillCaretDown, AiFillPlusCircle, AiOutlineClose } from 'react-icons/ai';
import { FaPencilAlt, FaSearchPlus } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsCheck2 } from 'react-icons/bs';
import { MdCloudDownload, MdCloudUpload, MdFilterList } from 'react-icons/md';
import { IoFilterSharp } from 'react-icons/io5';
import CheckboxTree from 'react-checkbox-tree';
import DatePicker from "react-datepicker";
import Stock from './stock';
import Movements from './movements';


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
        sup: 'Accessories supplier',
        pricetex: '€27.30',
        pricewithouttext: '€27.30',
        value: '100',
        status: true,
    },
    {
        id: '1',
        img: '/assets/catalog-1.webp',
        name: 'Hummingbird printed t-shirt',
        ref: 'demo_1',
        sup: 'Accessories supplier',
        category: 'Men',
        pricetex: '€27.30',
        pricewithouttext: '€27.30',
        Values: '100',
        status: true,
    },
]

const orderdetail2 = [
    {
        id: '1',
        img: '/assets/catalog-1.webp',
        name: 'Hummingbird printed t-shirt',
        ref: 'demo_1',
        category: 'Men',
        sup: 'Accessories supplier',
        pricetex: '€27.30',
        quantity: '3',
        date: '09/23/2023 10:27:33',
        employee: 'Demo PrestaShop',
    },
]
const nodes = [{
    value: 'Home',
    label: 'Home',
    children: [
        {
            value: 'Clothes',
            label: 'Clothes',
            children: [
                {
                    value: 'Men',
                    label: 'Men'
                },
                {
                    value: 'Women',
                    label: 'Women'
                },


            ],
        },
        {
            value: 'Accessories',
            label: 'Accessories',
            children: [
                {
                    value: 'Stationery',
                    label: 'Stationery'
                },
                {
                    value: 'Home Accessories',
                    label: 'Home Accessories'
                },


            ],
        },
        { value: 'Art', label: 'Art' },

    ],
}];
const StockManagement = () => {
    const [enabled, setEnabled] = useState()
    const [openModal, setOpenModal] = useState(false)
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [selectedTab, setSelectedTab] = useState(1)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <div className='relative flex items-center border'>
            <input type='text' value={value} className="border-none max-w-[110px]" onClick={onClick} ref={ref} />
            <div className=' py-3 flex items-center justify-center bg-[#f7f7f7]  w-[40px]'>

                <BiCalendarEvent className=' ' />
            </div>
        </div>

    ));
    return (
        <div>
            <div className='bg-white'>
                <div className=' flex items-center justify-between px-4 py-5 sm:px-6  lg:px-[15px] border-b '>
                    <h1 className='text-[24px] font-semibold '>
                        Stock management
                    </h1>
                    <div className='flex items-center gap-2'>

                        <button className=' flex items-center border text-[14px] font-medium  text-black bg-white gap-1.5 px-3 py-1.5'>

                            Help
                        </button>
                    </div>
                </div>
                <div className='border-b flex items-center'>
                    <button onClick={() => setSelectedTab(1)} className={`${selectedTab === 1 ? " border-b-[3px] bg-[#f7fcfd] border-black" : "border-transparent"} p-[15px_20px] cursor-pointer block`} >Stock</button>
                    <button onClick={() => setSelectedTab(2)} className={`${selectedTab === 2 ? " border-b-[3px] bg-[#f7fcfd] border-black" : "border-transparent"} p-[15px_20px] cursor-pointer block`} >Movements</button>
                </div>
            </div>
            <div className='px-4 py-8 sm:px-6  lg:px-8'>
                <h2 className='text-[14px] mb-3 text-gray-700'>Search products (search by name, reference, supplier)</h2>
                <div className='w-full max-w-[700px] relative'>
                    <input placeholder="" className='border border-gray-500 w-full' />
                    <button className='bg-black text-white gap-1 font-semibold flex items-center px-4 py-3 absolute top-0 h-full right-0'>
                        <BiSearchAlt2 />  Search
                    </button>
                </div>
                <div className='mt-2'>
                    <button onClick={() => setOpenModal(!openModal)} className='border border-[#bbcdd2] px-2 py-1 justify-between flex items-center rounded bg-white max-w-[700px] w-full '>

                        <div className='flex items-center gap-2'>
                            <MdFilterList className='text-gray-700 text-[20px]' />
                            Advanced filters

                        </div>
                        <BiChevronDown className='text-gray-700 float-right text-[20px]' />
                    </button>
                    {
                        openModal &&
                        <div className='grid grid-cols-3 gap-8 p-4 bg-white rounded border border-[#bbcdd2]'>
                            <div>
                           { selectedTab === 1 ?
                           <>
                                <h1 className='text-[1.25rem] mb-2 font-bold'>Filter by supplier</h1>
                                <div className='border rounded p-3'>
                                    <input className='w-full border border-gray-300' />
                                </div>
                           </>
:
<>

                                <div>
                                    <h1 className='text-[1.25rem] mb-2 font-bold'>Filter by movement type</h1>
                                    <select className='border-gray-300 w-full border'>
                                        <option>
                                            None
                                        </option>
                                        <option>
                                            Employee Edition
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <h1 className='text-[1.25rem] mt-5 mb-2 font-bold'>Filter by employee</h1>
                                    <select className='border-gray-300 w-full border'>
                                        <option>
                                            None
                                        </option>
                                        <option>
                                            PrestaShop Demo
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <h1 className='text-[1.25rem]  mt-5  mb-2 font-bold'>Filter by period</h1>
                                    <div className='flex gap-8 items-center'>
                                        <div >
                                            <span className='text-gray-600 text-[12px] block mb-1'>
                                                From
                                            </span>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                selectsStart
                                                startDate={startDate}
                                                endDate={endDate}
                                                customInput={<ExampleCustomInput />}
                                            />
                                        </div>
                                        <div>
                                            <span className='text-gray-600 text-[12px] block mb-1'>
                                                To
                                            </span>
                                            <DatePicker
                                                selected={endDate}
                                                onChange={(date) => setEndDate(date)}
                                                selectsEnd
                                                startDate={startDate}
                                                endDate={endDate}
                                                minDate={startDate}
                                                customInput={<ExampleCustomInput />}
                                            />
                                        </div>
                                    </div>
                                </div>
</>
}
                            </div>
                            <div>
                                <h1 className='text-[1.25rem] mb-2 font-bold'>Filter by supplier</h1>
                                <div className='border rounded p-3'>
                                    <CheckboxTree
                                        showNodeIcon={false}
                                        nodes={nodes}
                                        checked={checked}
                                        expanded={expanded}
                                        onCheck={(checked) => setChecked(checked)}
                                        onExpand={(expanded) => setExpanded(expanded)}
                                    />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-[1.25rem] mb-2 font-bold'>Filter by status</h1>
                                <div className=''>
                                    <input className='text-black ring-0 mr-2 focus:ring-0' type="radio" id="enabled" name="fav_language" value="Enabled" />
                                    <label for="enabled">Enabled</label><br />
                                    <input className='text-black ring-0 mr-2 focus:ring-0' type="radio" id="disabled" name="fav_language" value="Disabled" />
                                    <label for="disabled">Disabled</label><br />
                                    <input className='text-black ring-0 mr-2 focus:ring-0' type="radio" id="all" name="fav_language" value="All" />
                                    <label for="all">All</label>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                {
                      selectedTab === 1 ?
                <div className='flex items-center justify-between px-3 py-4'>
                    <div className='flex items-center gap-2'>

                        <input type='checkbox' className='text-black ring-0 focus:ring-0 ' />
                        <h3 className='text-[14px]'>
                            Display products below low stock level first</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button>
                            <MdCloudUpload className='text-[20px]' />
                        </button>
                        <button>
                            <MdCloudDownload className='text-[20px]' />
                        </button>
                    </div>
                </div>
                :
                <></>
                }

                <div className={`border-t  bg-white border  p-6  ${selectedTab === 2 ? 'pt-0 mt-5' : 'border-t-[#78c4d8]' }`}>
                    {
                        selectedTab === 1 ?
                            <Stock orderdetail={orderdetail} /> :
                            <Movements orderdetail={orderdetail2} />
                    }
                </div>
            </div>
        </div>
    )
}

export default StockManagement