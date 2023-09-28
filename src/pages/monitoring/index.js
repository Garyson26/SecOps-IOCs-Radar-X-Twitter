import DeleteCategory from '@/components/Common/DeleteCategory'
import ListOfDisabledProducts from '@/components/Monitoring/ListOfDisabledProducts'
import ListOfEmptyCategories from '@/components/Monitoring/ListOfEmptyCategories'
import ListOfProductsWithCombinations from '@/components/Monitoring/ListOfProductsWithCombinations'
import ListOfProductsWithOutCombinations from '@/components/Monitoring/ListOfProductsWithOutCombinations'
import ListOfProductsWithoutDescription from '@/components/Monitoring/ListOfProductsWithoutDescription'
import ListOfProductsWithoutImages from '@/components/Monitoring/ListOfProductsWithoutImages'
import ListOfProductsWithoutPrice from '@/components/Monitoring/ListOfProductsWithoutPrice'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillInfoCircle, AiOutlineClose } from 'react-icons/ai'
import { BiSolidPencil } from 'react-icons/bi'
import { MdDeleteForever, MdOutlineWarning } from 'react-icons/md'
const orderdetail = [
    {
        id: '1',
        img: '/assets/catalog-1.webp',
        name: 'Hummingbird printed t-shirt',
        ref: 'demo_1',
        category: 'Men',
        des: 'Hgvoetty Unisex 3D Print Shirts Colorful Space Graphic Tees for Men Women Teens',
        displayed: 'Live'
    },

]
const orderdetail2 = [
]
const Monitoring = () => {
    const [open, setOpen] = useState(true)
    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className='px-4 py-8 sm:px-6  lg:px-8'>
            {
                open &&
                <div className='flex justify-center '>

                    <div className="flex relative bg-white items-center">
                        <div className="helper-card__left  hidden lg:block lg:w-[320px] ">
                            <img src="/assets/images/monitoring@3x.png" className="w-full max-w-full h-auto p-[35px_60px_0]" />
                        </div>
                        <div className="w-full p-6   lg:w-[480px] ">
                            <h2 className='text-[18px] mb-3 text-center font-semibold text-[#363a41]'>Focus on your catalog</h2>
                            <p className='text-[14px] text-[#363a41] '>Empty categories, disabled products, items that lack image or price... check the monitoring section to optimize your products management and make sure you forgot nothing.</p>
                            <a className="btn btn-outline-secondary" href="https://docs.prestashop-project.org/1.7-documentation/user-guide/selling/managing-catalog/monitoring-catalog" target="_blank">
                                Learn more
                            </a>
                        </div>
                        <button onClick={() => setOpen(false)} className='outline-none top-[10px] absolute right-[10px]'>
                            <AiOutlineClose />
                        </button>
                    </div>
                </div>
            }
            <ListOfEmptyCategories openModal={openModal}  orderdetail={orderdetail}/>
            <ListOfProductsWithCombinations openModal={openModal}  orderdetail2={orderdetail2}/>
            <ListOfProductsWithOutCombinations openModal={openModal}  orderdetail2={orderdetail2}/>
            <ListOfDisabledProducts  openModal={openModal}  orderdetail2={orderdetail2}/>
            <ListOfProductsWithoutImages openModal={openModal}  orderdetail2={orderdetail2}/>
            <ListOfProductsWithoutDescription  openModal={openModal}  orderdetail2={orderdetail2}/>
            <ListOfProductsWithoutPrice  openModal={openModal}  orderdetail2={orderdetail2}/>
           
            <DeleteCategory isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default Monitoring