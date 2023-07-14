import Image from "next/image";
import React from "react";

const data = [
  {
    id:1,
    title:'Growth in the online retail market',
    dis:'Witnessing tremendous growth for the past 5 years, retailers are moving towards online selling.',
    list:[
      {
        title:'Avoid huge investments.'
      },
      {
        title:'Large customer base to sell online anywhere.'
      }
    ]
  },
  {
    id:2,
    title:'Get orders across UK',
    dis:'Receive orders from every part of the country and follow the simple steps to fulfill the orders.',
    list:[
      {
        title:'Simple dashboard'
      },
      {
        title:'Sale events, advertising and promotions'
      }
    ]
  },
  {
    id:3,
    title:'Ship with ease ',
    dis:'Enjoy easy pick-up and delivery across India with Ekart, our logistics partner.',
    list:[
      {
        title:'Efficient pick-up network'
      },
      {
        title:'Professional packaging support'
      }
    ]
  },
  {
    id:4,
    title:'Earn big',
    dis:'Our payments process is the fastest in the industry - get your payments in as little as 7 days of sales.',
    list:[
      {
        title:'Fastest payment settlement'
      },
      {
        title:'Detailed reports to track your payments'
      }
    ]
  }
]

const WhySellOnline = () => {
  return (
    <div className="grid gap-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {
      data.map((item)=>{
        return(

      <div key={item.id}>
        <div className="flex py-6 justify-center">
          <span className="text-white block  text-[18px] flex items-center justify-center bg-indigo-600 w-8 h-8  rounded-full">
          {item.id}
          </span>
        </div>
        <h2 className="text-gray-800 text-center mb-4 font-semibold text-[20px]">
        {item.title}
        </h2>
        <p>
      {item.dis}
        </p>
        <ul className="mt-4">
        {
          item.list.map((item,index)=>{
            return(
              <li className=" flex mb-2 items-center gap-3 text-[13px] text-gray-600" key={index}>
            <svg width="12px" viewBox="0 0 12 12">
              <g
                id="Final"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Assets"
                  transform="translate(-378.000000, -63.000000)"
                  stroke="#47A0FB"
                >
                  <g
                    id="Icons/Checkbox/Selected"
                    transform="translate(374.000000, 59.000000)"
                  >
                    <g
                      id="Rectangle-7-+-Path-38-Copy"
                      transform="translate(4.000000, 4.000000)"
                    >
                      <rect
                        id="Rectangle-7"
                        fill="#FFFFFF"
                        x="0.5"
                        y="0.5"
                        width="11"
                        height="10.64375"
                        rx="2"
                      ></rect>
                      <polyline
                        id="Path-38"
                        strokeLinecap="round"
                        points="3 5.6278125 4.89473684 7.374375 9 3.88125"
                      ></polyline>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            {item.title}
          </li>
            )
          })
        }
        </ul>
      </div>
        )
      })
    }
    </div>
  );
};

export default WhySellOnline;
