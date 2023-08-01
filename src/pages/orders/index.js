import React from 'react'
import { VscGraph } from "react-icons/vsc";
import { MdInsertChart, MdRemoveShoppingCart } from "react-icons/md";
import { BiSolidWalletAlt, BiZoomIn } from 'react-icons/bi';
import { RiAccountBoxFill } from 'react-icons/ri';

const orderdetail =[
    {
        id:'1',
        ref:'KHWLILZLL',
        newclient:'no',
        delivery:'United States',
        customer:'J. DOE',
        total:'€27.30',
        payment:'Bank wire',
        status:'Canceled',
        date:'06/12/2023 19:14:05'
    },
    {
        id:'2',
        ref:'KHWLILZLL',
        newclient:'no',
        delivery:'United States',
        customer:'J. DOE',
        total:'€27.30',
        payment:'Bank wire',
        status:'Awaiting check payment',
        date:'06/12/2023 19:14:05'
    },
    {
        id:'3',
        ref:'KHWLILZLL',
        newclient:'no',
        delivery:'United States',
        customer:'J. DOE',
        total:'€27.30',
        payment:'Bank wire',
        status:'Awaiting check payment',
        date:'06/12/2023 19:14:05'
    },
    {
        id:'4',
        ref:'KHWLILZLL',
        newclient:'no',
        delivery:'United States',
        customer:'J. DOE',
        total:'€27.30',
        payment:'Bank wire',
        status:'Waiting capture',
        date:'06/12/2023 19:14:05'
    },
    {
        id:'5',
        ref:'KHWLILZLL',
        newclient:'no',
        delivery:'United States',
        customer:'J. DOE',
        total:'€27.30',
        payment:'Bank wire',
        status:'Payment error',
        date:'06/12/2023 19:14:05'
    },
    {
        id:'6',
        ref:'KHWLILZLL',
        newclient:'no',
        delivery:'United States',
        customer:'J. DOE',
        total:'€27.30',
        payment:'Bank wire',
        status:'Awaiting check payment',
        date:'06/12/2023 19:14:05'
    }
]

const Orders = () => {
    return (
        <div className='px-4 py-8 sm:px-6  lg:px-8'>

            <div className='grid grid-cols-4 gap-3'>
                <div className='border px-4 py-3 font-ibm bg-white'>
                    <div className='flex items-center gap-2'>
                        <MdInsertChart className='text-[36px] text-[#78c4d8]' />
                        <div >
                            <span className='text-[14px] text-[#363a41]'>
                                Conversion Rate
                            </span>
                            <div className='flex gap-3 items-center '>
                                <span className='text-[#1d1d1b] text-[14px]'>
                                    0%
                                </span>
                                <span className='text-[12px] text-[#6c868e]'>
                                    30 DAYS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border px-4 py-3 font-ibm bg-white'>
                    <div className='flex items-center gap-2'>
                        <MdRemoveShoppingCart className='text-[36px] text-[#78c4d8]' />
                        <div >
                            <span className='text-[14px] text-[#363a41]'>
                                Abandoned Carts
                            </span>
                            <div className='flex gap-3 items-center '>
                                <span className='text-[#1d1d1b] text-[14px]'>
                                    0
                                </span>
                                <span className='text-[12px] text-[#6c868e]'>
                                    TODAY
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border px-4 py-3 font-ibm bg-white'>
                    <div className='flex items-center gap-2'>
                        <BiSolidWalletAlt className='text-[36px] text-[#78c4d8]' />
                        <div >
                            <span className='text-[14px] text-[#363a41]'>
                                Average Order Value
                            </span>
                            <div className='flex gap-3 items-center '>
                                <span className='text-[#1d1d1b] text-[14px]'>
                                    €0.00
                                </span>
                                <span className='text-[12px] text-[#6c868e]'>
                                    30 DAYS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border px-4 py-3 font-ibm bg-white'>
                    <div className='flex items-center gap-2'>
                        <RiAccountBoxFill className='text-[36px] text-[#78c4d8]' />
                        <div >
                            <span className='text-[14px] text-[#363a41]'>
                                Net Profit per Visit
                            </span>
                            <div className='flex gap-3 items-center '>
                                <span className='text-[#1d1d1b] text-[14px]'>
                                    €0.00
                                </span>
                                <span className='text-[12px] text-[#6c868e]'>
                                    30 DAYS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t mt-8 bg-white border p-6 border-t-[#78c4d8]'>
                <h2 className='text-[24px] text-[#363a41] font-semibold'>Orders (5)</h2>
                <div className='mt-5 px-[4]'>
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#363a41] sm:pl-0">

                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                    ID
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                    Reference
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                    New client
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                    Delivery
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                    Customer
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                    Total
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                    Payment
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                    Status
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                    Date
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-[#363a41]">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orderdetail.map((item , index) => (
                                <tr key={index}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                      <input type='checkbox' className='text-black ring-0 focus:ring-0 ' />
                                    </td>
                                    <td className="text-[#363a41] px-3 py-4 text-[13px] ">{item.id}</td>
                                    <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.ref}</td>
                                    <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.newclient}</td>
                                    <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.delivery}</td>
                                    <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.customer}</td>
                                    <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.total}</td>
                                    <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.payment}</td>
                                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    <span 
                                        className={`${item.status === 'Awaiting check payment' ? 'bg-[#34209E]' : item.status === 'Canceled' ? "bg-[#2C3E50]" : item.status === 'Waiting capture' ?  "bg-[#E74C3C]" : "bg-[#3498D8]"} px-2 py-1 text-white font-semibold`}>

                                    {item.status}
                                    </span>
                                    </td>
                                    <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.date}</td> 
                                    <td className='text-gray-500  px-3 py-4 ml-auto text-right'><BiZoomIn /></td>  
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders