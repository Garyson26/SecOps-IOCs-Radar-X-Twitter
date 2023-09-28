import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
const Brand = [
  { value: "Nike", label: "Nike" },
  { value: "Patagonia", label: "Patagonia" },
  { value: "Titan", label: "Titan" },
  { value: "Apple", label: "Apple" },
];
const category = [
  { value: "Outdoors", label: "Outdoors" },
  { value: "Music", label: "Music" },
  { value: "Software", label: "Software" },
  { value: "Sport", label: "Sport" },
];
const ProductValidatio = ({ setStep }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className=" px-3 pt-6">
      <form className="space-y-6" action="#" method="POST">
        <div className="grid sm:grid-cols-2 gap-4">
        <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Select Category
            </label>
            <div className="mt-2">
              <Select
              className="react-select-container"
  classNamePrefix="react-select"
                defaultValue={category[2]}
                options={category}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 6,
                  colors: {
                    ...theme.colors,
                    primary: "black",
                  },
                })}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Select Brand
            </label>
            <div className="mt-2">
              <CreatableSelect
              className="react-select-container"
  classNamePrefix="react-select"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 6,

                  colors: {
                    ...theme.colors,
                    primary: "black",
                  },
                })}
                isMulti
                options={Brand}
              />
            </div>
          </div>
         
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={() => setStep(2)}
            type="button"
            className="flex  justify-center rounded-md bg-white px-3 text-gray-700 py-1.5 text-sm font-semibold leading-6  shadow-md mr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back
          </button>
          <button
            onClick={() => setStep(4)}
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

export default ProductValidatio;
