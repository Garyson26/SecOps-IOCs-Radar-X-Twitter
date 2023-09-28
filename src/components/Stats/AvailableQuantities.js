import Image from 'next/image'
import React from 'react'
import { FaAsterisk } from 'react-icons/fa'
const orderdetail = [
    {
        id: '1',
        ref: 'demo_1',
        item: 'Hummingbird printed t-shirt',

        qunt: '2400',
        price: '€5.49',

        Value: '€13,176.003',
        employee: 'Demo PrestaShop',
    },
]
const AvailableQuantities = () => {
    return (
        <div className='border-t  bg-white border  p-6 border-t-[#78c4d8]'>
            <h3 className='text-[24px] leading-5 font-semibold text-ellipsis'>Evaluation of available quantities for sale</h3>
            <div className='grid mb-3 mt-4 grid-cols-12 items-center gap-2 lg:gap-6'>
                <label className="before:content-['*'] text-[14px] text-left lg:text-right col-span-12 lg:col-span-3 before:ml-0.5 before:text-red-500">
                    Category
                </label>

                <select className='pr-7 border-neutral-300 text-[12px] py-1 col-span-12 lg:col-span-6 bg-[right_0.2rem_center]'>
                    <option>
                        All
                    </option>
                    <option>
                        Home
                    </option>
                    <option>
                        Clothes
                    </option>
                    <option>
                        Men
                    </option>
                    <option>
                        Women

                    </option>
                    <option>
                        Accessories

                    </option>
                    <option>
                        Stationery
                    </option>
                    <option>
                        Home Accessories
                    </option>
                    <option>
                        Art

                    </option>

                </select>
            </div>
            <div className='overflow-auto px-[4]'>
                <table className="min-w-full  divide-y divide-gray-300">
                    <thead>
                        <tr>

                            <th scope="col" className="px-2 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                ID
                            </th>
                            <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                Ref.
                            </th>

                            <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                Item

                            </th>
                            <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                Available quantity for sale
                            </th>
                            <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                Price*
                            </th>
                            <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                Value
                            </th>

                        </tr>

                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orderdetail.map((item, index) => (
                            <tr key={index} className='even:bg-gray-50'>

                                <td className="text-[#363a41] text-left p-2 text-[12px] "> {item.id}</td>


                                <td className="text-[#363a41] text-left p-2 text-[12px]">{item.ref}</td>


                                <td className="text-[#363a41] text-left p-2 text-[12px]">{item.item}</td>
                                <td className="text-[#363a41] text-left p-2 text-[12px]">
                                    {item.qunt}
                                </td>
                                <td className="text-[#363a41] text-left p-2 text-[12px]">{item.price}</td>
                                <td className="text-[#363a41]  text-left  p-2 text-[12px]">{item.Value}</td>

                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="divide-y divide-gray-200" >
                        <tr>
                            <th colspan="3"></th>
                            <th className="text-[#363a41]  text-left  p-2 text-[12px]">Total quantities</th>
                            <th className="text-[#363a41]  text-left  p-2 text-[12px]">Average price</th>
                            <th className="text-[#363a41]  text-left  p-2 text-[12px]">Total value</th>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td className="text-[#363a41]  text-left  p-2 text-[12px]">16000</td>
                            <td className="text-[#363a41]  text-left  p-2 text-[12px]">€5.49</td>
                            <td className="text-[#363a41]  text-left  p-2 text-[12px]">€87,840.00</td>
                        </tr>
                    </tfoot>
                </table>
                <p className='text-[12px]'>
               <FaAsterisk  className='inline-block mr-1 text-[#363a41]'/>
                This section corresponds to the default wholesale price according to the default supplier for the product. An average price is used when the product has attributes.
									
                </p>
            </div>
        </div>
    )
}

export default AvailableQuantities