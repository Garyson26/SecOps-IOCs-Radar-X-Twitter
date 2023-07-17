import Image from "next/image";
import Link from "next/link";
import React from "react";

const selling = [
  {
    title: "Growth",
    icon: "/assets/icons/GrowthSellIcon.svg",
    detail:
      "Widen your reach to a customer base of 1 billion and grow your online business further with the support of Account Managers.",
  },
  {
    title: "Lowest cost of doing business",
    icon: "/assets/icons/CostSellIcon.svg",
    detail:
      "Along with the most competitive rate card in the industry you also get on-time and reliable payments.",
  },
  {
    title: "Ease",
    icon: "/assets/icons/EasySellIcon.svg",
    detail:
      "You just need 1 product and 2 documents to start selling online on Flipkart.",
  },
  {
    title: "Transparency",
    icon: "/assets/icons/TransparencySellIcon.svg",
    detail: "Equal opportunities for all the sellers to grow.",
  },
];

const WhyWiestelli = () => {
  return (
    <div>
      <h2 className="text-gray-900 text-center py-4 font-semibold text-[24px]">
        Advantages of Selling on Wiestelli
      </h2>
      <div className="grid my-5 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">

      {selling.map((item, index) => {
        return (
          <div className="flex gap-4">
            <div>
              <Image
                src={item.icon}
                className="flex-1"
                width={80}
                height={80}
                alt="Loading..."
              />
            </div>
            <div>
              <h3 className="text-gray-900 mb-3 font-semibold text-[18px]">
               {item.title}
              </h3>
              <p>
               {item.detail}
              </p>
              <Link href="#">Learn More</Link>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default WhyWiestelli;
