import React, { useState, KeyboardEventHandler } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { Switch } from "@headlessui/react";
import ProductImages from "@/components/Product/ProductImages";
import ProductDescription from "@/components/Product/ProductDescription";
import ProductPriceAndStock from "@/components/Product/ProductPriceAndStock";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const animatedComponents = makeAnimated();
const components = {
  DropdownIndicator: null,
  animatedComponents,
};
const Create = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState([]);
  const createOption = (inputValue) => ({
    value: inputValue,
    label: inputValue,
  });
  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
    }
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="py-8 font-poppins">
      <div className="px-4 sm:px-6 mb-8 lg:px-8">
        <h2 className="text-gray-800 font-medium text-[20px]">
          Add New product
        </h2>
        <div className="grid grid-cols-12 mt-6 gap-5">
          <div className="col-span-12 lg:col-span-8 gap-5 flex flex-col">
            <div className=" bg-white rounded">
              <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
                Product Information
              </h2>
              <div className="py-[28px] flex flex-col gap-5">
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                    <input
                      type="text"
                      placeholder=" Product Name"
                      className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
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
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
                    Brand
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
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
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
                    Unit
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                    <input
                      type="text"
                      placeholder=" Product Name"
                      className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
                    Weight <small className="text-[8px]">(In Kg)</small>
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                    <input
                      type="text"
                      placeholder=" Product Name"
                      className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
                    Minimum Purchase Qty <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                    <input
                      type="text"
                      placeholder=" Product Name"
                      className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
                    Tags <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                    <CreatableSelect
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
                      components={{
                        animatedComponents,
                        DropdownIndicator: null,
                      }}
                      inputValue={inputValue}
                      isClearable
                      isMulti
                      menuIsOpen={false}
                      onChange={(newValue) => setValue(newValue)}
                      onInputChange={(newValue) => setInputValue(newValue)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type something and press enter..."
                      value={value}
                    />
                    <span className="text-[10px] font-medium text-gray-500">
                      This is used for search. Input those words by which
                      cutomer can find this product.
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
                    Barcode
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                    <input
                      type="text"
                      placeholder=" Product Name"
                      className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[14px] px-4 font-poppins">
                    Refundable
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-8 px-4">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={classNames(
                        enabled ? "bg-green-600" : "bg-gray-200",
                        "relative inline-flex bg-gray-200 h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-0"
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          enabled ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white rounded">
              <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
                Product Information
              </h2>
              <div className="py-[28px] flex flex-col gap-5">
                <ProductImages />
              </div>
            </div>
            <div className=" bg-white rounded">
              <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
                Product price + stock
              </h2>
              <div className="py-[28px] flex flex-col gap-5">
                <ProductPriceAndStock />
              </div>
            </div>
            <div className=" bg-white rounded">
              <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
                Product Description
              </h2>
              <div className="py-[28px] flex flex-col gap-5">
                <ProductDescription />
              </div>
            </div>
          </div>
          <div className="col-span-12 gap-5 flex flex-col lg:col-span-4">
            <div className=" bg-white rounded">
              <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
                Cash On Delivery
              </h2>
              <div className="py-[28px] flex flex-col gap-5">
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-6 md:col-span-6 text-[14px] px-4 font-poppins">
                    Status
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-6 px-4">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={classNames(
                        enabled ? "bg-green-600" : "bg-gray-200",
                        "relative inline-flex bg-gray-200 h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-0"
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          enabled ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white rounded">
              <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
                Low Stock Quantity Warning
              </h2>
              <div className="py-[28px] flex flex-col gap-5">
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 text-[14px] px-4 font-poppins">
                    Quantity
                  </label>
                  <div className="mt-1  px-4 col-span-12 ">
                    <input
                      defaultValue={1}
                      type="number"
                      placeholder=" Product Name"
                      className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white rounded">
              <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
                Stock Visibility State
              </h2>
              <div className="py-[28px] flex flex-col gap-5">
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-6 md:col-span-6 text-[14px] px-4 font-poppins">
                    Show Stock Quantity
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-6 px-4">
                    <input
                      id="sms"
                      name="notification-method"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 px-5">
                  <label className="col-span-12 sm:col-span-6 md:col-span-6 text-[14px] px-4 font-poppins">
                    Hide Stock
                  </label>
                  <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-6 px-4">
                    <input
                      id="push"
                      name="notification-method"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
