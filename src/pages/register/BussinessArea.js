import React, { useState } from "react";

import Select from "react-select";

const category = [
  { value: "Algeria", label: "Algeria" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Nepal", label: "Nepal" },
  { value: "Canada", label: "Canada" },
  { value: "China", label: "China" },
  { value: "Cuba", label: "Cuba" },
  { value: "Egypt", label: "Egypt" },
  { value: "Thailand", label: "Thailand" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Pakistan", label: "Pakistan" },
];
const BussinessArea = ({ setStep }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [global, setGloabl] = useState(false);
  return (
    <div className=" px-3 pt-6">
      <form className="space-y-6" action="#" method="POST">
        <div className="grid  gap-4">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              You want to Sell Global?
            </label>
            <div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="affirmative"
                  id="yes"
                  value="yes"
                  checked
                  onChange={() => setGloabl(false)}
                />
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input onChange={() => setGloabl(true)} type="radio" name="affirmative" id="no" value="no" />
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          {global ? (
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  className="react-select-container"
  classNamePrefix="react-select"
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,

                    colors: {
                      ...theme.colors,
                      primary: "black",
                    },
                  })}
                  isMulti
                  options={category}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={() => setStep(3)}
            type="button"
            className="flex  justify-center rounded-md bg-white px-3 text-gray-700 py-1.5 text-sm font-semibold leading-6  shadow-md mr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
};

export default BussinessArea;
