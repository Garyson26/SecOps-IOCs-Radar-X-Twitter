import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
const WithdrawRequest = ({ setOpen, open }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                <form className="">
                  <div className=" text-center sm:mt-0 sm:text-left">
                    <div className="flex items-center px-6 py-4 border-b ">
                      <Dialog.Title
                        as="h3"
                        className="text-gray-800 flex-1 font-medium text-[18px]"
                      >
                        Send A Withdraw Request
                      </Dialog.Title>
                      <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0"
                        onClick={() => setOpen(false)}
                      >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-2 px-6 py-4">
                      <div className="grid grid-cols-12 ">
                        <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[12px]  font-poppins">
                          Amount <span className="text-red-500 ">*</span>
                        </label>
                        <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-9 pl-4">
                          <input
                            required
                            type="text"
                            placeholder="Amount"
                            className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </div>
                      </div>
                      <div className="grid mt-5 grid-cols-12 ">
                        <label className="col-span-12 sm:col-span-4 md:col-span-3 text-[12px]  font-poppins">
                          Message
                        </label>
                        <div className="mt-1 sm:mt-0 col-span-12 sm:col-span-9 pl-4">
                          <textarea
                            type="text"
                            className="border border-gray-300 placeholder:text-gray-400 px-4 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:border-black outline-none focus:ring-0 w-full ease-linear transition-all duration-150 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" sm:flex  px-6 py-4 sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded bg-[#2E294E] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#2E294E] sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default WithdrawRequest;
