import React from 'react'

const AddNewTeammates = () => {
    return (
        <div className='py-10'>

            <div className=" bg-white max-w-2xl  mx-auto rounded">
                <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
                    Product Information
                </h2>
                <div className="py-[28px] flex flex-col gap-5">
                    <div className="grid grid-cols-12 px-5">
                        <label className="col-span-12 sm:col-span-4 md:col-span-4 text-[14px] px-4 font-poppins">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 px-5">
                        <label className="col-span-12 sm:col-span-4 md:col-span-4 text-[14px] px-4 font-poppins">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                            <input
                                type="text"
                                placeholder="Email"
                                className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 px-5">
                        <label className="col-span-12 sm:col-span-4 md:col-span-4 text-[14px] px-4 font-poppins">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                            <input
                                type="text"
                                placeholder="Phone"
                                className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 px-5">
                        <label className="col-span-12 sm:col-span-4 md:col-span-4 text-[14px] px-4 font-poppins">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                            <input
                                type="text"
                                placeholder="Password"
                                className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 px-5">
                        <label className="col-span-12 sm:col-span-4 md:col-span-4 text-[14px] px-4 font-poppins">
                            Role <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                            <input
                                type="text"
                                placeholder="Role"
                                className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </div>
                    </div>
                    <div className=" flex items-center justify-end  text-end px-9">
                        <button className='  bg-black text-white gap-1.5 px-5 py-1.5'>
                            Save
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddNewTeammates