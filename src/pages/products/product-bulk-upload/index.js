import Link from 'next/link'
import React from 'react'

const ProductBulkUpload = () => {
    return (
        <div> <div className='bg-white flex items-center justify-between px-4 py-5 sm:px-6  lg:px-8 border-b '>
            <h1 className='text-[24px] font-semibold '>
                Product Bulk Upload
            </h1>
            {/* <div>
      <Link href="/products/product-bulk-upload" className=' flex items-center bg-black text-white gap-1.5 px-3 py-1.5'>

        <FiPlusCircle />  Bulk Import
      </Link>
    </div> */}
        </div>
            <div className='font-poppins px-4 py-8 sm:px-6  lg:px-8'>
                <div className="bg-[#cce5ff] border border-[#b8daff] rounded text-[12px] px-3 py-2 text-[#004085]">
                    <strong>Step 1:</strong>
                    <p className='mb-1'>1. Download the skeleton file and fill it with proper data.</p>
                    <p className='mb-1'>2. You can download the example file to understand how the data must be filled.</p>
                    <p className='mb-1'>3. Once you have downloaded and filled the skeleton file, upload it in the form below and submit.</p>
                    <p>4. After uploading products you need to edit them and set product's images and choices.</p>
                </div>

                <div className='bg-white mt-6 rounded'>
                    <div className='p-4 '>
                        <h2 className='text-[18px] mb-4'>Upload Product File</h2>
                        <div className="mt-5 sm:mt-5 col-span-12 sm:col-span-8 ">
                            <input
                                className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                id="formFileLg"
                                type="file"
                            />
                        </div>
                        <button className='border-[#25bcf1] mt-4 text-white px-5 py-2 rounded bg-[#25bcf1]'>
                            Upload CSV
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductBulkUpload