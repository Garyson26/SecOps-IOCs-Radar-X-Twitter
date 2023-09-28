import Link from "next/link";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
const people = [
  {
    id: 1,
    coupon: "TOTAL500",
    type: "	Cart Base",
    startdate: "04-10-2024",
    enddate: "	30-11-2024",
  },
  // More people...
];
const Coupon = () => {
  return (
    <div className="py-8 font-poppins px-4 sm:px-6 lg:px-8">
      <div className=" flex items-center justify-between  mb-8">
        <h2 className="text-gray-800 font-medium text-[20px]">Coupon</h2>
        <Link href="/coupon/create_coupon" className="rounded-full bg-sky-500 text-white px-6 py-3">
          Add New Coupon
        </Link>
      </div>
      <div className=" bg-white rounded">
        <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
          Coupon Information
        </h2>
        <div className="mt-8 flow-root">
          <div className=" overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Start Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      End Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-end text-sm font-semibold text-gray-900"
                    >
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-700 ">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.coupon}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.type}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.startdate}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.enddate}
                      </td>

                      <td className="relative whitespace-nowrap  py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <div className="flex justify-end gap-2">
                          <button className="bg-orange-100 hover:bg-orange-500 hover:text-white transition duration-300 items-center rounded-full flex justify-center w-8 h-8 text-orange-500">
                            <FaRegEdit />
                          </button>
                          <button className="bg-red-100 hover:bg-red-500 hover:text-white transition duration-300 items-center rounded-full flex justify-center rounded-full w-8 h-8 text-red-500">
                            <BiTrash />
                          </button>
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
    </div>
  );
};

export default Coupon;
