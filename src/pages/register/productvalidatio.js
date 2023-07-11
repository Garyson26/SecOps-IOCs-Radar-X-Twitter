import React from 'react'

const ProductValidatio = ({setStep}) => {
  return (
    <div className=" px-3 pt-6">
    <form className="space-y-6" action="#" method="POST">
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="firstname"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Select Category


        </label>
        <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 h-[36px] pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Canada"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
      
      </div>
      <div>
        <label
          htmlFor="firstname"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Select Brand


        </label>
        <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 h-[36px] pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Canada"
      >
        <option>Media</option>
        <option>Furniture and Decor</option>
        <option>Pet care</option>
      </select>
      
      </div>
   
    </div>
      <div className='flex items-center justify-end'>
      <button
      onClick={() => setStep(2)}
          type="button"
          className="flex  justify-center rounded-md bg-white px-3 text-gray-700 py-1.5 text-sm font-semibold leading-6  shadow-md mr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
         Back
        </button>
        <button
        
          type="submit"
          className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Finish
        </button>
      </div>
    </form>
  </div>
  )
}

export default ProductValidatio