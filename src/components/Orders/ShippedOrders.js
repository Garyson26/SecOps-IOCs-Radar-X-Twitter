import Image from 'next/image'
import React from 'react'

function ShippedOrders() {

    const ShippedOrders = [
        {
            id: 1,
            qty: 2,
            productName: "Adidas Women's Parma 16 Shorts",
            date: "03 Aug, 01:22 PM",
            order_no: 14133432423,
            sub_ord_no: 14133432423_1,
            size: 36,
            img: "blueshots.png",
            sku: "Adidas Women's Parma 16 Shorts"
        },
        {
            id: 2,
            qty: 1,
            productName: "Adidas Mens T-shirts",
            date: "04 Aug, 05:00 am",
            order_no: 14133432520,
            sub_ord_no: 14133432423_2,
            size: 30,
            img: "blue-t-shirt.jpg",
            sku: "Adidas Mens T-shirts"
        },
        {
            id: 3,
            qty: 1,
            productName: "Puma Mens Shoes",
            date: "01 Nov, 07:52 PM",
            order_no: 14133432220,
            sub_ord_no: 14133432423_3,
            size: 9,
            img: "green s.jpg",
            sku: "Puma Mens Shoes"
        },
    ]
    return (
        <>
            {ShippedOrders?.map((item, index) => {
                return (
                    <>
                        <div className="bg-white p-3" key={index}>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="font-semibold">Order No. {item.order_no}</h2>
                                <span className="font-medium">{item.date}</span>
                            </div>
                            <div className="border flex p-5 bg-white">
                                <Image src={`/assets/images/${item.img}`} alt="Loading..." width="100" height="100" />
                                <div className="flex px-5  flex-1 flex-col">
                                    <h2 className="font-medium ">
                                        {item.productName}
                                    </h2>
                                    <span>
                                        Sub Order Num: {item.sub_ord_no}
                                    </span>
                                    <span>Size:{item.size}</span>
                                    <span>Product SKU: {item.sku}</span>
                                    <span>Wiestell Product Id: 7B1G0E4E1</span>
                                </div>
                                <div className="flex flex-col justify-between items-end">

                                    <button className="bg-black text-white px-3 py-1">
                                        Shipped
                                    </button>
                                    <h2 className="text-red-600 font-semibold text-[20px]">
                                        Qty: {item.qty}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default ShippedOrders