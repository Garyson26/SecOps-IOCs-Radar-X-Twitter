import React from 'react'
import TableDataFilter from '../TableDataFilter/TableDataFilter'
import { MdCloudUpload } from 'react-icons/md'
const orderdetail = [
    // {

    //     name: 'Hummingbird printed t-shirt',

    //     qunt: '2400',
    //     price: '€5.49',


    // },
]
const ShopSearch = () => {
  return (
    <div>
            <TableDataFilter />
            <div className='border-t mt-4  bg-white border  p-6 border-t-[#78c4d8]'>
                <h3 className='text-[24px] leading-5 font-semibold text-ellipsis'>Shop search</h3>

                <div className='overflow-auto mt-5 px-[4]'>
                    <div>
                        <p className='text-[12px] text-gray-400'>
                        Cannot find any keywords that have been searched for more than once.
                        </p>
                    </div>

                </div>
                {/* <div>
                    <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                            <MdCloudUpload className='text-[16px]' />    CSV Export
                    </button>
                </div> */}
            </div>
        </div>
  )
}

export default ShopSearch