import React, { useState } from 'react'
import TableDataFilter from '../TableDataFilter/TableDataFilter'
import { MdCloudUpload } from 'react-icons/md'

import NewsLetterChart from '../Common/NewsLetterChart'
const Newsletter = () => {
    return (
        <div>
            <TableDataFilter />
            <div className='border-t mt-4  bg-white border  p-6 border-t-[#78c4d8]'>
                <h3 className='text-[24px] leading-5 font-semibold mb-10 text-ellipsis'>Newsletter</h3>


                <div className='grid gap-8 lg:grid-cols-12'>
                    <div className='lg:col-span-8'>
                        <NewsLetterChart />
                    </div>
                    <div className='lg:col-span-4'>
                        <div className='border-b pb-3 '>
                            <span className='text-[12px] block  text-gray-600'>Customer registrations: 0</span>
                            <span className='text-[12px] block text-gray-600'>Visitor registrations: 0</span>
                            <span className='text-[12px] block text-gray-600'>Both: 0</span>
                        </div>
                        <div className='pt-3'>

                            <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                                <MdCloudUpload className='text-[16px]' />    CSV Export
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter