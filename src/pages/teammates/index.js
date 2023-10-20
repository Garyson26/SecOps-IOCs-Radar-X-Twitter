import Image from "next/image";
import React from "react";
import { BiDotsVerticalRounded, BiSolidPencil, BiZoomIn } from "react-icons/bi";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";
import { MdDeleteForever } from "react-icons/md";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const orderdetail = [
  {
    id: "1",
    name: "George M. Winters",
    email: "staff@example.com",
    phone: "662-817-4374",
    role: "Product manager",
  
  },
 
];
const Teammates = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <div className="bg-white flex items-center justify-between px-4 py-5 sm:px-6  lg:px-8 border-b ">
        <h1 className="text-[24px] font-semibold ">All Teammates</h1>
        <div>
          <Link
            href="/teammates/add-new-teammates"
            className=" flex items-center bg-black text-white gap-1.5 px-3 py-1.5"
          >
            <FiPlusCircle /> Add New
          </Link>
        </div>
      </div>
      <div className="px-4 py-8 sm:px-6  lg:px-8">
        <div className="border-t  bg-white border p-6 border-t-[#78c4d8]">
          <h2 className="text-[24px] text-[#363a41] font-semibold">
          Teammates
          </h2>
          <div className="mt-5 px-[4]">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                 
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                  Email
                  </th>
                 
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                   Role
                  </th>
                 
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-right text-sm font-semibold text-[#363a41]"
                  >
                   Options
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderdetail.map((item, index) => (
                  <tr key={index}>
                    <td className="text-[#363a41] px-3 py-4 text-[13px] ">
                      {item.id}
                    </td>
                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                      {item.name}
                    </td>
                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                      {item.email}
                    </td>
                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                      {item.phone}
                    </td>
                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                      {item.role}
                    </td>
                    <td className="text-gray-500  px-3 py-4 ml-auto text-right">
                      <button className="px-1">
                        <BiSolidPencil />
                      </button>
                      <button className="px-1">
                        <MdDeleteForever />
                      </button>
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

export default Teammates