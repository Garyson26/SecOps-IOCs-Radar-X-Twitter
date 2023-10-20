import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const orderdetail = [
  {
    id: "1",
    name: "Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked",
    customer: "Paul K. Jensen (customer@example.com)",
    rating: "5",
    comment:
      "Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.",
  },
  {
    id: "1",
    name: "Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked",
    customer: "Paul K. Jensen (customer@example.com)",
    rating: "5",
    comment:
      "Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.",
  },
  {
    id: "1",
    name: "Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked",
    customer: "Paul K. Jensen (customer@example.com)",
    rating: "5",
    comment:
      "Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.",
  },
  {
    id: "1",
    name: "Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked",
    customer: "Paul K. Jensen (customer@example.com)",
    rating: "5",
    comment:
      "Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.",
  },
  {
    id: "1",
    name: "Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked",
    customer: "Paul K. Jensen (customer@example.com)",
    rating: "5",
    comment:
      "Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.",
  },
  {
    id: "1",
    name: "Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked",
    customer: "Paul K. Jensen (customer@example.com)",
    rating: "5",
    comment:
      "Excellent Apple product; Amazon did an excellent job with the delivery. The phone arrived in excellent condition; I highly recommend buying the warranty plan.",
  },
  
];
const ProductReviews = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="px-4 py-8 sm:px-6  lg:px-8">
      <div className="border-t  bg-white border p-6 border-t-[#78c4d8]">
        <div className="flex items-center justify-between">
          <h2 className="text-[24px]  text-[#363a41] font-semibold">
            Product Reviews
          </h2>
          <select className="pr-7 md:min-w-[400px] bg-[right_0.2rem_center]">
            <option>Filter by Rating</option>
            <option>{"Rating (High > Low)"}</option>
            <option>{"Rating (Low > High)"}</option>
          </select>
        </div>
        <div className="mt-5 px-[4]">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
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
                  Product
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
                  Rating
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                >
                  Comment
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                >
                  Published
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
                    {item.customer}
                  </td>
                  <td className="text-[#363a41] px-3 py-4 text-[13px]">
                    {item.rating}
                  </td>

                  <td className="text-[#363a41] px-3 py-4 text-[13px]">
                    {item.comment}
                  </td>

                  <td className="text-gray-500  px-3 py-4 ml-auto text-right">
                    <div className="flex items-center">
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={classNames(
                          enabled ? "bg-indigo-600" : "bg-gray-200",
                          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
