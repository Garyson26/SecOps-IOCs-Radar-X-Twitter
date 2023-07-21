import React from "react";

const ProductPriceAndStock = () => {
  return (
    <>
      <div className="grid grid-cols-12 px-5">
        <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
          Unit price
        </label>
        <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
          <input
            type="number"
            placeholder=" Unit price"
            className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 px-5">
        <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
        Discount
        </label>
        <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
          <input
            type="number"
            placeholder=" Unit price"
            className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
      </div>
    </>
  );
};

export default ProductPriceAndStock;
