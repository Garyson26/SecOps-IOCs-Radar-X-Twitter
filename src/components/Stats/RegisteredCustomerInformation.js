import React from 'react'
import TableDataFilter from '../TableDataFilter/TableDataFilter'
import { MdCloudUpload } from 'react-icons/md'
import PieChart from '../Common/PieChart'
const orderdetail = [
    {
        reference: 'demo_19',
        name: 'Hummingbird printed t-shirt',
        qunt: '2400',
    },
]
const RegisteredCustomerInformation = () => {
    return (
        <div>
            <TableDataFilter />
            <div className='border-t mt-4  bg-white border  p-6 border-t-[#78c4d8]'>
                <h3 className='text-[24px] leading-5 font-semibold text-ellipsis'>Registered customer information</h3>
               
               <div className='grid gap-16 mt-8'>

                <div className='grid grid-cols-12'>
                    <div className='lg:col-span-8 '>
                        <PieChart label={['Man']} />
                    </div>
                    <div className='col-span-4  divide-y' >
                        <div className='pb-4'>
                            <p className='text-[12px] text-gray-500 block '>
                                Gender distribution allows you to determine the percentage of men and women shoppers on your store.
                            </p>
                        </div>
                        <div className='pt-4'>
                            <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                                <MdCloudUpload className='text-[16px]' />    CSV Export
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='lg:col-span-8'>
                        <PieChart label={['50-59', 'Unknown']} />
                    </div>
                    <div className='col-span-4  divide-y' >
                        <div className='pb-4'>
                            <p className='text-[12px] text-gray-500 block '>
                                Age ranges allow you to better understand target demographics.
                            </p>
                        </div>
                        <div className='pt-4'>
                            <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                                <MdCloudUpload className='text-[16px]' />    CSV Export
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='lg:col-span-8'>
                        <PieChart label={['France', 'United States']} />
                    </div>
                    <div className='col-span-4  divide-y' >
                        <div className='pb-4'>
                            <p className='text-[12px] text-gray-500 block '>
                            Country distribution allows you to analyze which part of the World your customers are shopping from.
                            </p>
                        </div>
                        <div className='pt-4'>
                            <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                                <MdCloudUpload className='text-[16px]' />    CSV Export
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='lg:col-span-8'>
                        <PieChart label={[ 'Euro (EUR)']} />
                    </div>
                    <div className='col-span-4  divide-y' >
                        <div className='pb-4'>
                            <p className='text-[12px] text-gray-500 block '>
                            Currency range allows you to determine which currency your customers are using.
                            </p>
                        </div>
                        <div className='pt-4'>
                            <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                                <MdCloudUpload className='text-[16px]' />    CSV Export
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='lg:col-span-8'>
                        <PieChart label={[ 'English (English)']} />
                    </div>
                    <div className='col-span-4  divide-y' >
                        <div className='pb-4'>
                            <p className='text-[12px] text-gray-500 block '>
                               
Language distribution allows you to analyze the browsing language used by your customers.
                            </p>
                        </div>
                        <div className='pt-4'>
                            <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                                <MdCloudUpload className='text-[16px]' />    CSV Export
                            </button>
                        </div>
                    </div>
                </div>
               </div>

            </div>
        </div>
    )
}

export default RegisteredCustomerInformation