import React from "react";
import Modal from "../Modal/Modal";
import { AiOutlineClose } from "react-icons/ai";

const RejectModal = (props) => {
  return (
    <Modal
      setIsOpen={props.setRejectOpen}
      isOpen={props.rejectOpen}
      className={"max-w-md"}
    >
      <div>
        <div className="flex mb-7 items-center gap-3 justify-between">
          <h2 className="text-[20px]">Reject Request !</h2>
          <button
            onClick={() => {
              props.setRejectOpen(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <div className="flex gap-2 mb-1 items-center">
            <label for="html" className="block min-w-[100px] text-[14px]">
              {" "}
              Order Code:
            </label>
            <input
              type="text"
             disabled
              className="mt-1.5 disabled:bg-gray-200 border-gray-200 w-full"
            />
          </div>
          <div className="flex gap-2 mb-1 items-center">
            <label for="html" className="block min-w-[100px]  text-[14px]">
              {" "}
              Reason
            </label>
            <textarea
              type="text"
             
              className="mt-1.5 w-full"
            />
          </div>
          <div className="flex mt-6 items-center justify-end gap-3">
            <button
              onClick={() => props.setRejectOpen(false)}
              className="border bg-white px-4 py-2"
            >
              Cancel
            </button>
            <button className="border px-4 transition hover:bg-green-700 bg-green-600 border-green-600 text-white py-2">
             Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RejectModal;
