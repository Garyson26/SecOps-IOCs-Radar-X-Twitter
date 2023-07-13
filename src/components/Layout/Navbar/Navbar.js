import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-white relative z-[22]">
        <nav
          className="mx-auto shadow-sm relative flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex md:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={40}
                height={40}
                src="/assests/icons/Wiestell_Logo.jpg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex md:gap-x-12">
            <Link
              href="/dashboard"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Services
            </Link>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </a>
          </div>
          <div className="gap-4 flex md:flex-1 md:justify-end">
            <div className="justify-between flex space-x-4">
              <Link
                href="/register"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Start Selling
              </Link>
              <Link
                href="/login"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in
              </Link>
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        {open ? (
          <div className="flex flex-col shadow-sm border-t  z-[22] w-full px-6  bg-white absolute md:hidden md:gap-x-12">
            <Link
              href="/dashboard"
              className="text-sm py-3 font-semibold leading-6 text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-sm py-3 font-semibold leading-6 text-gray-900"
            >
              Services
            </Link>
            <a
              href="#"
              className="text-sm py-3  font-semibold leading-6 text-gray-900"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-sm py-3 font-semibold leading-6 text-gray-900"
            >
              Company
            </a>
          </div>
        ) : (
          ""
        )}
      </header>
    </>
  );
}

export default Navbar;
