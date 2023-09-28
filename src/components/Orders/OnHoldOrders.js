import Image from 'next/image'
import React from 'react'

function OnHoldOrders() {
    return (
        <>
            <div className="bg-white p-3">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">Order No. 14133432423</h2>
                    <span className="font-medium">03 Aug, 01:22 PM</span>
                </div>
                <div className="border flex p-5 bg-white">
                    <Image src="/assets/images/blue-t-shirt.jpg" alt="Loading..." width="100" height="100" />
                    <div className="flex px-5  flex-1 flex-col">
                        <h2 className="font-medium ">
                            Adidas Mens T-shirts
                        </h2>
                        <span>
                            Sub Order Num: 14133432423_1
                        </span>
                        <span>Size:36</span>
                        <span>Product SKU: Women's Parma 16 Shorts</span>
                        <span>Wiestell Product Id: 7B1G0E4E1</span>
                    </div>
                    <div className="flex flex-col justify-between items-end">

                        <button className="bg-black text-white px-3 py-1">
                            Accept
                        </button>
                        <h2 className="text-red-600 font-semibold text-[20px]">
                            Qty: 1
                        </h2>
                    </div>
                </div>
            </div>
            <div className="bg-white p-3">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">Order No. 14133432423</h2>
                    <span className="font-medium">03 Aug, 01:22 PM</span>
                </div>
                <div className="border flex p-5 bg-white">
                    <Image src="/assets/images/green s.jpg" alt="Loading..." width="100" height="100" />
                    <div className="flex px-5  flex-1 flex-col">
                        <h2 className="font-medium ">
                            Adidas Mens Shoes
                        </h2>
                        <span>
                            Sub Order Num: 14133432423_1
                        </span>
                        <span>Size:36</span>
                        <span>Product SKU: Women's Parma 16 Shorts</span>
                        <span>Wiestell Product Id: 7B1G0E4E1</span>
                    </div>
                    <div className="flex flex-col justify-between items-end">

                        <button className="bg-black text-white px-3 py-1">
                            Accept
                        </button>
                        <h2 className="text-red-600 font-semibold text-[20px]">
                            Qty: 1
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnHoldOrders