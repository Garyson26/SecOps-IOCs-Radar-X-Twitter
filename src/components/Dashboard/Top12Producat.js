import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import { StarIcon } from "@heroicons/react/20/solid";

const sliderData = [
  {
    img: "/assets/images/blue s.png",
    title: "Under Armour Men's Charged Assert 9 Running Shoe",
    price: "92.00",
    oldPrice: "107.00",
    discount: "25%",
    average:3,
  },
  {
    img: "/assets/images/blueshots.png",
    title: "Adidas Women's Parma 16 Shorts",
    price: "92.00",
    average:3,
  },
  {
    img: "/assets/images/green s.jpg",
    title: "Nike Men 'Mercurial Superfly 7 Elite Firm Ground Football Shoe",
    price: "56.00",
    discount: "12%",
    oldPrice: "84.00",
    average:3,
  },
  {
    img: "/assets/images/pinkcloth.png",
    title: "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
    price: "92.00",
    average:3,
  },
  {
    img: "/assets/images/raybon.png",
    title: "Rb3030 Outdoorsman I Aviator Sunglasses",
    price: "92.00",
    average:3,
  },
  {
    img: "/assets/images/watchblack.jpg",
    title: "Men's Machine Stainless Steel Quartz Chronograph Watch",
    price: "92.00",
    average:3,
  },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Top12Producat = () => {
  const [wishlist, setWishlist] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    arrows:false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);

  const renderArrows = () => {
    return (
        <div className="owl-carousel__nav w-full flex items-center gap-3 ">
        <button onClick={() => sliderRef.current.slickPrev()} className=" white:bg-[#0c1a32] bg-white z-[3] absolute left-[20px] top-[50%] translate-y-[-50%] rounded w-8 h-8 flex items-center justify-center cursor-pointer shadow-sm hover:bg-black hover:text-white transition duration-200 text-orange">
          <FaArrowLeft />
        </button>
        <button onClick={() => sliderRef.current.slickNext()} className="white:bg-[#0c1a32] bg-white z-[3] absolute right-[20px] top-[50%] translate-y-[-50%] rounded w-8 h-8 flex items-center justify-center cursor-pointer shadow-sm hover:bg-black hover:text-white transition duration-200 text-orange">
          <FaArrowRight />
        </button>
      </div>
     
    );
  };
  return (
    <div className="bg-white mt-6 max-w-8xl rounded-md shadow-md ">
      <div className=" border-b py-4 px-4 ">
        <h3 className="font-semibold text-gray-700 text-[20px]">
        Top 12 Products
        </h3>
      </div>
      <div className="px-5 py-5 relative">
      {renderArrows()}
        <Slider   ref={sliderRef} {...settings}>
          {sliderData.map((item, index) => {
            return (
              <div
                key={index}
                className="  overflow-hidden px-4 transition-all duration-[0.5s]"
              >
                <div className="py-4 border overflow-hidden relative z-[1] group/item">
                  <div className="relative transition-all block after:absolute before:absolute overflow-hidden">
                    <Image
                      width={195}
                      height={195}
                      alt="placeholder"
                      className="group-hover/item:scale-105 mx-auto h-[195px] w-[195px] object-contain transition-all"
                      src={item.img}
                    />
                    {item.discount && item.discount ? (
                      <span className="absolute top-1 left-1 text-white bg-red-600 font-semibold text-[10px] px-1.5 py-0.5">
                        {item.discount}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="p-4 pb-2">
                    <div className="cursor-default text-center mt-3">
                      <span className="font-bold text-gray-700 group-hover/item:text-black">
                        ${item.price}
                      </span>
                      {item.oldPrice && item.oldPrice ? (
                        <span className="text-gray-500 ml-1 transition-all duration-[0.5s] opacity-100  line-through text-[14px]">
                          ${item.oldPrice}
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="flex my-1.5 justify-center items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            item.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-4 w-4 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <div className="min-h-[36px]">
                    <span className="text text-elips hover:text-black  block transition-all duration-300 text-gray-700 text-[12px] text-center">
                      {item.title}
                    </span>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
       
      </div>
    </div>
  );
};

export default Top12Producat;