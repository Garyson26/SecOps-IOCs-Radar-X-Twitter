import React, { useState } from "react";
import { Switch } from "@headlessui/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ShippingLocation = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="my-5 grid gap-8 max-w-[83%] mx-auto">
      <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
        <label className="text-right text-[14px] font-semibold col-span-3">
          Add handling costs
        </label>
        <div className="col-span-7 flex items-center  gap-3">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
              enabled ? "bg-green-700" : "bg-gray-200",
              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-0"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
          <span className="text-[14px] text-gray-500 font-semibold">
            {enabled ? "Yes" : "No"}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
        <label className="text-right text-[14px] font-semibold col-span-3">
          Free shipping
        </label>
        <div className="col-span-7 flex items-center  gap-3">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
              enabled ? "bg-green-700" : "bg-gray-200",
              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-0"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
          <span className="text-[14px] text-gray-500 font-semibold">
            {enabled ? "Yes" : "No"}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
        <label className="text-right text-[14px] font-semibold col-span-3">
          Billing
        </label>
        <div className="col-span-7 gap-3">
          <div className="block mb-1">
            <input
              type="radio"
              id="price"
              name="billing"
              defaultValue="Price"
            />
            <label htmlFor="price" className="text-[13px] ml-2">
              According to total price.
            </label>
          </div>
          <div className="block">
            <input
              type="radio"
              id="weight"
              name="billing"
              defaultValue="Weight"
            />
            <label htmlFor="weight" className="text-[13px] ml-2">
              According to total weight.
            </label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
        <label className="text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12 ">
          Tax
        </label>
        <select className="pr-7  col-span-12 lg:col-span-5 border-gray-300 bg-[right_0.2rem_center]">
          <option>en</option>
          <option>eng</option>
          <option>eng</option>
        </select>
      </div>
      <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
        <label className="text-left lg:text-right text-[14px] font-semibold lg:col-span-3 col-span-12 ">
          Out-of-range behavior
        </label>
        <select className="pr-7  col-span-12 lg:col-span-5 border-gray-300 bg-[right_0.2rem_center]">
          <option>en</option>
          <option>eng</option>
          <option>eng</option>
        </select>
      </div>
      <div className="grid grid-cols-12 items-center gap-2  lg:gap-6">
        <div className="overflow-auto col-span-8">
          <h4 className="my-[8.5px]">Ranges</h4>
          <table className="table w-">
            <tbody className="divide-y">
              <tr className="range_inf">
                <td className="text-[12px] p-2 bg-[#ccc] font-semibold">
                  Will be applied when the weight is
                </td>
                <td className="border_left bg-[#ccc] p-2 text-center border_bottom range_sign">
                  {" "}
                  {">="}
                </td>
                <td
                  className="border_bottom"
                  style={{ backgroundColor: "rgb(153, 153, 153)" }}
                >
                  <div className="input-group flex">
                    <span className="whitespace-nowrap py-2 px-2 w-[40px] text-center border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]">
                      kg
                    </span>
                    <input
                      className="w-full border-gray-300 text-[14px] max-w-[100px]"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr className="range_sup">
                <td className="text-[12px] p-2 bg-[#ccc] font-semibold">
                  Will be applied when the weight is
                </td>
                <td className="border_left range_sign bg-[#ccc] text-center p-2">&lt;</td>
                <td
                  className="range_data"
                  style={{ backgroundColor: "rgb(153, 153, 153)" }}
                >
                  <div className="input-group flex">
                    <span className="whitespace-nowrap py-2 px-2 w-[40px] text-center border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]">
                      kg
                    </span>
                    <input
                      className="w-full border-gray-300 text-[14px] max-w-[100px]"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr className="fees_all">
                <td className="border_top border_bottom border_bold">
                  <span className="text-[12px]">All</span>
                </td>
                <td className="p-2">
                  <input type="checkbox" className=""/>
                </td>
                <td
                  className="border_top border_bottom "
                  style={{ backgroundColor: "rgb(153, 153, 153)" }}
                ></td>
              </tr>
              <tr className="fees" data-zoneid="4">
                <td>
                  <label className="text-[12px] font-semibold" htmlFor="zone_4">
                    Africa
                  </label>
                </td>
                <td className="p-2">
                  <input
                    className="form-control input_zone"
                    id="zone_4"
                    name="zone_4"
                    defaultValue="1"
                    type="checkbox"
                  />
                </td>
                <td style={{ backgroundColor: "rgb(153, 153, 153)" }}>
                  <div className="input-group flex">
                    <span className="whitespace-nowrap py-2 px-2 w-[40px] text-center border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]">
                      €
                    </span>
                    <input
                      className="w-full border-gray-300 text-[14px] max-w-[100px]"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr className="fees" data-zoneid="3">
                <td>
                  <label className="text-[12px] font-semibold" htmlFor="zone_3">
                    Asia
                  </label>
                </td>
                <td className="p-2">
                  <input
                    className="form-control input_zone"
                    id="zone_3"
                    name="zone_3"
                    defaultValue="1"
                    type="checkbox"
                  />
                </td>
                <td style={{ backgroundColor: "rgb(153, 153, 153)" }}>
                  <div className="input-group flex">
                    <span className="whitespace-nowrap py-2 px-2 w-[40px] text-center border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]">
                      €
                    </span>
                    <input
                      className="w-full border-gray-300 text-[14px] max-w-[100px]"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr className="fees" data-zoneid="8">
                <td>
                  <label className="text-[12px] font-semibold" htmlFor="zone_8">
                    Central America/Antilla
                  </label>
                </td>
                <td className="p-2">
                  <input
                    className="form-control input_zone"
                    id="zone_8"
                    name="zone_8"
                    defaultValue="1"
                    type="checkbox"
                  />
                </td>
                <td style={{ backgroundColor: "rgb(153, 153, 153)" }}>
                  <div className="input-group flex">
                    <span className="whitespace-nowrap py-2 px-2 w-[40px] text-center border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]">
                      €
                    </span>
                    <input
                      className="w-full border-gray-300 text-[14px] max-w-[100px]"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr className="fees" data-zoneid="1">
                <td>
                  <label className="text-[12px] font-semibold" htmlFor="zone_1">
                    Europe
                  </label>
                </td>
                <td className="p-2">
                  <input
                    className="form-control input_zone"
                    id="zone_1"
                    name="zone_1"
                    defaultValue="1"
                    type="checkbox"
                    checked="checked"
                  />
                </td>
                <td style={{ backgroundColor: "rgb(153, 153, 153)" }}>
                  <div className="input-group flex">
                    <span className="whitespace-nowrap py-2 px-2 w-[40px] text-center border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]">
                      €
                    </span>
                    <input
                      className="w-full border-gray-300 text-[14px] max-w-[100px]"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr className="fees" data-zoneid="7">
                <td>
                  <label className="text-[12px] font-semibold" htmlFor="zone_7">
                    Europe (non-EU)
                  </label>
                </td>
                <td className="p-2">
                  <input
                    className="form-control input_zone"
                    id="zone_7"
                    name="zone_7"
                    defaultValue="1"
                    type="checkbox"
                  />
                </td>
                <td style={{ backgroundColor: "rgb(153, 153, 153)" }}>
                  <div className="input-group flex">
                    <span className="whitespace-nowrap py-2 px-2 w-[40px] text-center border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]">
                      €
                    </span>
                    <input
                      className="w-full border-gray-300 text-[14px] max-w-[100px]"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr className="fees" data-zoneid="2">
                <td>
                  <label className="text-[12px] font-semibold" htmlFor="zone_2">
                    North America
                  </label>
                </td>
                <td className="p-2">
                  <input
                    className="form-control input_zone"
                    id="zone_2"
                    name="zone_2"
                    defaultValue="1"
                    type="checkbox"
                  />
                </td>
                <td style={{ backgroundColor: "rgb(153, 153, 153)" }}>
                  <div className="input-group flex">
                    <span className="whitespace-nowrap py-2 px-2 w-[40px] text-center border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]">
                      €
                    </span>
                    <input
                      className="w-full border-gray-300 text-[14px] max-w-[100px]"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr className="fees" data-zoneid="5">
                <td>
                  <label className="text-[12px] font-semibold" htmlFor="zone_5">
                    Oceania
                  </label>
                </td>
                <td className="p-2">
                  <input
                    className="form-control input_zone"
                    id="zone_5"
                    name="zone_5"
                    defaultValue="1"
                    type="checkbox"
                  />
                </td>
                <td style={{ backgroundColor: "rgb(153, 153, 153)" }}>
                  <div className="input-group flex">
                    <span className="whitespace-nowrap py-2 px-2 w-[40px] text-center border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]">
                      €
                    </span>
                    <input
                      className="w-full border-gray-300 text-[14px] max-w-[100px]"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr className="fees" data-zoneid="6">
                <td>
                  <label className="text-[12px] font-semibold" htmlFor="zone_6">
                    South America
                  </label>
                </td>
                <td className="p-2">
                  <input
                    className="form-control input_zone"
                    id="zone_6"
                    name="zone_6"
                    defaultValue="1"
                    type="checkbox"
                  />
                </td>
                <td style={{ backgroundColor: "rgb(153, 153, 153)" }}>
                  <div className="input-group flex">
                    <span className="whitespace-nowrap py-2 px-2 w-[40px] text-center border border-gray-300 border-r-0 bg-[#f7f7f7] text-[#505969] text-[14px]">
                      €
                    </span>
                    <input
                      className="w-full border-gray-300 text-[14px] max-w-[100px]"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr className="delete_range">
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-12">
        <button className="border hover:border-black hover:bg-neutral-100 font-semibold text-[14px] px-4 py-2">
        Add new range
              </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingLocation;
