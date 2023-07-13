import React from "react";

const BussinessDetails = ({ setStep }) => {
  return (
    <div className=" px-3 pt-6">
      <form className="space-y-6" action="#" method="POST">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Bussiness Name
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
              htmlFor="tax"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Tax Indentification No.
            </label>
            <div className="mt-2">
              <input
                id="tax"
                name="tax"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="address1"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address 1
            </label>
            <div className="mt-2">
              <input
                id="address1"
                name="address1"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="address2"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address 2
            </label>
            <div className="mt-2">
              <input
                id="address2"
                name="address2"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>
          <div className="sm:col-span-2 ">
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="address2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 h-[36px] text-gray-900 outline-none ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-black sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="address2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 h-[36px]  text-gray-900 outline-none ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-black sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="address2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State
                </label>
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 h-[36px]  text-gray-900 outline-none ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-black sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="address1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Postal Code
                </label>
                <div className="mt-2">
                  <input
                    id="address1"
                    name="address1"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>
            </div>
          </div>
        
          
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={() => setStep(1)}
            type="button"
            className="flex  justify-center rounded-md bg-white px-3 text-gray-700 py-1.5 text-sm font-semibold leading-6  shadow-md mr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back
          </button>
          <button
            onClick={() => setStep(3)}
            type="button"
            className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BussinessDetails;
