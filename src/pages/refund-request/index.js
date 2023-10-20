import Image from "next/image";
import React from "react";
import { BiDotsVerticalRounded, BiSolidPencil, BiZoomIn } from "react-icons/bi";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";
import { FaBackward } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import RejectModal from "@/components/ExchangeAndReturn/Reject";
import ReturnModal from "@/components/ExchangeAndReturn/ReturnModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

  const orderdetail = [
    {
      id: "1",
      img: "/assets/catalog-1.webp",
      name: "Hummingbird printed t-shirt",
      ordercode: "20220420-07435544",
      category: "Men",
      Price: "€27.30",
      sellerapproval: "Pending",
      refundstatus: "Non-Paid",
    },
  ];
const RefundRequest = () => {
  const [enabled, setEnabled] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [returnOpen, setReturnOpen] = useState(false);

  return (
    <div>
      <div className="px-4 py-8 sm:px-6  lg:px-8">
        <div className="border-t  bg-white border p-6 border-t-[#78c4d8]">
          <h2 className="text-[24px] text-[#363a41] font-semibold">
            Refund Request All
          </h2>
          <div className="mt-5 px-[4]">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#363a41] sm:pl-0"
                  ></th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    Order Code:
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    Seller Approval
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    Refund Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]"
                  >
                    Options
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderdetail.map((item, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <input
                        type="checkbox"
                        className="text-black ring-0 focus:ring-0 "
                      />
                    </td>
                    <td className="text-[#363a41] px-3 py-4 text-[13px] ">
                      {item.id}
                    </td>
                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                      {item.ordercode}
                    </td>
                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                      <Image
                        src={item.img}
                        width={41}
                        height={41}
                        className="w-[41px] h-[41px]"
                      />
                    </td>
                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                      {item.name}
                    </td>
                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                      {item.Price}
                    </td>
                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                      {item.sellerapproval}
                    </td>

                    <td className="text-[#363a41] px-3 py-4 text-[13px]">
                      {item.refundstatus}
                    </td>

                    <td className="text-gray-500  px-3 py-4 ml-auto text-right">
                      <div className="flex items-center">
                        <button
                          onClick={() => setReturnOpen(true)}
                          className="text-green-600 px-1"
                          title="Refund Now"
                        >
                          <FaBackward />
                        </button>
                        <button
                          onClick={() => setRejectOpen(true)}
                          href={"refund-request-reason"}
                          className="text-red-600 px-1"
                          title="Reject Refund Request"
                        >
                          <MdDelete />
                        </button>
                        <Link
                          href={"/refund-request/refund-request-reason"}
                          className="text-orange-600 px-1"
                          title="View Reason"
                        >
                          <AiFillEye />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <RejectModal setRejectOpen={setRejectOpen} rejectOpen={rejectOpen} />
      <ReturnModal setReturnOpen={setReturnOpen} returnOpen={returnOpen} />
    </div>
  );
};

export default RefundRequest;
