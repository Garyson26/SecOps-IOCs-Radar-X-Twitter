import React, { useState } from "react";
import Select from "react-select";

const CreateCoupon = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const options = [
    { value: "selectone", label: "Select One" },
    { value: "fortotalorder", label: "For Total Order" },
  ];
  const discount = [
    { value: "amount", label: "Amount" },
    { value: "percent", label: "Percent" },
  ];
  return (
    <div className="py-8 font-poppins px-4 sm:px-6 lg:px-8">
      <div className=" bg-white max-w-4xl mx-auto rounded">
        <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
          Coupon Information Adding
        </h2>
        <div className=" py-6">
          <div className="grid grid-cols-12 mb-4 px-5">
            <label className="col-span-12 sm:col-span-3 text-[14px] px-4 font-poppins">
              Coupon Type
            </label>
            <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-9 pl-4">
              <Select
                className="custom-select "
                classNamePrefix="custom-select"
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 4,
                  colors: {
                    ...theme.colors,

                    primary: "black",
                  },
                })}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          <h2 className="text-gray-800 mb-6 px-[25px] py-3 border-b font-medium text-[20px]">
            Add Your Cart Base Coupon
          </h2>
          <div className="grid grid-cols-12 mb-6 px-5">
            <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
              Coupon code
            </label>
            <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-9 pl-4">
              <input
                type="text"
                placeholder=" Coupon code"
                className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 mb-6 px-5">
            <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
              Minimum Shopping
            </label>
            <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-9 pl-4">
              <input
                type="text"
                placeholder=" Minimum Shopping"
                className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 mb-6 px-5">
            <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
              Discount
            </label>
            <div className="mt-1 sm:mt-0 col-span-12 pr-3 sm:col-span-7 pl-4">
              <input
                type="text"
                placeholder="Discount"
                className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="col-span-2 pl-2">
              <Select
                className="custom-select "
                classNamePrefix="custom-select"
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 4,
                  colors: {
                    ...theme.colors,

                    primary: "black",
                  },
                })}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={discount}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 mb-6 px-5">
            <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
              Maximum Discount Amount
            </label>
            <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-9 pl-4">
              <input
                type="text"
                placeholder="Maximum Discount Amount"
                className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div className="px-5 text-end">
            <button className="text-white bg-black rounded px-5 py-2.5">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCoupon;
