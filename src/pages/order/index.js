import OnHoldOrders from "@/components/Orders/OnHoldOrders";
import PendingOrders from "@/components/Orders/PendingOrders";
import ShippedOrders from "@/components/Orders/ShippedOrders";
import Image from "next/image";
import React, { useState } from "react";
const tabs = [
  { id: 1, name: "On Hold", count: "2" },
  { id: 2, name: "Pending", count: "1" },
  { id: 3, name: "Ready to Ship", count: "0" },
  { id: 4, name: "Shipped", count: "3" },
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
          <h2 className="text-gray-800 font-medium text-[20px]">All Orders</h2>
        {/* <div className=" bg-white mb-3 rounded">
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
        </div> */}
        <div className="bg-white mb-3 rounded">
          <div className="border-b px-4 border-gray-200">
            <nav
              className="-mb-px flex flex-wrap md:flex-nowrap md:space-x-5"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={classNames(
                    selectedTab === tab.id
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                    "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium md:flex-1"
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
        {selectedTab === 1 ? (
          <OnHoldOrders />
        ) : selectedTab === 2 ? (
          <PendingOrders />
        ) : selectedTab === 4 ? (
          <ShippedOrders />
        ) : (
          <div>
            <h1 className="text-center mt-40">No Product Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
