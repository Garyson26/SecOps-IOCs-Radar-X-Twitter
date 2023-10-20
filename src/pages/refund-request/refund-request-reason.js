import React from "react";

const RefundRequestReason = () => {
  return (
    <div className="px-4 py-8 sm:px-6  lg:px-8">
      <div className="border-t  bg-white border p-6 border-t-[#78c4d8]">
        <h2 className="text-[24px] text-[#363a41] font-semibold">
          Reason For Refund Request
        </h2>
        <div className="mt-5 border-t pt-4 px-[4]">
          <div className="grid grid-cols-12">
            <div className="col-span-2">
              <span className="text-gray-800 text-[14px] font-semibold">Reason:</span>
            </div>
            <div className="col-span-9">
              <p className="text-[14px] text-gray-800">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundRequestReason;
