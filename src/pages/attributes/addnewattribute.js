import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { IoExtensionPuzzleSharp } from 'react-icons/io5'
import { Switch } from '@headlessui/react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const AddNewAttribute = () => {
    const [enabled, setEnabled] = useState(false)
    return (
        <div>
            <div className='bg-white'>

                <div className=' flex items-center justify-between px-4 py-5 sm:px-6  lg:px-[15px] border-b '>
                    <h1 className='text-[24px] font-semibold '>
                    Add New Attribute

                    </h1>
                    <div className='flex items-center gap-2'>

                      
                        <button className=' flex items-center border text-[14px] font-medium  text-black bg-white gap-1.5 px-3 py-1.5'>

                            Help
                        </button>
                    </div>
                </div>
                <div className='border-b flex items-center'>
                <Link className='p-[15px_20px] border-b-[3px] bg-[#f7fcfd] border-black cursor-pointer block' href="/attributes">Attributes</Link>
                    <Link className='p-[15px_20px] border-b-2 border-transparent cursor-pointer block' href="/features">Features</Link>
                </div>
            </div>
            <div className='px-4 py-8 sm:px-6  lg:px-8'>

                <div className='border-t  bg-white border p-6 border-t-[#78c4d8]'>
                    <h2 className='text-[24px] text-[#363a41] font-semibold'>Attributes</h2>
                    <div className='mt-5 grid gap-8 max-w-[83%] mx-auto'>
                        <div className='grid grid-cols-12 items-center gap-6'>
                            <label className="before:content-['*'] text-right col-span-3 before:ml-0.5 before:text-red-500">
                            Name
                            </label>
                            <input className='col-span-5' type='text' />
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
                                <label className="before:content-['*'] text-right col-span-3 before:ml-0.5 before:text-red-500">
                                Public name
                                </label>
                                <div className='col-span-5'>
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
                            
                        </div>
                        <div>
                            <div className='grid grid-cols-12 items-center gap-6'>
                                <label className="before:content-['*'] text-right col-span-3 before:ml-0.5 before:text-red-500">
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
                        <div>
                            <div className='grid grid-cols-12 items-center gap-6'>
                                <label className=" text-right col-span-3 ">
                                    Indexable
                                </label>
                                <div className='col-span-7 flex items-center  gap-3'>
                                    <Switch
                                        checked={enabled}
                                        onChange={setEnabled}
                                        className={classNames(
                                            enabled ? 'bg-green-700' : 'bg-gray-200',
                                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-0'
                                        )}
                                    >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                enabled ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                    <span>
                                        {enabled ? 'Yes' : 'No'}
                                    </span>
                                </div>


                            </div>
                            <div className='grid grid-cols-12 items-center gap-6'>
                                <label className="col-span-3">

                                </label>
                                <div className='col-span-7'>
                                    <p className='italic text-gray-600 text-[12px]'>
                                        Use this attribute in URL generated by the Faceted Search module.
                                    </p>

                                </div>
                                <div className='col-span-2' >

                                </div>

                            </div>

                        </div>
                        <div className='grid grid-cols-12 items-center gap-6'>
                            <label className="before:content-['*'] text-right col-span-3 before:ml-0.5 before:text-red-500">
                            Attribute type

                            </label>
                                                
                            <select className='pr-7  col-span-4 bg-[right_0.2rem_center]'>
                                <option>
                                Drop-down list
                                </option>
                                <option>
                                Radio buttons
                                </option>
                                <option>
                                Color or texture
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-8 flex items-center justify-between'>
                    <Link href="/attributes" className='border hover:border-black hover:bg-neutral-100 font-semibold text-[14px] px-4 py-2'>
                        Cancel
                    </Link>
                    <button className='border hover:border-black hover:bg-neutral-100 font-semibold text-[14px] px-4 py-2'>
                        Save
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddNewAttribute