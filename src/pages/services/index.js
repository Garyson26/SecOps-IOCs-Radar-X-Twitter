import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <div>
            <div className='max-w-7xl py-10 mx-auto gap-14 grid grid-cols-2'>
                <div>
                    <Image src='/assets/images/microsoft-edge-6CNB3iD8M4E-unsplash.jpg' className='object-cover w-full h-auto' width={500} height={500} />
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <h2 className='text-[20px] font-bold md:text-[38px] text-gray-900'>Its time to make a difference and grow your business!</h2>
                    <p className='text-[18px] block mb-6 text-gray-900'>Offer Professional Services To 2 Lakh+ Sellers In worldwide.
                    </p>
                    <Link className='bg-black text-white px-8 py-2 ' href={'/register'}>Register</Link>
                </div>

            </div>
            <div className='max-w-7xl py-10 mx-auto'>
                <h2 className='text-[20px] font-bold mb-5 text-center md:text-[38px] text-gray-900'>SERVICES THAT YOU CAN PROVIDE</h2>
                <div className='max-w-7xl py-10  mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4'>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/accouting.jpeg' className='object-cover w-full h-auto min-h-[193.48px]' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Account Management</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Provide end-to-end services to a host of sellers. Help the sellers build a long term relationship with their customers.
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/acount.jpeg' className='object-cover w-full h-auto min-h-[193.48px]' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Accounting</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Provide payment reconciliation and integrated accounting services to sellers and help them with enhanced product profitability analysis.
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/advatise.jpeg' className='object-cover w-full h-auto min-h-[193.48px]' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Advertising</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Lend your advertising services to sellers across the country. Help them promote their products and boost their sales.
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/ecommerce_product_catalog_management.jpg' className='object-cover w-full h-auto min-h-[193.48px]' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Cataloging</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Connect with a host of sellers and help them build an appealing catalogue with compelling content that attracts customers.
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/white.jpg' className='object-cover w-full h-auto min-h-[193.48px]' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>FBF Onboarding</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Onboard to FBF
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/camera.jpeg' className='object-cover w-full h-auto min-h-[193.48px]' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Imaging</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Provide photoshoot and editing services to sellers across the country and help them boost their sales.
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/liquid.jpeg' className='object-cover w-full h-auto min-h-[193.48px]' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Liquidation</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Offer your liquidation services to sellers who are willing to sell-off their dead inventory or excess returns.
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/bussnesmen.jpeg' className='object-cover w-full h-auto min-h-[193.48px]' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Seller Account Reinstatement</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Help sellers in reinstating their suspended accounts and ensure their accounts don't get suspended in future
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/traning.jpeg' className='object-cover w-full h-auto min-h-[193.48px]' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Seller Training</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Provide in-person classroom / online training to new sellers & recently onboarded sellers on how to manage and grow their business on Wiestell
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/bussnesmen.jpeg' className='object-cover w-full h-auto' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Software Solutions</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Discover software solutions to bring efficiency in your operations. 
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/shop.jpeg' className='object-cover w-full h-auto' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Sourcing</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Have a wide assortment of quality products to offer to the sellers? Connect with sellers across the country who need your services.
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white rounded shadow-md overflow-hidden'>
                        <Image src='/assets/images/texts.jpeg' className='object-cover w-full h-auto' width={500} height={500} />
                        <div className='p-3'>
                            <h2 className='text-[20px] text-gray-700 mb-2 font-bold md:text-[20px] '>Taxation</h2>
                            <p className='text-[13px] min-h-[60px] block mb-6 text-gray-500'>Connect with sellers across India and provide and lend them your assistance in filing taxes and handling money.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Services