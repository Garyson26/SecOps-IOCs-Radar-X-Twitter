import React from "react";
import TableDataFilter from "../TableDataFilter/TableDataFilter";
import { MdCloudUpload } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaLocationDot, FaNetworkWired } from "react-icons/fa6";
import { BiSolidFlagAlt } from "react-icons/bi";
import Image from "next/image";
const orderdetail = [
  {
    name: "2023-09-08",
    Visits: "1",
    Reg: "2",
    orders: "0",
    Bought: "0",
    Percentage: "200%",

    Percentageoforders: "0%",
    Revenue: "€0.00",
  },
];
const orderdetail2 = [
  {
    name: "Totle",
    Visits: "1",
    Reg: "2",
    orders: "0",
    Bought: "0",
    Percentage: "200%",

    Percentageoforders: "0%",
    Revenue: "€0.00",
  },
  {
    name: "Average",
    Visits: "1",
    Reg: "2",
    orders: "0",
    Bought: "0",
    Percentage: "200%",

    Percentageoforders: "0%",
    Revenue: "€0.00",
  },
  {
    name: "Forecast",
    Visits: "1",
    Reg: "2",
    orders: "0",
    Bought: "0",
    Percentage: "200%",

    Percentageoforders: "0%",
    Revenue: "€0.00",
  },
];
const StatsDashboard = () => {
  return (
    <div>
      <TableDataFilter />
      <div className="border-t mt-4 bg-white border  p-6 border-t-[#78c4d8]">
        <h3 className="text-[24px] leading-5 font-semibold text-ellipsis">
          Best categories
        </h3>
        <h3 className="text-[24px] leading-5 font-semibold text-ellipsis">
          Catalog statistics
        </h3>
        <div className="grid mb-3 mt-4 grid-cols-12 items-center gap-2 lg:gap-6">
          <label className="text-[14px] text-left font-medium lg:text-right col-span-12 lg:col-span-3 ">
            Time frame
          </label>

          <select className="pr-7 border-neutral-300 text-[12px] py-1 col-span-12 lg:col-span-4 bg-[right_0.2rem_center]">
            <option>All</option>
            <option>Home</option>
            <option>Clothes</option>
            <option>Men</option>
            <option>Women</option>
            <option>Accessories</option>
            <option>Stationery</option>
            <option>Home Accessories</option>
            <option>Art</option>
          </select>
        </div>
        <div className="overflow-auto mt-5 px-[4]">
          <table className="min-w-full  divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                ></th>
                <th
                  scope="col"
                  className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Visits
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Registrations
                </th>

                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-end  font-bold text-[#363a41]"
                >
                  Total Price
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Placed orders
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Bought items
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Percentage of registrations
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Percentage of orders
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orderdetail.map((item, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="text-[#363a41] text-left p-2 text-[12px] ">
                    {" "}
                    {item.name}
                  </td>

                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.Visits}
                  </td>

                  <td className="text-[#363a41] text-end p-2 text-[12px]">
                    {item.Reg}
                  </td>
                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.orders}
                  </td>
                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.Bought}
                  </td>
                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.Percentage}
                  </td>
                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.Percentageoforders}
                  </td>
                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.Revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-auto mt-5 px-[4]">
          <table className="min-w-full  divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                ></th>
                <th
                  scope="col"
                  className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Visits
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Registrations
                </th>

                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-end  font-bold text-[#363a41]"
                >
                  Total Price
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Placed orders
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Bought items
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Percentage of registrations
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Percentage of orders
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                >
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orderdetail2.map((item, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="text-[#363a41] text-left p-2 text-[12px] ">
                    {" "}
                    {item.name}
                  </td>

                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.Visits}
                  </td>

                  <td className="text-[#363a41] text-end p-2 text-[12px]">
                    {item.Reg}
                  </td>
                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.orders}
                  </td>
                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.Bought}
                  </td>
                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.Percentage}
                  </td>
                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.Percentageoforders}
                  </td>
                  <td className="text-[#363a41] text-center p-2 text-[12px]">
                    {item.Revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3">
          <h1 className="text-[14px] text-gray-800 flex items-center gap-1">
            <FaRegMoneyBillAlt />
            Payment distribution
          </h1>
          <div className="grid mb-3 mt-4 grid-cols-12 items-center gap-2 lg:gap-6">
            <label className="text-[14px] text-left font-medium lg:text-right col-span-12 lg:col-span-3 ">
              Zone
            </label>

            <select className="pr-7 border-neutral-300 text-[12px] py-1 col-span-12 lg:col-span-4 bg-[right_0.2rem_center]">
              <option>All</option>
              <option>Home</option>
              <option>Clothes</option>
              <option>Men</option>
              <option>Women</option>
              <option>Accessories</option>
              <option>Stationery</option>
              <option>Home Accessories</option>
              <option>Art</option>
            </select>
          </div>
          <div className="overflow-auto mt-5 px-[4]">
            <table className="min-w-full  divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Module
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Sales
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-end  font-bold text-[#363a41]"
                  >
                    Average cart value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderdetail2.map((item, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="text-[#363a41] text-left p-2 text-[12px] ">
                      {" "}
                      {item.name}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Visits}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Reg}
                    </td>
                    <td className="text-[#363a41] text-right p-2 text-[12px]">
                      {item.orders}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-[14px] text-gray-800 flex items-center gap-1">
            <FaNetworkWired />
            Category distribution
          </h1>
          <div className="grid mb-3 mt-4 grid-cols-12 items-center gap-2 lg:gap-6">
            <label className="text-[14px] text-left font-medium lg:text-right col-span-12 lg:col-span-3 ">
              Zone
            </label>

            <select className="pr-7 border-neutral-300 text-[12px] py-1 col-span-12 lg:col-span-4 bg-[right_0.2rem_center]">
              <option>All</option>
              <option>Home</option>
              <option>Clothes</option>
              <option>Men</option>
              <option>Women</option>
              <option>Accessories</option>
              <option>Stationery</option>
              <option>Home Accessories</option>
              <option>Art</option>
            </select>
          </div>
          <div className="overflow-auto mt-5 px-[4]">
            <table className="min-w-full  divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Products sold
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Sales
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-end  font-bold text-[#363a41]"
                  >
                    Percentage of products sold
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Percentage of sales
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Average price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderdetail2.map((item, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="text-[#363a41] text-left p-2 text-[12px] ">
                      {" "}
                      {item.name}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Visits}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Reg}
                    </td>
                    <td className="text-[#363a41] text-right p-2 text-[12px]">
                      {item.orders}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-[14px] text-gray-800 flex items-center gap-1">
            <BiSolidFlagAlt />
            Language distribution
          </h1>

          <div className="overflow-auto mt-5 px-[4]">
            <table className="min-w-full  divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Language
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Sales
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Percentage
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Growth
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderdetail2.map((item, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="text-[#363a41] text-left p-2 text-[12px] ">
                      {" "}
                      {item.name}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Visits}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Reg}
                    </td>
                    <td className="text-[#363a41] text-right p-2 text-[12px]">
                      <Image
                        src="/assets/arrow_up.png"
                        width={16}
                        height={16}
                      />
                    </td>
                    <td className="text-[#363a41] text-right p-2 text-[12px]">
                      {item.orders}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-[14px] text-gray-800 flex items-center gap-1">
            <FaLocationDot />
            Zone distribution
          </h1>

          <div className="overflow-auto mt-5 px-[4]">
            <table className="min-w-full  divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Zone
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Sales
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Percentage of orders
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Percentage of sales
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderdetail2.map((item, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="text-[#363a41] text-left p-2 text-[12px] ">
                      {" "}
                      {item.name}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Visits}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Reg}
                    </td>
                    <td className="text-[#363a41] text-right p-2 text-[12px]">
                      <Image
                        src="/assets/arrow_up.png"
                        width={16}
                        height={16}
                      />
                    </td>
                    <td className="text-[#363a41] text-right p-2 text-[12px]">
                      {item.orders}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-[14px] text-gray-800 flex items-center gap-1">
            <FaRegMoneyBillAlt />
            Payment distribution
          </h1>
          <div className="grid mb-3 mt-4 grid-cols-12 items-center gap-2 lg:gap-6">
            <label className="text-[14px] text-left font-medium lg:text-right col-span-12 lg:col-span-3 ">
              Zone
            </label>

            <select className="pr-7 border-neutral-300 text-[12px] py-1 col-span-12 lg:col-span-4 bg-[right_0.2rem_center]">
              <option>All</option>
              <option>Home</option>
              <option>Clothes</option>
              <option>Men</option>
              <option>Women</option>
              <option>Accessories</option>
              <option>Stationery</option>
              <option>Home Accessories</option>
              <option>Art</option>
            </select>
          </div>
          <div className="overflow-auto mt-5 px-[4]">
            <table className="min-w-full  divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Currency
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Sales (converted)
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-end  font-bold text-[#363a41]"
                  >
                    Percentage of orders
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-end  font-bold text-[#363a41]"
                  >
                    Percentage of sales
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderdetail2.map((item, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="text-[#363a41] text-left p-2 text-[12px] ">
                      {" "}
                      {item.name}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Visits}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Reg}
                    </td>
                    <td className="text-[#363a41] text-right p-2 text-[12px]">
                      {item.orders}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-[14px] text-gray-800 flex items-center gap-1">
            <FaLocationDot />
            Zone distribution
          </h1>

          <div className="overflow-auto mt-5 px-[4]">
            <table className="min-w-full  divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Group
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Attribute
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-2 text-[12px] text-center  font-bold text-[#363a41]"
                  >
                    Quantity of products sold
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderdetail2.map((item, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="text-[#363a41] text-left p-2 text-[12px] ">
                      {" "}
                      {item.name}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Visits}
                    </td>

                    <td className="text-[#363a41] text-center p-2 text-[12px]">
                      {item.Reg}
                    </td>
                    <td className="text-[#363a41] text-right p-2 text-[12px]">
                      <Image
                        src="/assets/arrow_up.png"
                        width={16}
                        height={16}
                      />
                    </td>
                    <td className="text-[#363a41] text-right p-2 text-[12px]">
                      {item.orders}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <button className="border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]">
            <MdCloudUpload className="text-[16px]" /> CSV Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
