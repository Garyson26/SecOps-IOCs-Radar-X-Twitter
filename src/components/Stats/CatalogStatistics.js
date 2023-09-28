import Image from 'next/image'
import React from 'react'
import { FaAsterisk } from 'react-icons/fa'
import CatalogStats from '../Common/CatalogStats'
import { FiEdit } from 'react-icons/fi'
import { AiFillCaretDown } from 'react-icons/ai'
const orderdetail = [
    {
        id: '1',
        name: 'Hummingbird printed t-shirt',

        qunt: '2400',
        price: '€5.49',

        Value: '€13,176.003',
        employee: 'Demo PrestaShop',
    },
]
const CatalogStatistics = () => {
    return (
        <>
            <div className='border-t  bg-white border  p-6 border-t-[#78c4d8]'>
                <h3 className='text-[24px] leading-5 font-semibold text-ellipsis'>Catalog statistics</h3>
                <div className='grid mb-3 mt-4 grid-cols-12 items-center gap-2 lg:gap-6'>
                    <label className="text-[14px] text-left font-medium lg:text-right col-span-12 lg:col-span-3 ">
                        Choose a category
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
                <div className='grid divide-y border-t border-b'>
                    <CatalogStats title={"Products available:"} value={"19"} />
                    <CatalogStats title={"Average price (base price):"} value={"€18.89"} />
                    <CatalogStats title={"Product pages viewed:"} value={"0"} />
                    <CatalogStats title={"Products bought:"} value={"0"} />
                    <CatalogStats title={"Average number of page visits:"} value={"0.00"} />
                    <CatalogStats title={"Average number of purchases:"} value={"0.00"} />
                    <CatalogStats title={"Images available:"} value={"23"} />
                    <CatalogStats title={"Average number of images:"} value={"1.21"} />
                    <CatalogStats title={"Products never viewed:"} value={"19 / 19"} />
                    <CatalogStats title={"Products never purchased:"} value={"19 / 19"} />
                    <CatalogStats title={"Conversion rate*:"} value={"0.00(1 purchase / 0 visits)"} />

                </div>
                <div className='mt-4 px-[4]'>

                    <p className='text-[12px]'>
                        <FaAsterisk className='inline-block mr-1 text-[#363a41]' />
                        This section corresponds to the default wholesale price according to the default supplier for the product. An average price is used when the product has attributes.

                    </p>
                </div>
            </div>
            <div className='border-t mt-4  bg-white border  p-6 border-t-[#78c4d8]'>
                <h3 className='text-[24px] leading-5 font-semibold text-ellipsis'>Products never purchased</h3>

                <div className='overflow-auto mt-5 px-[4]'>
                    <table className="min-w-full  divide-y divide-gray-300">
                        <thead>
                            <tr>

                                <th scope="col" className="px-2 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    ID
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Name
                                </th>

                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Edit / View
                                </th>

                            </tr>

                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orderdetail.map((item, index) => (
                                <tr key={index} className='even:bg-gray-50'>

                                    <td className="text-[#363a41] text-left p-2 text-[12px] "> {item.id}</td>


                                    <td className="text-[#363a41] text-left p-2 text-[12px]">{item.name}</td>


                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <div className='flex items-start'>

                                            <button className='text-[12px] px-3 py-2 border border-gray-400 flex items-center gap-2 text-[#2a2a2a]'>
                                                <FiEdit className='text-[14px]' /> Edit
                                            </button>
                                            <button className='text-[10px] p-1 border-l-0 border border-gray-400 flex items-center gap-2 text-[#2a2a2a]'>
                                                <AiFillCaretDown />
                                            </button>
                                        </div>
                                    </td>


                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </>
    )
}

export default CatalogStatistics