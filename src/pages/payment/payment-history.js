import React from "react";
const payment = [
  {
    id: 1,
    date: "	30-6-2023",
    amount: "$139.500",
    creditdate: "5-7-2023",
    status: "Success",
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
const PaymentHistory = () => {
  return (
    <div className="py-8 font-poppins px-4 sm:px-6 lg:px-8">
      <div className=" bg-white rounded">
        <h2 className="text-gray-800 px-[25px] py-3 border-b font-medium text-[20px]">
          Payment History
        </h2>
        <div className="mt-8 flow-root">
          <div className=" overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Credit Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                    >
                      Status
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
                        {item.amount}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.creditdate}
                      </td>
                      <td className="whitespace-nowrap  py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <div>

                        <spna
                          className={`${
                            item.status === "Success"
                              ? "text-green-600 bg-green-100 "
                              : item.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : ""
                          } whitespace-nowrap rounded px-2 rounded-full px-4 py-1 text-xs  text-right text-sm font-medium "`}
                        >
                          {item.status}
                        </spna>
                      </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
