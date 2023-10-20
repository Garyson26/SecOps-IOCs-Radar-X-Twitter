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
import { HiOutlineCash, HiOutlineQuestionMarkCircle, HiOutlineUsers } from "react-icons/hi";
import { TbReceiptRefund } from "react-icons/tb";
import { LiaAtomSolid } from "react-icons/lia";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { MdAnalytics, MdOutlineRateReview } from "react-icons/md";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BiHome, current: true },
  {
    name: "Catalog",
    href: "/products",
    subproduct: [
      {
        name: "Products",
        href: "/products",
        current: true,
      },
      {
        name: "Monitoring",
        href: "/monitoring",
        current: true,
      },
      {
        name: "Attributes & Features",
        href: "/attributes",
        href2: "/features",

        current: true,
      },
      {
        name: "Stock",
        href: "/stock",
        current: true,
      },
    ],
    icon: ShoppingCartIcon,
    current: false,
  },
  { name: "Product Review", href: "/reviews", icon: MdOutlineRateReview, current: false },

  { name: "Stats", href: "/stats", icon: MdAnalytics, current: false },
  {
    name: "Shipping",
    href: "/shipping/carriers",
    subproduct: [
      {
        name: " Carriers",
        href: "/shipping/carriers",
        current: true,
      },
      {
        name: "Preferences",
        href: "/shipping/preferences",
        current: true,
      },
    ],
    icon: ShoppingCartIcon,
    current: false,
  },
  // {
  //   name: "Wholesale Products",
  //   href: "#",
  //   icon: FaCartFlatbed,
  //   current: false,
  // },
  { name: "Orders", href: "/order", icon: HiOutlineCash, current: false },
  {
    name: "Sell",
    href: "/sell/invoice",
    subproduct: [
      {
        name: "Invoice",
        href: "/sell/invoice",
        current: true,
      },
      {
        name: "Credit Request",
        href: "/sell/credit-request",
        current: true,
      },
      {
        name: "Delivery slip ",
        href: "/sell/delivery-slip ",
        current: true,
      },
    ],
    icon: TbReceiptRefund,
    current: false,
  },
  {
    name: "Refund And Exchange",
    href: "/refund-request",
    subproduct: [
      {
        name: "Refund Request",
        href: "/refund-request",
        current: true,
      },
      {
        name: "Exchange Request",
        href: "/exchange-request",
        current: true,
      },
    ],
    icon: TbReceiptRefund,
    current: false,
  },
  // { name: "Refund And Exchange", href: "#", icon: RiSettings4Line, current: false },
  { name: "Payment History", href: "/payment", icon: RiHistoryFill, current: false },
  { name: "Money Withdraw", href: "/moneywithdraw", icon: GiMoneyStack, current: false },
  { name: "Teammates", href: "/teammates", icon: HiOutlineUsers, current: false },

  // { name: "Conversations", href: "#", icon: TbMessage2, current: false },
  // {
  //   name: "Product Queries",
  //   href: "#",
  //   icon: HiOutlineQuestionMarkCircle,
  //   current: false,
  // },
  // { name: "Information", href: "/information", icon: LiaAtomSolid, current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
  const router = useRouter();
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const [selectedemail, setSelectedemail] = useState([]);
  const handleAddRemoveemail = (item) => {
    if (selectedemail.includes(item)) {
      const arr = [...selectedemail];
      const index = arr.indexOf(item);
      if (index > -1) {
        // only splice array when item is found
        arr.splice(index, 1);
        setSelectedemail([...arr]); // 2nd parameter means remove one item only
      }
    } else {
      setSelectedemail([...selectedemail, item]);
    }
  };
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
                      <React.Fragment key={item.name}>
                        <li
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-gray-200 font-semibold"
                              : "text-gray-800 hover:font-semibold hover:bg-gray-100",
                            "group  flex gap-x-3 items-center rounded-md p-2 text-sm transition duration-500 leading-6 "
                          )}
                        >
                          {
                            item.subproduct ?
                              <button onClick={() => handleAddRemoveemail(item)}
                                className="flex w-full items-center justify-between">
                                <span className="flex gap-x-3  items-center">

                                  <item.icon
                                    className="h-4 w-4 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </span>
                                <ChevronDownIcon className=" h-4 w-4  text-black  " />
                              </button>
                              :
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

                          }
                        </li>

                        {item.subproduct?.map((items, index) => {
                          return (
                            <div className={classNames(
                              selectedemail.includes(item) ||
                              item?.href2 === router.pathname
                                ? "block"
                                : "hidden",
                              )}  key={items.name}>
                              <li
                                className={classNames(
                                  items.href === router.pathname ||
                                    items?.href2 === router.pathname

                                    ? "bg-gray-200  text-gray-800 font-semibold"
                                    : "text-gray-800 hover:text-gray-800 hover:font-semibold hover:bg-gray-100",
                                  "group flex gap-x-3 items-center rounded-md p-2 pl-7 text-sm transition duration-500 leading-6 "
                                )}
                                key={index}
                              >
                                <span
                                  className={classNames(
                                    items.href === router.pathname ||
                                      items?.href2 === router.pathname
                                      ? "bg-gray-800"
                                      : "",
                                    "border rounded-full border-gray-300 block w-1.5 h-1.5"
                                  )}
                                ></span>
                                <Link href={items.href}>{items.name}</Link>
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
                  href="/settings/profile"
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
                  {navigation.map((item, index) => {
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
                          {
                            item.subproduct ?
                              <button onClick={() => handleAddRemoveemail(item)}
                                className="flex w-full items-center justify-between">
                                <span className="flex gap-x-3  items-center">

                                  <item.icon
                                    className="h-4 w-4 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </span>
                                <ChevronDownIcon className=" h-4 w-4  text-black  " />
                              </button>
                              :
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

                          }
                        </li>

                        {item.subproduct?.map((items, index) => {
                          return (
                            <div className={classNames(
                              selectedemail.includes(item) ||
                              item?.href2 === router.pathname
                                ? "block"
                                : "hidden",
                              )}  key={items.name}>
                              <li
                                className={classNames(
                                  items.href === router.pathname ||
                                    items?.href2 === router.pathname

                                    ? "bg-gray-200  text-gray-800 font-semibold"
                                    : "text-gray-800 hover:text-gray-800 hover:font-semibold hover:bg-gray-100",
                                  "group flex gap-x-3 items-center rounded-md p-2 pl-7 text-sm transition duration-500 leading-6 "
                                )}
                                key={index}
                              >
                                <span
                                  className={classNames(
                                    items.href === router.pathname ||
                                      items?.href2 === router.pathname
                                      ? "bg-gray-800"
                                      : "",
                                    "border rounded-full border-gray-300 block w-1.5 h-1.5"
                                  )}
                                ></span>
                                <Link href={items.href}>{items.name}</Link>
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
                  href="/settings/profile"
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
