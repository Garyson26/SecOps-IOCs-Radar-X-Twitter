import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { IoExtensionPuzzleSharp } from 'react-icons/io5'
import { Switch } from '@headlessui/react'

const AddNewFeatureValue = () => {
  return (
    <div>
    <div className='bg-white'>

        <div className=' flex items-center justify-between px-4 py-5 sm:px-6  lg:px-[15px] border-b '>
            <h1 className='text-[24px] font-semibold '>
            Add New Feature

            </h1>
            <div className='flex items-center gap-2'>

                <Link href="/products/create" className=' flex items-center border text-[14px] font-medium border-black text-black bg-white gap-1.5 px-3 py-1.5'>

                    <IoExtensionPuzzleSharp className='text-[16px]' /> Optimize product creation
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
            <h2 className='text-[24px] text-[#363a41] font-semibold'>Feature value</h2>
            <div className='mt-5 grid gap-8 max-w-[83%] mx-auto'>
            <div className='grid grid-cols-12 items-center gap-6'>
                            <label className="before:content-['*'] text-right col-span-3 before:ml-0.5 before:text-red-500">
                            Feature

                            </label>
                                                
                            <select className='pr-7  col-span-4 bg-[right_0.2rem_center]'>
                                <option>
                                Composition
                                </option>
                                <option>
                                Property
                                </option>
                                
                            </select>
                        </div>
                <div className='grid grid-cols-12 items-center gap-6'>
                    <label className="before:content-['*'] text-right col-span-3 before:ml-0.5 before:text-red-500">
                        Name
                    </label>
                    <input className='col-span-7' type='text' />
                    <select className='pr-7  col-span-2 bg-[right_0.2rem_center]'>
                        <option>
                            en
                        </option>
                        <option>
                            eng
                        </option>
                        <option>
                            eng
                        </option>
                    </select>
                </div>
                <div>

                    <div className='grid grid-cols-12 items-center gap-6'>
                        <label className="col-span-3 text-end">
                            URL
                        </label>
                        <div className='col-span-7'>
                            <input className='w-full' type='text' />

                        </div>

                        <select className='pr-7  col-span-2 bg-[right_0.2rem_center]'>
                            <option>
                                en
                            </option>
                            <option>
                                eng
                            </option>
                            <option>
                                eng
                            </option>
                        </select>
                    </div>
                    <div className='grid grid-cols-12 items-center gap-6'>
                        <label className="col-span-3">

                        </label>
                        <div className='col-span-7'>
                            <p className='italic text-gray-600 text-[12px]'>
                                When the Faceted Search module is enabled, you can get more detailed URLs by choosing the word that best represent this feature. By default, PrestaShop uses the feature's name, but you can change that setting using this field.
                            </p>

                        </div>
                        <div className='col-span-2' >

                        </div>

                    </div>
                </div>
                <div>

                    <div className='grid grid-cols-12 items-center gap-6'>
                        <label className=" text-right col-span-3 ">
                            Meta title
                        </label>
                        <div className='col-span-7'>
                            <input className='w-full' type='text' />

                        </div>

                        <select className='pr-7  col-span-2 bg-[right_0.2rem_center]'>
                            <option>
                                en
                            </option>
                            <option>
                                eng
                            </option>
                            <option>
                                eng
                            </option>
                        </select>
                    </div>
                    <div className='grid grid-cols-12 items-center gap-6'>
                        <label className="col-span-3">

                        </label>
                        <div className='col-span-7'>
                            <p className='italic text-gray-600 text-[12px]'>
                                When the Faceted Search module is enabled, you can get more detailed page titles by choosing the word that best represent this feature. By default, PrestaShop uses the feature's name, but you can change that setting using this field.
                            </p>

                        </div>
                        <div className='col-span-2' >

                        </div>

                    </div>
                </div>
               

            </div>
        </div>
        <div className='bg-white p-8 flex items-center justify-between'>
            <Link href="/features" className='border hover:border-black hover:bg-neutral-100 font-semibold text-[14px] px-4 py-2'>
                Cancel
            </Link>
            <div className='flex items-center gap-2'>
            <button className='border hover:border-black hover:bg-neutral-100 font-semibold text-[14px] px-4 py-2'>
            Save then add another value
            </button>
            <button className='border hover:border-black hover:bg-neutral-100 font-semibold text-[14px] px-4 py-2'>
                Save
            </button>
            </div>
        </div>

    </div>
</div>
  )
}

export default AddNewFeatureValue