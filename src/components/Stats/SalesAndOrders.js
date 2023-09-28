import React, { useState } from 'react'
import TableDataFilter from '../TableDataFilter/TableDataFilter'
import { MdCloudUpload } from 'react-icons/md'
import PieChart from '../Common/PieChart'
import LineChart from '../Common/LineChart'
import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'
import itLocale from 'i18n-iso-countries/langs/en.json'
import SalesCurrency from '../Common/SalesCurrency'
const orderdetail = [
    {
        reference: 'demo_19',
        name: 'Hummingbird printed t-shirt',
        qunt: '2400',
    },
]

const SalesAndOrders = () => {
    const [selectedCountry, setSelectedCountry] = useState("All countries");

    const selectCountryHandler = (value) => setSelectedCountry(value);

    // Have to register the languages you want to use
    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);

    // Returns an object not a list
    const countryObj = countries.getNames("en", { select: "official" });

    const countryArr = Object.entries(countryObj).map(([key, value]) => {
        return {
            label: value,
            value: key
        };
    });

    return (
        <div>
            <TableDataFilter />
            <div className='border-t mt-4  bg-white border  p-6 border-t-[#78c4d8]'>
                <h3 className='text-[24px] leading-5 font-semibold mb-10 text-ellipsis'>Sales and orders</h3>
                <div className='mt-4 flex mb-10 justify-end gap-3'>
                    <select
                        className='border-gray-200 max-w-[250px] text-[13px]'
                        value={selectedCountry}
                        onChange={(e) => selectCountryHandler(e.target.value)}
                    >
                        <option className='text-[13px]' value={"All countries"}>
                            All countries
                        </option>
                        {!!countryArr?.length &&
                            countryArr.map(({ label, value }) => (
                                <option className='text-[13px]' key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                    </select>
                    <button className='text-[13px] text-[#6c868e] hover:bg-[#6c868e] bg-white border border-gray-200 font-medium hover:text-white transition px-3 py-2 duration-200'>
                        Filter
                    </button>
                </div>

                <div className='grid gap-8 lg:grid-cols-12'>
                    <div className='lg:col-span-8'>
                        <LineChart />
                    </div>
                    <div className='lg:col-span-4'>
                        <div className='border-b pb-3 '>
                            <span className='text-[12px] block  text-gray-600'>Orders placed: 0</span>
                            <span className='text-[12px] block text-gray-600'>Products bought: 0</span>
                        </div>
                        <div className='pt-3'>

                            <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                                <MdCloudUpload className='text-[16px]' />    CSV Export
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid mt-8 gap-8 lg:grid-cols-12'>
                    <div className='lg:col-span-8'>
                        <SalesCurrency />
                    </div>
                    <div className='lg:col-span-4'>
                        <div className='border-b pb-3 '>
                            <span className='text-[12px] block  text-gray-600'>Sales: €0.00</span>

                        </div>
                        <div className='pt-3'>

                            <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                                <MdCloudUpload className='text-[16px]' />    CSV Export
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid gap-8 mt-10 lg:grid-cols-12'>
                    <div className='lg:col-span-8'>
                        <span className='text-[13px]  text-gray-600'>
                            No orders for this period.
                        </span>
                    </div>
                    <div className='lg:col-span-4'>
                        <div >

                            <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                                <MdCloudUpload className='text-[16px]' />    CSV Export
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesAndOrders