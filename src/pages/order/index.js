import Image from "next/image";
import React, { useState } from "react";
const tabs = [
  { id: 1, name: "On Hold", count: "0" },
  { id: 2, name: "Pending", count: "0" },
  { id: 3, name: "Ready to Ship", count: "0" },
  { id: 4, name: "Shipped", count: "0" },
  { id: 5, name: "Cancelled", count: "0" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Order = () => {
  const [selectedTab, setSelectedTab] = useState(2);
  return (
    <div className="py-8 font-poppins">
      <div className="px-4 sm:px-6 mb-8 lg:px-8">
        <h2 className="text-gray-800 font-medium text-[20px]">
          All Orders
        </h2>
        <div className=" bg-white mb-3 rounded">
          <div className="border-b px-4 border-gray-200">
            <nav className="-mb-px flex space-x-5" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={classNames(
                    selectedTab === tab.id
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                    "flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                  )}
                >
                  {tab.name}
                  {tab.count ? (
                    <span
                      className={classNames(
                        selectedTab === tab.id
                          ? "bg-gray-200 text-black"
                          : "bg-gray-100 text-gray-900",
                        "ml-1.5 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
                      )}
                    >
                      {tab.count}
                    </span>
                  ) : null}
                </button>
              ))}
            </nav>
          </div>
        </div>
        <div className="bg-white p-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Order No. 14133432423</h2>
            <span className="font-medium">03 Aug, 01:22 PM</span>
          </div>
          <div className="border flex p-5 bg-white">
            <Image src="/assets/images/blueshots.png" alt="Loading..." width="100" height="100" />
            <div className="flex px-5  flex-1 flex-col">
                <h2 className="font-medium ">
                Adidas Women's Parma 16 Shorts
                </h2>
                <span>
                Sub Order Num: 14133432423_1
                </span>
                <span>Size:36</span>
                <span>Product SKU: Women's Parma 16 Shorts</span>
                <span>Wiestell Product Id: 7B1G0E4E1</span>
            </div>
            <div className="flex flex-col justify-between items-end">
                
                <button className="bg-black text-white px-3 py-1">
                Accept
                </button>
                <h2 className="text-red-600 font-semibold text-[20px]">
                    Qty: 1
                </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;