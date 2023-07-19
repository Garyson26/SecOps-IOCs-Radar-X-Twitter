import ProducatChart from "@/components/Dashboard/ProducatChart";
import ProducatSaleChart from "@/components/Dashboard/ProducatSaleChart";
import ProductPie from "@/components/Dashboard/ProductDoughnut";
// import Top12Producat from "@/components/Dashboard/Top12Producat";
import React from "react";

const Dashboard = () => {
  return (
    <div className="py-8">
      <div className="px-4 sm:px-6 mb-8 lg:px-8">
        <div className="">
          <h2 className="text-gray-800 font-semibold text-[20px] font-montserrat">
            Dashboard
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-6">
            <div className="bg-[#875fc0] bg-box-gradient1 rounded-md shadow-md">
              <div className="px-4 pt-4">
                <span className="text-white/[60%] text-[12px]  leading-[10px]">
                  Total
                  <br />
                  Customer
                </span>
                <h3 className="text-white/[90%] font-semibold font-poppins text-[34px]">
                  108
                </h3>
              </div>
              <img src="/assets/icons/graph.svg" />
            </div>
            <div className="bg-[#47c5f4] bg-box-gradient2 rounded-md shadow-md">
              <div className="px-4 pt-4">
                <span className="text-white/[60%] text-[12px]  leading-[10px]">
                  Total
                  <br /> Order
                </span>
                <h3 className="text-white/[90%] font-semibold font-poppins text-[34px]">
                  77
                </h3>
              </div>

              <img src="/assets/icons/graph.svg" />
            </div>
            <div className="bg-[#eb4786] bg-box-gradient3 rounded-md shadow-md">
              <div className="px-4 pt-4">
                <span className="text-white/[60%] text-[12px]  leading-[10px]">
                  Total
                  <br />
                  Product category
                </span>
                <h3 className="text-white/[90%] font-semibold font-poppins text-[34px]">
                  98
                </h3>
              </div>
              <img src="/assets/icons/graph.svg" />
            </div>
            <div className="bg-[#ffb72c] bg-box-gradient4 rounded-md shadow-md">
              <div className="px-4 pt-4">
                <span className="text-white/[60%] text-[12px]  leading-[10px]">
                  Total
                  <br />
                  Product brand
                </span>
                <h3 className="text-white/[90%] font-semibold font-poppins text-[34px]">
                  100
                </h3>
              </div>
              <img src="/assets/icons/graph.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 px-8 gap-6">
        <div className=" w-full  md:col-span-2 bg-white rounded-lg shadow-md">
          <div className=" border-b py-4 px-4 ">
            <h2 className="text-gray-800 font-semibold text-[17px] font-montserrat">
              Category wise product stock
            </h2>
          </div>
          <div className="max-h-[400px] px-4 ">
            <ProducatSaleChart />
          </div>
        </div>
        <div className=" w-full bg-white rounded-lg shadow-md">
          <div className=" border-b py-4 px-4 ">
            <h2 className="text-gray-800 font-semibold text-[17px] font-montserrat">
              Category wise product stock
            </h2>
          </div>
          <div className="max-h-[400px] py-3 px-4 ">
            <ProductPie />
          </div>
        </div>
      </div>
      <div className="grid mt-6 px-8 gap-6">
        <div className=" w-full bg-white rounded-lg shadow-md">
          <div className=" border-b py-4 px-4 ">
            <h2 className="text-gray-800 font-semibold text-[17px] font-montserrat">
              Category wise product sale
            </h2>
          </div>
          <div className="max-h-[400px] px-4 ">
            <ProducatChart />
          </div>
        </div>
      </div>

      {/* <div className="px-8 ">
        <Top12Producat />
      </div> */}
    </div>
  );
};

export default Dashboard;
