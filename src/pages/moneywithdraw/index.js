import WithdrawRequest from "@/components/Payment/Withdraw/WithdrawRequest";
import React, { useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BsPlusCircleFill } from "react-icons/bs";
const payment = [
  {
    id: 1,
    date: "	30-6-2023",
    amount: "$139.500",
    creditdate: "5-7-2023",
    status: "Paid",
  },
  {
    id: 2,
    date: "	35-7-2023",
    amount: "$139.500",
    creditdate: "-",
    status: "Pending",
  },
  // More people...
];
const MoneyWithdraw = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className=" mb-8 ">
        <h2 className="text-gray-800 font-medium text-[20px]">
          Money Withdraw
        </h2>
      </div>
      <div className="flex  justify-center gap-5">
        <div className="bg-box-gradient3 max-w-[400px] w-full rounded flex flex-col items-center p-5">
          <BiSolidDollarCircle className="text-white text-center text-[30px] opacity-90" />
          <h4 className="text-black text-[24px] mt-3 mb-1 text-center text-white font-bold">
            $139.500
          </h4>
          <span className="opacity-50 text-center text-white">
            Pending Balance
          </span>
        </div>
        <button onClick={()=> setOpen(true)} className="bg-white hover:shadow-lg trnasition duration-300 max-w-[400px] w-full rounded flex flex-col items-center p-5">
          <BsPlusCircleFill className="text-gray-300 text-center text-[50px] opacity-90" />
          <span className=" text-center text-gray-900 block mt-4 text-[20px]">
            Send A Withdraw Request
          </span>
        </button>
      </div>
      <div className="mt-5 bg-white rounded">
        <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[18px]">
          Withdraw request history
        </h2>
        <div className="mt-3 flow-root">
          <div className=" overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 text-[14px] pl-4 pr-3 text-left text-xs font-semibold text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900 "
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900 "
                    >
                      Amount
                    </th>
                   

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900 "
                    >
                           Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-right text-xs font-semibold text-gray-900 "
                    >
               
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {payment.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-700 ">
                        {item.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.amount}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div>
                          <spna
                            className={`${
                              item.status === "Paid"
                                ? "text-white bg-green-600 "
                                : item.status === "Pending"
                                ? "bg-sky-400 text-white"
                                : ""
                            } whitespace-nowrap rounded rounded px-1.5 py-0.5 text-[10px]  text-right font-medium "`}
                          >
                            {item.status}
                          </spna>
                        </div>
                      </td>
                      <td className="whitespace-nowrap  py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <WithdrawRequest setOpen={setOpen} open={open} />
    </div>
  );
};

export default MoneyWithdraw;
