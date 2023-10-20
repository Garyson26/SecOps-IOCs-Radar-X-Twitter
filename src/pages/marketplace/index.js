import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaClipboardList } from 'react-icons/fa6';
import { GiGrowth, GiReceiveMoney } from 'react-icons/gi'
import { GrSettingsOption } from "react-icons/gr";
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { IoEarth } from 'react-icons/io5';
import { LiaHourglassStartSolid } from 'react-icons/lia';
import { MdPaid } from 'react-icons/md';
import { RiAccountPinCircleFill } from 'react-icons/ri';
const Marketplace = () => {
  return (
    <div>
         <div className='max-w-7xl py-10 mx-auto grid grid-cols-2'>
                <div className='flex flex-col justify-center items-start'>

                    <h2 className='text-[20px] font-bold md:text-[38px] text-gray-900'>Become an Wiestell seller</h2>
                    <p className='text-[18px] block mb-6 text-gray-900'>Start your selling journey on Wiestell and become a part of our 12 Lakh+ seller community
                    </p>
                    <Link className='bg-black text-white px-8 py-2 ' href={'/register'}>Start Selling</Link>
                </div>
                <div>
                    <Image src='/assets/images/offer.jpg' width={500} height={500} />
                </div>
            </div>
            <div className='max-w-7xl py-10  mx-auto grid grid-cols-1 gap-4 md:grid-cols-3'>
                <div className='bg-white shadow-2xl rounded p-5'>
                    <h2 className='text-[20px] text-blue-400 mb-2 font-bold md:text-[28px] text-gray-900'>Crores</h2>
                    <p className='text-[16px] block mb-6 text-gray-900'>of customers shop every day on Wiestell.in.
                    </p>
                </div>
                <div className='bg-white shadow-2xl rounded p-5'>
                    <h2 className='text-[20px] text-blue-400 mb-2 font-bold md:text-[28px] text-gray-900'>100%</h2>
                    <p className='text-[16px] block mb-6 text-gray-900'>of India's serviceable pincodes are supported for delivery through Easy ship & FBA.
                    </p>
                </div>
                <div className='bg-white shadow-2xl rounded p-5'>
                    <h2 className='text-[20px] text-blue-400 mb-2 font-bold md:text-[28px] text-gray-900'>5.1K+</h2>
                    <p className='text-[16px] block mb-6 text-gray-900'>sellers became crorepatis in 2022. You could be next.
                    </p>
                </div>
            </div>
            <div className='max-w-7xl py-10 mx-auto'>
                <h2 className='text-[20px] font-bold mb-5 md:text-[48px] text-gray-900'>Become an Wiestell seller</h2>
                <div className='max-w-7xl py-10  mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4'>
                    <div className=''>
                        <GiReceiveMoney className='text-[58px] text-gray-700 mb-3' />
                        <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[28px] text-gray-900'>Secure timely payments</h2>
                        <p className='text-[14px] block mb-6 text-gray-900'>Funds are deposited directly to your bank account every 7 days, including for Pay on Delivery order.
                        </p>
                    </div>
                    <div className=''>
                        <LiaHourglassStartSolid className='text-[58px] text-gray-700 mb-3' />
                        <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[28px] text-gray-900'>Ease of starting</h2>
                        <p className='text-[14px] block mb-6 text-gray-900'>From product photography to hassle free delivery & returns management, Wiestell has a solution for you.
                        </p>
                    </div>
                    <div className=''>
                        <IoEarth className='text-[58px] text-gray-700 mb-3' />
                        <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[28px] text-gray-900'>Sell to customers worldwide</h2>
                        <p className='text-[14px] block mb-6 text-gray-900'>Sign up for Wiestell Global Selling & reach customers in upto 200+ countries.
                        </p>
                    </div>
                    <div className=''>
                        <HiDevicePhoneMobile className='text-[58px] text-gray-700 mb-3' />
                        <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[28px] text-gray-900'>Manage business on the go</h2>
                        <p className='text-[14px] block mb-6 text-gray-900'>With the Wiestell Seller App you can manage your business, solve issues, and respond to customers – anywhere, anytime.
                        </p>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl pt-10 pb-20 mx-auto'>
                <h2 className='text-[20px] font-bold md:text-[48px] mb-5 text-gray-900'>How to sell on Wiestell</h2>
                <div className='max-w-7xl py-5 bg-white rounded-xl p-5 shadow-2xl  mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4'>
                    <div className=''>

                        <RiAccountPinCircleFill className='text-[58px] text-gray-700 mb-3' />
                        <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[28px] text-gray-900'>Create an Account </h2>
                        <p className='text-[14px] block mb-6 text-gray-900'>Create an account in 3 simple steps. All you need is your GST, PAN & an active bank account details.
                        </p>
                    </div>
                    <div className=''>
                        <FaClipboardList className='text-[58px] text-gray-700 mb-3' />

                        <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[28px] text-gray-900'>List, store & deliver </h2>
                        <p className='text-[14px] block mb-6 text-gray-900'>Complete listing your products & choose from one of the many options for storage, packaging & delivery.
                        </p>
                    </div>
                    <div className=''>
                        <GiGrowth className='text-[58px] text-gray-700 mb-3' />

                        <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[28px] text-gray-900'>Monitor sales & track growth  </h2>
                        <p className='text-[14px] block mb-6 text-gray-900'>Easily track customer orders, sales growth & payment settlements on our centralized dashboard available on desktop & app.
                        </p>
                    </div>
                    <div className=''>
                        <MdPaid className='text-[58px] text-gray-700 mb-3' />

                        <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[28px] text-gray-900'>Get paid for your sales</h2>
                        <p className='text-[14px] block mb-6 text-gray-900'>Once you become a verified Wiestell.in seller, payments are deposited safely to your bank account every 7 days, even for Pay on Delivery orders.
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Marketplace