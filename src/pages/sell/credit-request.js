import Image from "next/image";
import React from "react";
import { BiDotsVerticalRounded, BiSolidPencil, BiZoomIn } from "react-icons/bi";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const orderdetail = [
    {
        id: "1",
        OrderCode: "20231011-18154653",
        NumofProducts: "1",
        Customer: "Paul K. Jensen",
        Amount: "$999.000",
        DeliveryStatus: "Pending",
        Paymentmethod: "Wallet",
        PaymentStatus: "Paid",
        Refund: "No Refund",
    },
    {
        id: "1",
        OrderCode: "20231011-18154653",
        NumofProducts: "1",
        Customer: "Paul K. Jensen",
        Amount: "$999.000",
        DeliveryStatus: "Pending",
        Paymentmethod: "Wallet",
        PaymentStatus: "Paid",
        Refund: "No Refund",
    },
    {
        id: "1",
        OrderCode: "20231011-18154653",
        NumofProducts: "1",
        Customer: "Paul K. Jensen",
        Amount: "$999.000",
        DeliveryStatus: "Pending",
        Paymentmethod: "Wallet",
        PaymentStatus: "Paid",
        Refund: "No Refund",
    },
    {
        id: "1",
        OrderCode: "20231011-18154653",
        NumofProducts: "1",
        Customer: "Paul K. Jensen",
        Amount: "$999.000",
        DeliveryStatus: "Pending",
        Paymentmethod: "Wallet",
        PaymentStatus: "Paid",
        Refund: "No Refund",
    },
    {
        id: "1",
        OrderCode: "20231011-18154653",
        NumofProducts: "1",
        Customer: "Paul K. Jensen",
        Amount: "$999.000",
        DeliveryStatus: "Pending",
        Paymentmethod: "Wallet",
        PaymentStatus: "Paid",
        Refund: "No Refund",
    },
];
const CreditRequest = () => {
  return (
    <div>
    <div className="bg-white flex items-center justify-between px-4 py-5 sm:px-6  lg:px-8 border-b ">
        <h1 className="text-[24px] font-semibold ">Credit Request</h1>

    </div>
    <div className="px-4 py-8 sm:px-6  lg:px-8">
        <div className="border-t  bg-white border p-6 border-t-[#78c4d8]">
            <h2 className="text-[20px] text-[#363a41] font-semibold">
            Credit Request 
            </h2>
            <div className="mt-5 px-[4]">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#363a41] sm:pl-0"
                            ></th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                            >
                                ID
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                            >
                                Order Code:
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                            >
                                Num. of Products
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                            >
                                Customer
                            </th>

                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                            >
                                Amount
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                            >
                                Delivery Status
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                            >
                                Payment method
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                            >
                                Payment Status
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                            >
                                Refund
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-center text-sm font-semibold text-[#363a41]"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orderdetail.map((item, index) => (
                            <tr key={index}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    <input
                                        type="checkbox"
                                        className="text-black ring-0 focus:ring-0 "
                                    />
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px] ">
                                    {item.id}
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    {item.OrderCode}
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    {item.NumofProducts}
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    {item.Customer}
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    {item.Amount}
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    {item.DeliveryStatus}
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    {item.Paymentmethod}
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    {item.PaymentStatus}
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    {item.Refund}
                                </td>

                                <td className="text-gray-500  px-3 py-4 ml-auto text-right">
                                    <div className="flex items-center">

                                    <button className='bg-black text-[12px]  rounded text-white px-4 py-1' >Submit Request</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default CreditRequest