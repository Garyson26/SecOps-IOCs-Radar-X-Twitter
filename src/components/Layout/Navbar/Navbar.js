import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
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
          <div className="hidden lg:flex lg:gap-x-12">
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
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <div className="justify-between d-flex space-x-4">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Start Selling
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in
              </a>
            </div>
          </div>
        </nav>
      </header>

    </>
  );
}

export default Navbar;
