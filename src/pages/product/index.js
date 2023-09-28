import Image from 'next/image';
import React from 'react'
import { BiDotsVerticalRounded, BiSolidPencil, BiZoomIn } from 'react-icons/bi';
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const orderdetail = [
    {
        id: '1',
        img: '/assets/catalog-1.webp',
        name: 'Hummingbird printed t-shirt',
        ref: 'demo_1',
        category: 'Men',
        pricetex: '€27.30',
        pricewithouttext: '€27.30',
        quantity: '100'
    },
    {
        id: '1',
        img: '/assets/catalog-1.webp',
        name: 'Hummingbird printed t-shirt',
        ref: 'demo_1',
        category: 'Men',
        pricetex: '€27.30',
        pricewithouttext: '€27.30',
        quantity: '100'
    },
    {
        id: '1',
        img: '/assets/catalog-1.webp',
        name: 'Hummingbird printed t-shirt',
        ref: 'demo_1',
        category: 'Men',
        pricetex: '€27.30',
        pricewithouttext: '€27.30',
        quantity: '100'
    },
    {
        id: '1',
        img: '/assets/catalog-1.webp',
        name: 'Hummingbird printed t-shirt',
        ref: 'demo_1',
        category: 'Men',
        pricetex: '€27.30',
        pricewithouttext: '€27.30',
        quantity: '100'
    },
]
const Product = () => {
    const [enabled, setEnabled] = useState(false)
    return (
        <div className='px-4 py-8 sm:px-6  lg:px-8'>

        <div className='border-t mt-8 bg-white border p-6 border-t-[#78c4d8]'>
            <h2 className='text-[24px] text-[#363a41] font-semibold'>Orders (5)</h2>
            <div className='mt-5 px-[4]'>
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#363a41] sm:pl-0">

                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                ID
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                Image
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                Name

                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                Reference
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                Category
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                Price (tax excl.)
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                Price (tax incl.)
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                Quantity

                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[#363a41]">
                                Status

                            </th>
                            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-[#363a41]">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orderdetail.map((item, index) => (
                            <tr key={index}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    <input type='checkbox' className='text-black ring-0 focus:ring-0 ' />
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px] ">{item.id}</td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    <Image src={item.img} width={41} height={41} className='w-[41px] h-[41px]' />
                                </td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.name}</td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.ref}</td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.quantity}</td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.pricetex}</td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.pricewithouttext}</td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">{item.quantity}</td>
                                <td className="text-[#363a41] px-3 py-4 text-[13px]">
                                    <Switch
                                        checked={enabled}
                                        onChange={setEnabled}
                                        className={classNames(
                                            enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                        )}
                                    >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                enabled ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </td>

                                <td className='text-gray-500  px-3 py-4 ml-auto text-right'>
                                    <button className='px-1'>
                                        <BiSolidPencil />
                                    </button>
                                    <button className='px-1'>
                                        <BiDotsVerticalRounded />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default Product