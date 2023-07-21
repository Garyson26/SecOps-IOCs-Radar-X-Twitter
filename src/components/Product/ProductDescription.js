import React from 'react'

const ProductDescription = () => {
  return (
    <div className="grid grid-cols-12 px-5">
      <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
      Description
      </label>
      <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
        <input
          class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          id="formFileLg"
          type="file"
        />
      </div>
    </div>
  )
}

export default ProductDescription