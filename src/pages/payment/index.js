import React from "react";
import { RiFileExcel2Line } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import { HiMiniHandThumbUp } from "react-icons/hi2";
import PaymentChart from "@/components/PaymentChart/PaymentChart";
import Link from "next/link";
const Payment = () => {
  return (
    <div className="py-8 font-poppins px-4  sm:px-6 lg:px-8">
      <div className="flex items-center justify-between  mb-8">
        <h2 className="text-gray-800 font-medium text-[20px]">Payments</h2>
        <button className="bg-sky-500 flex items-center  px-7 py-2.5 gap-2 rounded-full text-white">
          <RiFileExcel2Line /> Download
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white shadow-md rounded">
          <div className="flex items-start px-4 py-6">
            <div className="flex-1">
              <span>Payment to Date</span>
              <h2 className="font-semibold text-[24px]">₹53,778</h2>
            </div>
            <button className="border px-3 py-1.5 rounded border-gray-900 text-gray-900">
              View Details
            </button>
          </div>
          <div className="border-t flex px-4 py-6 items-center">
            <span className="text-[14px] ">Last Payment:</span>
            <span className="font-black text-[16px] mx-1 font-medium">₹0</span>
            <span className="flex items-center px-3 mx-3 text-green-600 bg-green-100 rounded-full">
              <HiMiniHandThumbUp /> Paid on 23 Dec
            </span>
          </div>
        </div>
        <div className="bg-white shadow-md rounded">
          <div className="flex items-start px-4 py-6">
            <div className="flex-1">
              <span>Totle Outstanding Payment</span>
              <h2 className="font-semibold text-[24px]">-₹20,778</h2>
            </div>
            <Link href="/payment/payment-history" className="border px-3 py-1.5 rounded border-gray-900 text-gray-900">
              View Details
            </Link>
          </div>
          <div className="border-t flex px-4 py-6 items-center">
            <span className="text-[14px] ">Next Payment:</span>
            <span className="font-black text-[16px] mx-1 font-medium">
              -₹3203
            </span>
            <span className="flex items-center px-3 mx-3 text-gray-700 bg-gray-100 rounded-full">
              <HiMiniHandThumbUp /> Dur on 23 Jul
            </span>
          </div>
        </div>
      </div>
      <div className="  w-full mt-6  md:col-span-2 bg-white rounded-lg shadow-md grid px-4 ">
        <div className=" border-b py-4 px-4 ">
          <h2 className="text-gray-800 font-semibold text-[17px] font-montserrat">
            Category wise product stock
          </h2>
        </div>
        <div className="max-h-[400px]">
          <PaymentChart />
        </div>
      </div>
    </div>
  );
};

export default Payment;
