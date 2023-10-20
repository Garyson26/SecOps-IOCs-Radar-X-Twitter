import AvailableQuantities from '@/components/Stats/AvailableQuantities'
import BestBrands from '@/components/Stats/BestBrands'
import BestCategories from '@/components/Stats/BestCategories'
import BestCustomers from '@/components/Stats/BestCustomers'
import BestSellingProducts from '@/components/Stats/BestSellingProducts'
import BestSuppliers from '@/components/Stats/BestSuppliers'
import BestVouchers from '@/components/Stats/BestVouchers'
import CatalogEvaluation from '@/components/Stats/CatalogEvaluation'
import CatalogStatistics from '@/components/Stats/CatalogStatistics'
import CustomerAccounts from '@/components/Stats/CustomerAccounts'
import Newsletter from '@/components/Stats/Newsletter'
import { ProductDetails } from '@/components/Stats/ProductDetails'
import RegisteredCustomerInformation from '@/components/Stats/RegisteredCustomerInformation'
import SalesAndOrders from '@/components/Stats/SalesAndOrders'
import ShopSearch from '@/components/Stats/ShopSearch'
import StatsDashboard from '@/components/Stats/StatsDashboard'
import React, { useState } from 'react'
const stats = [
    {
        id: 1,
        name: 'Available quantities',
    },
    {
        id: 2,
        name: 'Best brands',
    },
    {
        id: 3,
        name: 'Best categories',
    },
    {
        id: 4,
        name: 'Best customers',
    },
    {
        id: 5,
        name: 'Best suppliers',
    },
    {
        id: 6,
        name: 'Best vouchers',
    },
    {
        id: 7,
        name: 'Best-selling products',
    },
    {
        id: 8,
        name: 'Catalog evaluation',
    },
    {
        id: 9,
        name: 'Catalog statistics',
    },
    {
        id: 10,
        name: 'Customer accounts',
    },
    {
        id: 11,
        name: 'Newsletter',
    },
    {
        id: 12,
        name: 'Pages not found',
    },
    {
        id: 13,
        name: 'Product details',
    },
    {
        id: 14,
        name: 'Registered customer information',
    },
    {
        id: 15,
        name: 'Sales and orders',
    },
    {
        id: 16,
        name: 'Shop search',
    },
    {
        id: 17,
        name: 'Stats Dashboard',
    },


]



const Stats = () => {
    const [tab, setTabs] = useState(17)
    return (
        <div>
            <div className='bg-white'>
                <div className=' flex items-center justify-between px-4 py-5 sm:px-6  lg:px-[15px] border-b '>
                    <h1 className='text-[24px] font-semibold '>
                        Stats
                    </h1>
                    <div className='flex items-center gap-2'>

                        <button className=' flex items-center border text-[14px] font-medium  text-black bg-white gap-1.5 px-3 py-1.5'>

                            Help
                        </button>
                    </div>
                </div>

            </div>
            <div className='grid gap-4 grid-cols-12' >
                <div className='col-span-3 divide-y '>
                    {
                        stats.map((item, index) => {
                            return (

                                <div onClick={() => setTabs(item.id)} className={`${tab === item.id ? 'text-white bg-[#1d1d1b]' : 'text-[#1d1d1b] bg-white'} px-[15px] py-[10px] text-[12px]  `} key={index}>
                                    {item.name}
                                </div>
                            )

                        })
                    }
                </div>
                <div className='col-span-9'>
           
                        {
                            tab === 1 ?
                            <AvailableQuantities />
                            :
                            tab === 2 ?
                            <BestBrands />
                            :
                            tab === 3 ?
                            <BestCategories />
                            :
                            tab === 4 ?
                            <BestCustomers />
                            :
                            tab === 5 ?
                            <BestSuppliers />
                            :
                            tab === 6 ?
                            <BestVouchers />
                           :
                           tab === 7 ?
                           <BestSellingProducts />
                            :
                            tab === 8 ?
                            <CatalogEvaluation />
                            :
                            tab === 9 ?
                            <CatalogStatistics />
                            :
                            tab === 10 ?
                            <CustomerAccounts />
                            :
                            tab === 11 ?
                            <Newsletter />
                            :
                            tab === 13 ?
                            <ProductDetails />
                            :
                            tab === 14 ?
                            <RegisteredCustomerInformation />
                            :
                            tab === 15 ?
                            <SalesAndOrders />
                            :
                            tab === 16 ?
                            <ShopSearch />
                            :
                            tab === 17 ?
                            <StatsDashboard />
                            :
                            <></>
                           
                        }
                   
                </div>
            </div>
        </div>
    )
}

export default Stats