import React from 'react'
import TableDataFilter from '../TableDataFilter/TableDataFilter'
import { MdCloudUpload } from 'react-icons/md'
import Image from 'next/image'
import Status from '../Common/Status'
const orderdetail = [
    {
        id: 1,
        active: true,
        item: 'Hummingbird printed t-shirt',
        bs: 'demo_19',
        ca: 'Hummingbird printed t-shirt',
        da: '2400',
        de: 'weq',
        et: 'qwe',
        en: '',
        es: '',
        mx: '',
        fr: '',
        qc: '',
        gl: '',
        hr: '',
        ID: '',
        IT: '',
        LV: '',
        HU: '',
        NL: '',
        NO: '',
        PL: '',
        BR: '',
        PT: '',
        RO: '',
        SQ: '',
        SK: '',
        SR: '',
        FI: '',
        SV: '',
        TR: '',
        LT: '',
        SI: '',
        VN: '',
        CS: '',
        EL: '',
        RU: '',
        UK: '',
        BG: '',
        MK: '',
        HE: '',
        FA: '',
        HI: '',
        BN: '',
        AR: '',
        JA: '',
        ZH: '',
        TW: '',
        KO: '',
        img: '',
        sales: '',
        Avai: '',
        global: ''

    },
]
const CatalogEvaluation = () => {
    return (
        <div>
            <TableDataFilter />
            <div className='border-t mt-4  bg-white border  p-6 border-t-[#78c4d8]'>
                <h3 className='text-[24px] leading-5 font-semibold text-ellipsis'>Catalog evaluation</h3>
                <div className='grid mb-3 mt-4 grid-cols-12 items-center gap-2 lg:gap-6'>
                    <label className="text-[14px] text-left lg:text-right col-span-12 lg:col-span-3">
                        Order by
                    </label>

                    <select className='pr-7 border-neutral-300 text-[12px] py-1 col-span-12 lg:col-span-3 bg-[right_0.2rem_center]'>
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
                <div className='overflow-auto mt-5 px-[4]'>
                    <table className="min-w-full  divide-y divide-gray-300">
                        <thead>
                            <tr>

                                <th scope="col" className="px-2 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    <span>
                                        <Image width={16} height={16} src="/assets/red.png" alt="not enough" />
                                        Not enough
                                    </span>
                                </th>

                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">


                                    <span>
                                        <Image width={16} height={16} src="/assets/green.png" alt="Alright" />
                                        Alright
                                    </span>

                                </th>

                            </tr>

                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className='even:bg-gray-50'>
                                <td className="text-[#363a41] font-semibold  text-right p-2 text-[12px] "> Descriptions	</td>
                                <td className="text-[#363a41] text-left p-2 text-[12px]">
                                    <div class="border table  w-full  border-gray-300">
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell text-center align-middle px-[16px] border-r border-gray-300">Less than</span>
                                        <input type="text" className='hover:border-black text-[12px]  w-full table-cell border-none text-[#505969] py-[8px] px-[16px]' name="CHECKUP_DESCRIPTIONS_LT" value="100" />
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell px-[16px] align-middle border-l border-gray-300">chars (without HTML)</span>
                                    </div>
                                </td>
                                <td className="text-[#363a41] text-left p-2 text-[12px]">
                                    <div class="border table  w-full  border-gray-300">
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell text-center align-middle px-[16px] border-r border-gray-300">Greater than</span>
                                        <input type="text" className='hover:border-black text-[12px] w-full table-cell border-none text-[#505969] py-[8px] px-[16px]' name="CHECKUP_DESCRIPTIONS_LT" value="100" />
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell px-[16px] align-middle border-l border-gray-300">chars (without HTML)</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='even:bg-gray-50'>
                                <td className="text-[#363a41] font-semibold  text-right p-2 text-[12px] ">Images</td>
                                <td className="text-[#363a41]  text-left p-2 text-[12px]">
                                    <div class="border table  w-full border-gray-300">
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell text-center align-middle px-[16px] border-r border-gray-300">Less than</span>
                                        <input type="text" className='hover:border-black text-[12px]  w-full table-cell border-none text-[#505969] py-[8px] px-[16px]' name="CHECKUP_DESCRIPTIONS_LT" value="100" />
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell px-[16px] align-middle border-l border-gray-300">images</span>
                                    </div>
                                </td>
                                <td className="text-[#363a41] text-left p-2 text-[12px]">
                                    <div class="border table  w-full  border-gray-300">
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell text-center align-middle px-[16px] border-r border-gray-300">Greater than</span>
                                        <input type="text" className='hover:border-black text-[12px]  w-full table-cell border-none text-[#505969] py-[8px] px-[16px]' name="CHECKUP_DESCRIPTIONS_LT" value="100" />
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell px-[16px] align-middle border-l border-gray-300">images</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='even:bg-gray-50'>
                                <td className="text-[#363a41] font-semibold  text-right p-2 text-[12px] ">Sales</td>
                                <td className="text-[#363a41]  text-left p-2 text-[12px]">
                                    <div class="border table  w-full border-gray-300">
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell text-center align-middle px-[16px] border-r border-gray-300">Less than</span>
                                        <input type="text" className='hover:border-black text-[12px]  w-full table-cell border-none text-[#505969] py-[8px] px-[16px]' name="CHECKUP_DESCRIPTIONS_LT" value="100" />
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell px-[16px] align-middle border-l border-gray-300">orders / month</span>
                                    </div>
                                </td>
                                <td className="text-[#363a41] text-left p-2 text-[12px]">
                                    <div class="border table  w-full  border-gray-300">
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell text-center align-middle px-[16px] border-r border-gray-300">Greater than</span>
                                        <input type="text" className='hover:border-black text-[12px]  w-full table-cell border-none text-[#505969] py-[8px] px-[16px]' name="CHECKUP_DESCRIPTIONS_LT" value="100" />
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell px-[16px] align-middle border-l border-gray-300">orders / month</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='even:bg-gray-50'>
                                <td className="text-[#363a41] font-semibold  text-right p-2 text-[12px] ">Available quantity for sale</td>
                                <td className="text-[#363a41]  text-left p-2 text-[12px]">
                                    <div class="border table  w-full border-gray-300">
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell text-center align-middle px-[16px] border-r border-gray-300">Less than</span>
                                        <input type="text" className='hover:border-black text-[12px]  w-full table-cell border-none text-[#505969] py-[8px] px-[16px]' name="CHECKUP_DESCRIPTIONS_LT" value="100" />
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell px-[16px] align-middle border-l border-gray-300">items</span>
                                    </div>
                                </td>
                                <td className="text-[#363a41] text-left p-2 text-[12px]">
                                    <div class="border table  w-full  border-gray-300">
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell text-center align-middle px-[16px] border-r border-gray-300">Greater than</span>
                                        <input type="text" className='hover:border-black text-[12px]  w-full table-cell border-none text-[#505969] py-[8px] px-[16px]' name="CHECKUP_DESCRIPTIONS_LT" value="100" />
                                        <span class="text-[#505969] bg-gray-100 leading-6 py-[8px] whitespace-nowrap table-cell px-[16px] align-middle border-l border-gray-300">items</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>
                <div className='grid mb-3 mt-4 grid-cols-12 items-center gap-2 lg:gap-6'>
                    <label className="text-[14px] text-left lg:text-right col-span-12 lg:col-span-3">
                        Order by
                    </label>

                    <select className='pr-7 border-neutral-300 text-[12px] py-1 col-span-12 lg:col-span-3 bg-[right_0.2rem_center]'>
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
                <div className='overflow-auto mt-5 px-[4]'>
                    <table className="min-w-full  divide-y divide-gray-300">
                        <thead>
                            <tr>

                                <th scope="col" className="px-2 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    ID
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Item
                                </th>

                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Active

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (BS)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (CA)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (DA)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (DE)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">


                                    Desc. (ET)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (EN)


                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">


                                    Desc. (ES)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (MX)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (FR)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (QC)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (GL)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (HR)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (ID)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (IT)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (LV)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (HU)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (NL)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (NO)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (PL)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (BR)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (PT)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (RO)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (SQ)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (SK)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (SR)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (FI)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (SV)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (TR)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (LT)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (SI)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (VN)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (CS)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (EL)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (RU)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (UK)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (BG)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (MK)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (HE)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (FA)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">

                                    Desc. (HI)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (BN)

                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (AR)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (JA)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (ZH)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (TW)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Desc. (KO)
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Images
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Sales
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Available quantity for sale
                                </th>
                                <th scope="col" className="px-3 py-2 text-[12px] text-left  font-bold text-[#363a41]">
                                    Global
                                </th>
                            </tr>

                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orderdetail.map((item, index) => (
                                <tr key={index} className='even:bg-gray-50'>

                                    <td className="text-[#363a41] text-left p-2 text-[12px] "> {item.id}</td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">{item.item}</td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        {item.active ?
                                            <Image src="/assets/green.png" width={16} height={16} />
                                            :
                                            <Image src="/assets/red.png" width={16} height={16} />

                                        }
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.bs} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.ca} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.da} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.de} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.et} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.en} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.es} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.mx} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.fr} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.qc} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.gl} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.hr} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.ID} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.IT} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.LV} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.HU} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.NL} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.NO} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.PL} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.BR} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.PT} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.RO} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.SQ} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.SK} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.SR} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.FI} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.SV} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.TR} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.TL} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.LT} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.SI} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.VN} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.CS} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.EL} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.RU} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.UK} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.BG} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.MK} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.HE} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.FA} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.HI} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.BN} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.AR} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.JA} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.ZH} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.TW} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.KO} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.img} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.img} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.img} />
                                    </td>
                                    <td className="text-[#363a41] text-left p-2 text-[12px]">
                                        <Status value={item.img} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
                <div>
                    <button className='border flex items-center gap-2 text-[#1d1d1b] font-semibold px-3 py-2 text-[12px]'>
                        <MdCloudUpload className='text-[16px]' />    CSV Export
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CatalogEvaluation