import { RiCloseLine, RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import ShippingLocation from "@/components/Shipping/ShippingLocation";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const tabs = [
  {
    name: "General settings",
    id: 1,
  },
  {
    name: "Shipping locations and costs",
    id: 2,
  },
  {
    name: "Size, weight, and group access",
    id: 3,
  },
  {
    name: "Summary",
    id: 4,
  },
];
const AddCarriers = () => {
  const [enabled, setEnabled] = useState(false);
  const [selectdTab, setSelecteTab] = useState(1);
  return (
    <div>
      <div className="bg-white">
        <div className=" flex items-center justify-between px-4 py-5 sm:px-6  lg:px-[15px] border-b ">
          <h1 className="text-[24px] font-semibold ">View</h1>
          <div className="flex items-center gap-2">
            <Link
              href="/shipping/carriers"
              className=" flex items-center border text-[14px] font-medium border-black text-black bg-white gap-1.5 px-3 py-1.5"
            >
              <RiCloseLine className="text-[18px]" /> Cancel
            </Link>

            <button className=" flex items-center border text-[14px] font-medium  text-black bg-white gap-1.5 px-3 py-1.5">
              Help
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-8 sm:px-6  lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2 ">
            <div className="border-t  bg-white border p-6 border-t-[#78c4d8]">
              <div className="flex items-center justify-between">
                <h2 className="text-[24px] text-[#363a41] font-semibold">
                  Logo
                </h2>
                <button className="border border-gray-300 p-2 ">
                  <RiDeleteBin5Line className="text-gray-400" />
                </button>
              </div>
              <div className="block mt-4 rounded border border-[#ccc] bg-white p-[4px]">
                <Image
                  src="/assets/carrier-default.jpg"
                  width={134}
                  height={134}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 bootstrap border">
            <div
              className="panel swMain p-6 pb-0 bg-white min-h-[56px]"
              id="carrier_wizard"
            >
              <ul className="steps nbr_steps_4 anchor">
                {tabs.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`${
                        selectdTab === item.id ? "selected" : "disabled"
                      } `}
                    >
                      <a
                        onClick={() => setSelecteTab(item.id)}
                        className={`${
                          selectdTab === item.id ? "selected" : "disabled"
                        }`}
                        isdone="1"
                        rel="1"
                      >
                        <span className="stepNumber">{item.id}</span>
                        <span className="stepDesc">
                          {item.name}
                          <br />
                        </span>
                        <span className="chevron"></span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className=" bg-white p-6 ">
              <div className="border">
                {selectdTab === 1 ? (
                  <div className="my-5 grid gap-8 max-w-[83%] mx-auto">
                    <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                      <label className="before:content-['*'] text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12 before:ml-0.5 before:text-red-500">
                        Carrier name
                      </label>
                      <input
                        className="lg:col-span-9 col-span-12 border-gray-300"
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                      <label className="before:content-['*'] text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12 before:ml-0.5 before:text-red-500">
                        Transit time
                      </label>
                      <input
                        className="col-span-7 border-gray-300"
                        type="text"
                      />
                      <select className="pr-7  col-span-2 border-gray-300 bg-[right_0.2rem_center]">
                        <option>en</option>
                        <option>eng</option>
                        <option>eng</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                      <label className=" text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12  ">
                        Speed grade
                      </label>
                      <input
                        className="lg:col-span-9 col-span-12 border-gray-300"
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                      <label className=" text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12  ">
                        Logo
                      </label>
                      <input
                        className="lg:col-span-9 col-span-12  border-gray-300"
                        type="file"
                      />
                    </div>
                    <div>
                      <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                        <label className=" text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12">
                          Tracking URL
                        </label>
                        <input
                          className="lg:col-span-9 col-span-12 border-gray-300"
                          type="text"
                        />
                      </div>
                      <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                        <label className="lg:col-span-3 col-span-12"></label>
                        <div className="lg:col-span-9 col-span-12">
                          <p className="italic text-gray-600 text-[12px]">
                            For example: 'http://example.com/track.php?num=@'
                            with '@' where the tracking number should appear.
                          </p>
                        </div>
                        <div className="col-span-2"></div>
                      </div>
                    </div>
                  </div>
                ) : selectdTab === 2 ? (
                  <>
                  <ShippingLocation /></>
                ) : selectdTab === 3 ? (
                  <div className="my-5 grid gap-8 max-w-[83%] mx-auto">
                    <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                      <label className="text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12 ">
                        Maximum package width (cm)
                      </label>
                      <input
                        className="lg:col-span-9 col-span-12 border-gray-300"
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                      <label className="text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12 ">
                        Maximum package height (cm)
                      </label>
                      <input
                        className="lg:col-span-9 col-span-12 border-gray-300"
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                      <label className="text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12 ">
                        Maximum package depth (cm)
                      </label>
                      <input
                        className="lg:col-span-9 col-span-12 border-gray-300"
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                      <label className="text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12 ">
                        Maximum package weight (kg)
                      </label>
                      <input
                        className="lg:col-span-9 col-span-12 border-gray-300"
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                      <label className="text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12 ">
                        Group access
                      </label>
                      <div className="lg:col-span-9 col-span-12">
                        <table className="border">
                          <thead className="border-b border-[#78c4d8]">
                            <tr>
                              <td className="px-2 py-1 text-[12px]">
                                <input type="checkbox" />
                              </td>
                              <td className="px-2 py-1 text-[12px]">ID</td>
                              <td className="px-2 py-1 text-[12px]">
                                Group name
                              </td>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="px-2 py-1 text-[12px]">
                                <input type="checkbox" />
                              </td>
                              <td className="px-2 py-1 text-[12px]">1</td>
                              <td className="px-2 py-1 text-[12px] font-semibold">
                                Visitor
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-1 text-[12px]">
                                <input type="checkbox" />
                              </td>
                              <td className="px-2 py-1 text-[12px]">1</td>
                              <td className="px-2 py-1 text-[12px] font-semibold">
                                Visitor
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-1 text-[12px]">
                                <input type="checkbox" />
                              </td>
                              <td className="px-2 py-1 text-[12px]">1</td>
                              <td className="px-2 py-1 text-[12px] font-semibold">
                                Visitor
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="my-5 grid gap-8 max-w-[83%] mx-auto">
                    <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
                      <label className="text-right text-[14px] font-semibold col-span-3">
                        Enabled
                      </label>
                      <div className="col-span-7 flex items-center  gap-3">
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={classNames(
                            enabled ? "bg-green-700" : "bg-gray-200",
                            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-0"
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
                        <span className="text-[14px] text-gray-500 font-semibold">
                          {enabled ? "Yes" : "No"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white gap-2 p-8 flex items-center justify-end">
              <Link
                href="/attributes"
                className="border hover:border-black hover:bg-neutral-100 font-semibold text-[14px] px-4 py-2"
              >
                Previous
              </Link>
              <button className="border hover:border-black hover:bg-neutral-100 font-semibold text-[14px] px-4 py-2">
                Next
              </button>
              <button className="border border-[#21834d] hover:border-[#2b734b] bg-[#21834d] hover:bg-[#2b734b] text-white font-semibold text-[14px] px-4 py-2">
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCarriers;
