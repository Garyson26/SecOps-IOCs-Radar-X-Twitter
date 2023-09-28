import React, { useState } from "react";
import PersonalInfo from "./personalinfo";
import BussinessDetails from "./bussinessdetails";
import ProductValidatio from "./productvalidatio";
import BussinessArea from "./BussinessArea";

const Register = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="container max-w-7xl mx-auto p-6 lg:px-8">
      <div>
        <h2 className="text-[25px] font-medium mb-10 text-center text-gray-800">
          Create Your Marketplace
        </h2>
      </div>
      <div className="bg-white mx-auto max-w-3xl p-5 shadow-lg rounded-md">
        <ol className="flex items-center pb-5 max-w-xl mx-auto w-full">
          <li
            className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800 ${
              step === 2 || step === 3 || step === 4
                ? "after:border-blue-100"
                : "after:border-gray-100"
            }`}
          >
            <span className="flex items-center relative justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="absolute hidden sm:block text-[12px] md:text-[16px] bottom-[-24px] whitespace-nowrap">
                Personal Info
              </span>
            </span>
          </li>
          <li
            className={`${
              step === 3 || step === 4   ? "after:border-blue-100 " : "after:border-gray-100"
            } ${
              step === 2 || step === 3 || step === 4  ? "text-blue-600 " : "text-gray-800 "
            } flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block dark:after:border-gray-700`}
          >
            <span
              className={`${
                step === 2 || step === 3 || step === 4  ? "bg-blue-100" : "bg-gray-100"
              } flex relative items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0`}
            >
              <svg
                className={`w-4 h-4  lg:w-5 lg:h-5 dark:text-gray-100 ${
                  step === 2 || step === 3 || step === 4  ? "text-blue-600" : "text-gray-500"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
              <span className="absolute hidden text-[12px] md:text-[16px] sm:block bottom-[-24px] whitespace-nowrap">
                Bussiness Details
              </span>
            </span>
          </li>
          <li
            className={`${
              step === 4 ? "after:border-blue-100 " : "after:border-gray-100"
            } ${
              step === 4 || step === 3 ? "text-blue-600 " : "text-gray-800 "
            } flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block dark:after:border-gray-700`}
          >
            <span
              className={`${
                step === 4 || step === 3 ? "bg-blue-100" : "bg-gray-100"
              } flex relative items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0`}
            >
              <svg
                className={`w-4 h-4  lg:w-5 lg:h-5 dark:text-gray-100 ${
                  step === 4 || step === 3 ? "text-blue-600" : "text-gray-500"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
              </svg>
              <span className="absolute hidden text-[12px] md:text-[16px] sm:block bottom-[-24px] whitespace-nowrap">
              Product Validation
              </span>
            </span>
          </li>
          <li className="flex items-center">
            <span
              className={`${
                step === 4 ? "bg-blue-100 text-blue-600" : "bg-gray-100"
              } flex relative items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0`}
            >
              <svg
                className={`w-4 h-4  lg:w-5 lg:h-5 dark:text-gray-100 ${
                  step === 4 ? "text-blue-600" : "text-gray-500"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
              </svg>
              <span className="absolute hidden sm:block text-[12px] md:text-[16px] bottom-[-24px] whitespace-nowrap">
              Bussiness Area
              </span>
            </span>
          </li>

        </ol>
        {step === 1 ? (
          <PersonalInfo setStep={setStep} />
        ) : step === 2 ? (
          <BussinessDetails setStep={setStep} />
        ) :step === 3 ? (
          <ProductValidatio setStep={setStep} />
        ):(
          <BussinessArea setStep={setStep}/>
        )}
      </div>
    </div>
  );
};

export default Register;
