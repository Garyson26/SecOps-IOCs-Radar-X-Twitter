import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { IoExtensionPuzzleSharp } from 'react-icons/io5'
import { Switch } from '@headlessui/react'

const Preferences = () => {
  return (
    <div>
      <div className='bg-white'>

        <div className=' flex items-center justify-between px-4 py-5 sm:px-6  lg:px-[15px] border-b '>
          <h1 className='text-[24px] font-semibold '>
            Preferences
          </h1>
          <div className='flex items-center gap-2'>
            <Link href="/products/create" className=' flex items-center border text-[14px] font-medium border-black text-black bg-white gap-1.5 px-3 py-1.5'>

              <IoExtensionPuzzleSharp className='text-[16px]' /> Improve shipping
            </Link>
            <button className=' flex items-center border text-[14px] font-medium  text-black bg-white gap-1.5 px-3 py-1.5'>

              Help
            </button>
          </div>
        </div>

      </div>
      <div className='px-4 py-8 sm:px-6  lg:px-8'>

        <div className='border-t  bg-white border p-6 border-t-[#78c4d8]'>
          <h2 className='text-[24px] text-[#363a41] font-semibold'>Handling</h2>
          <div className='mt-5 grid gap-8 max-w-[83%] mx-auto'>
            <div className='grid grid-cols-12 items-center gap-2 lg:gap-6'>
              <label className="text-left lg:text-right col-span-12 lg:col-span-3 text-[14px] ">
                Handling charges
              </label>
              <div className='col-span-12 lg:col-span-9  flex '>
                <span className='whitespace-nowrap py-2 px-2 border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]'>
                  € (tax excl.)
                </span>
                <input className='w-full border-gray-300 text-[14px]' type='text' />
              </div>
            </div>
            <div className='grid grid-cols-12 items-center gap-2 lg:gap-6'>
              <label className="text-left lg:text-right col-span-12 lg:col-span-3 text-[14px] ">
                Free shipping starts at
              </label>
              <div className='col-span-12 lg:col-span-9  flex '>
                <span className='whitespace-nowrap py-2 px-2 border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]'>
                  €
                </span>
                <input className='w-full border-gray-300 text-[14px]' type='text' />
              </div>
            </div>
            <div className='grid grid-cols-12 items-center gap-2 lg:gap-6'>
              <label className="text-left lg:text-right col-span-12 lg:col-span-3 text-[14px] ">
                Free shipping starts at
              </label>
              <div className='col-span-12 lg:col-span-9  flex '>
                <input className='w-full border-gray-300 text-[14px]' type='text' />
                <span className='whitespace-nowrap py-2 px-2 border border-gray-300 border-l-0 bg-[#f7f7f7] text-[#505969] text-[14px]'>
                  kg
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white p-8 flex items-center justify-end'>


          <button className='border hover:border-black bg-black text-white hover:bg-zinc-600 font-semibold text-[14px] px-4 py-2'>
            Save
          </button>

        </div>

      </div>
      <div className='px-4 py-8 sm:px-6  lg:px-8'>

        <div className='border-t  bg-white border p-6 border-t-[#78c4d8]'>
          <h2 className='text-[24px] text-[#363a41] font-semibold'>Carrier options</h2>
          <div className='mt-5 grid gap-8 max-w-[83%] mx-auto'>
            <div className='grid grid-cols-12  gap-2 lg:gap-6'>
              <label className="before:content-['*'] py-2 text-left lg:text-right col-span-12 lg:col-span-3 before:ml-0.5 before:text-red-500 text-[14px] ">
                Default carrier
              </label>
              <div className='col-span-12 lg:col-span-9 '>
                <select className='pr-7 w-full  border-gray-300 bg-[right_0.2rem_center]'>
                  <option>
                    Best price
                  </option>
                  <option>
                    Best grade
                  </option>
                  <option>
                    1 - Click and collect (Pick up in-store)
                  </option>
                  <option>
                    2 - My carrier (Delivery next day!)
                  </option>
                </select>
                <span className='text-[#3f3f3d] block text-[12px]'>Your shop's default carrier.</span>

              </div>
            </div>
            <div className='grid grid-cols-12 items-center gap-2 lg:gap-6'>
              <label className="before:content-['*'] py-2 text-left lg:text-right col-span-12 lg:col-span-3 before:ml-0.5 before:text-red-500 text-[14px] ">
                Sort by
              </label>
              <div className='col-span-12 lg:col-span-9 '>
                <select className='pr-7  w-full border-gray-300 bg-[right_0.2rem_center]'>
                  <option>
                    Price
                  </option>
                  <option>
                    Position
                  </option>

                </select>
                <span className='text-[#3f3f3d] block text-[12px]'>This will only be visible in the front office.</span>

              </div>
            </div>
            <div className='grid grid-cols-12 items-center gap-2 lg:gap-6'>
              <label className="before:content-['*'] py-2 text-left lg:text-right col-span-12 lg:col-span-3 before:ml-0.5 before:text-red-500 text-[14px] ">
                Order by
              </label>
              <div className='col-span-12 lg:col-span-9 '>
                <select className='pr-7 w-full  border-gray-300 bg-[right_0.2rem_center]'>
                  <option>
                    Ascending
                  </option>
                  <option>
                    Descending
                  </option>

                </select>
                <span className='text-[#3f3f3d] block text-[12px]'>This will only be visible in the front office.</span>

              </div>
            </div>

          </div>
        </div>
        <div className='bg-white p-8 flex items-center justify-end'>


          <button className='border hover:border-black bg-black text-white hover:bg-zinc-600 font-semibold text-[14px] px-4 py-2'>
            Save
          </button>

        </div>

      </div>
    </div>
  )
}

export default Preferences