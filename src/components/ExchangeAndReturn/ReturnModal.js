import React from "react";
import Modal from "../Modal/Modal";
import { AiOutlineClose } from "react-icons/ai";
const ReturnModal = (props) => {
  return (
    <Modal
      setIsOpen={props.setReturnOpen}
      isOpen={props.returnOpen}
      className={"max-w-md"}
    >
      <div>
        <div className="flex mb-7 items-center gap-3 justify-between">
          <h2 className="text-[20px]">Approve Refund Request !</h2>
          <button
            onClick={() => {
              props.setReturnOpen(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <p className="text-[12px]">
            Do you want to approve this refund request?
          </p>
          <div className="flex mt-6 items-center justify-end gap-3">
            <button
              onClick={() => props.setReturnOpen(false)}
              className="border bg-white px-4 py-2"
            >
              Cancel
            </button>
            <button className="border px-4 transition hover:bg-green-700 bg-green-600 border-green-600 text-white py-2">
              Approve
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReturnModal;
