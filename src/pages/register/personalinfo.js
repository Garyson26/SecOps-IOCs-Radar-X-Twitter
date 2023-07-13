import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

const PersonalInfo = ({setStep}) => {
  const [phone, setPhone] = useState();
  return (
    <div className=" px-3 pt-6">
      <form className="space-y-6" action="#" method="POST">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First Name
          </label>
          <div className="mt-2">
            <input
              id="firstname"
              name="firstname"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last Name
          </label>
          <div className="mt-2">
            <input
              id="lastname"
              name="lastname"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3"
            />
          </div>
        </div>
        <div>
        <label
            htmlFor="phonenumber"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone Number
          </label>
          <div className="mt-2">
        <PhoneInput inputClass="!h-auto focus:ring-0 !py-[0px] !w-full !border-none" containerClass="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 py-1.5 pr-3" country={"us"} value={phone} onChange={() => setPhone()} />
        </div>
        </div>
       
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="confirmpassword"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Confirm Password
          </label>
          <div className="mt-2">
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3"
            />
          </div>
        </div>
      </div>
        <div className="flex items-center justify-end">
          <button
          onClick={() => setStep(2)}
            type="submit"
            className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
