import React, { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArrowDownIcon,
  Cog6ToothIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { RiCoupon3Line, RiSettings4Line, RiHistoryFill } from "react-icons/ri";
import { BiHome } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { TbMessage2 } from "react-icons/tb";
import { FaCartFlatbed } from "react-icons/fa6";
import { HiOutlineCash, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { TbReceiptRefund } from "react-icons/tb";
import { LiaAtomSolid } from "react-icons/lia";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BiHome, current: true },
  {
    name: "Product",
    href: "/products/create",
    subproduct: [
      {
        name: "Add New products",
        href: "/products/create",
        current: true,
      },
      {
        name: "Product Bulk",
        href: "#",
        current: true,
      },
      {
        name: "Product Reviews",
        href: "#",
        current: true,
      },
    ],
    icon: ShoppingCartIcon,
    current: false,
  },

  { name: "Coupon", href: "/coupon", icon: RiCoupon3Line, current: false },
  {
    name: "Wholesale Products",
    href: "#",
    icon: FaCartFlatbed,
    current: false,
  },
  { name: "Orders", href: "/order", icon: HiOutlineCash, current: false },
  {
    name: "Received Refund Request",
    href: "#",
    icon: TbReceiptRefund,
    current: false,
  },
  { name: "Shop Setting", href: "#", icon: RiSettings4Line, current: false },
  { name: "Payment History", href: "/payment", icon: RiHistoryFill, current: false },
  { name: "Money Withdraw", href: "/moneywithdraw", icon: GiMoneyStack, current: false },
  { name: "Conversations", href: "#", icon: TbMessage2, current: false },
  {
    name: "Product Queries",
    href: "#",
    icon: HiOutlineQuestionMarkCircle,
    current: false,
  },
  { name: "Support Ticket", href: "#", icon: LiaAtomSolid, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "/profile" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
  const router = useRouter();
  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 custom-scroll overflow-y-auto bg-white px-6 pb-4 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center justify-center">
                    <img
                      className="h-8 w-auto"
                      src="/assets/icons/Wiestell Logo.png"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item, index) => {
                              return (
                                <li key={index}>
                                  <Link
                                    href={item.href}
                                    className={classNames(
                                      item.href === router.pathname
                                        ? "bg-gray-200 font-semibold"
                                        : "text-gray-800 hover:font-semibold hover:bg-gray-100",
                                      "group flex gap-x-3 items-center rounded-md p-2 text-sm transition duration-500 leading-6 "
                                    )}
                                    onClick={() => setSidebarOpen(false)}
                                  >
                                    <item.icon
                                      className="h-4 w-4 shrink-0"
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </Link>
                                </li>
                              )
                            }
                            )}
                        </ul>
                      </li>

                      <li className="mt-auto">
                        <Link
                          href="#"
                          className="group -mx-2 flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                          <Cog6ToothIcon
                            className="h-4 w-4 shrink-0"
                            aria-hidden="true"
                          />
                          Settings
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0  lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto custom-scroll bg-white px-6 pb-4">
          <Link
            href="/dashboard"
            className="flex h-16 shrink-0 items-center justify-center"
          >
            <img
              className="h-7 w-auto"
              src="/assets/icons/Wiestell Logo.png"
              alt="Your Company"
            />
          </Link>
          <div>
            <input
              placeholder="Search in menu"
              className="rounded text-gray-300 focus:outline-none ring-0 focus:ring-0 bg-gray-200 w-full"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => {
                    return (
                      <React.Fragment key={item.name}>
                        <li
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-gray-200 font-semibold"
                              : "text-gray-800 hover:font-semibold hover:bg-gray-100",
                            "group  flex gap-x-3 items-center rounded-md p-2 text-sm transition duration-500 leading-6 "
                          )}
                        >
                          <Link
                            href={item.href}
                            className="flex flex-1 items-center gap-x-3"
                          >
                            <item.icon
                              className="h-4 w-4 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                          {/* {item.subproduct && (
                            <ChevronDownIcon className=" h-4 w-4  text-white  " />
                          )} */}
                        </li>

                        {item.subproduct?.map((item, index) => {
                          return (
                            <div key={item.name}>
                              <li
                                className={classNames(
                                  item.href === router.pathname
                                    ? "bg-gray-200  text-gray-800 font-semibold"
                                    : "text-gray-800 hover:text-gray-800 hover:font-semibold hover:bg-gray-100",
                                  "group flex gap-x-3 items-center rounded-md p-2 pl-7 text-sm transition duration-500 leading-6 "
                                )}
                                key={index}
                              >
                                <span
                                  className={classNames(
                                    item.href === router.pathname
                                      ? "bg-gray-800"
                                      : "",
                                    "border rounded-full border-gray-300 block w-1.5 h-1.5"
                                  )}
                                ></span>
                                <Link href={item.href}>{item.name}</Link>
                              </li>
                            </div>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </ul>
              </li>

              <li className="mt-auto">
                <Link
                  href="#"
                  className="group -mx-2 items-center flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-800 hover:bg-gray-200 hover:text-gray-800"
                >
                  <Cog6ToothIcon
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
