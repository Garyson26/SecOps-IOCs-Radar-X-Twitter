import Link from "next/link";
import React from "react";

const categories=[
    {name:"Sell Home Products Online" , href:"#"},
    {name:"Sell Tshirts Online" , href:"#"},
    {name:"Sell Womens Clothes Online" , href:"#"},
    {name:" Sell Clothes Online" , href:"#"},
    {name:"Sell Shirts Online" , href:"#"},
    {name:"Sell Books Online" , href:"#"},
    {name:"Sell Toys Online" , href:"#"},
    {name:"Sell Kurtis Online" , href:"#"},
    {name:"Sell Beauty Products Online" , href:"#"},
    {name:"Sell Makeup Online" , href:"#"},
    {name:"Sell Sarees Online" , href:"#"},
    {name:"Sell Electronics Online" , href:"#"},
    {name:"Sell Shoes Online" , href:"#"},
    {name:" Sell Watch Online" , href:"#"},
    {name:"Sell Appliances Online" , href:"#"},
    {name:" Sell Clothes Online" , href:"#"},
]

const PopularCategories = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-[25px] font-medium text-center text-gray-800">Popular categories to sell online</h2>
      <div className="grid sm:grid-cols-2 gap-3 mt-7 sm:grid-rows-8 lg:grid-rows-4 lg:grid-cols-4">
        {
            categories.map((item , index)=>{
                return(
                    <Link href={item.href} key={index}>
                            {item.name}
                    </Link>
                )
            })  
        }
      </div>
    </div>
  );
};

export default PopularCategories;
