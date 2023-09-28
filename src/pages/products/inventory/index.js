import Image from 'next/image'
import React from 'react'
import { BiUpload } from 'react-icons/bi'
const tabs = [
  { name: 'Active', count: '52', current: false },
  { name: 'Activation Panding', count: '6', current: false },
  { name: 'Blocked', count: '4', current: true },
  { name: 'Pushed', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Inventory = () => {
  return (
    <div className="py-8 font-poppins">
      <div className="px-4 sm:px-6 mb-8 lg:px-8">
        <div className='flex w-full items-center justify-between'>

          <h2 className="text-gray-800  font-medium text-[20px]">
            Inventory
          </h2>
          <button className='px-3 py-1.5 flex items-center gap-2 hover:bg-blue-700 trnasition duration-300 bg-blue-600 text-white'>
            <BiUpload className='text-[19px]' /> Upload Catalog
          </button>
        </div>
        <div className='bg-white mt-5 p-5'>
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                    'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                  {tab.count ? (
                    <span
                      className={classNames(
                        tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                        'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
                      )}
                    >
                      {tab.count}
                    </span>
                  ) : null}
                </button>
              ))}
            </nav>
          </div>
          <div className='border-t'>
            <div className='w-[360px] border-r'>
              <h4 className='font-medium border-b py-4'>
                Catalog: Pushed
              </h4>
              <div className='grid divide-y'>
                <div className='flex py-3 gap-3'>
                  <div className='flex'>
                    <Image src="/assets/catalog-1.webp" width={100} height={100} className="w-[100px] flex-none h-[100px]" />
                    <div className=''>
                      <Image src="/assets/catalog-1.webp" width={50} height={50} className="w-[50px] flex-none h-[50px]" />
                      <div className='relative w-[50px] flex-none h-[50px]'>
                        <span className='absolute inset-0 text-white flex items-center justify-center bg-black/[60%]'>
                          +1
                        </span>
                        <Image src="/assets/catalog-1.webp" width={50} height={50} className="w-[50px] flex-none h-[50px]" />
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-[14px] font-semibold text-elips mb-2'>Trendy Rayon Anarkali Kurti for Women's Ethnic Wear Middi Gown</h3>
                    <div>
                      <span className='text-[12px] text-gray-500'>
                        Catalog ID: <span className='text-black'>4325232</span>
                      </span>
                    </div>
                    <div>
                      <span className='text-[12px] text-gray-500'>
                        Category ID: <span className='text-black'>Kurti</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex py-3 gap-3'>
                  <div className='flex'>
                    <Image src="/assets/catalog-1.webp" width={100} height={100} className="w-[100px] flex-none h-[100px]" />
                    <div className=''>
                      <Image src="/assets/catalog-1.webp" width={50} height={50} className="w-[50px] flex-none h-[50px]" />
                      <div className='relative w-[50px] flex-none h-[50px]'>
                        <span className='absolute inset-0 text-white flex items-center justify-center bg-black/[60%]'>
                          +1
                        </span>
                        <Image src="/assets/catalog-1.webp" width={50} height={50} className="w-[50px] flex-none h-[50px]" />
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-[14px] font-semibold text-elips mb-2'>Trendy Rayon Anarkali Kurti for Women's Ethnic Wear Middi Gown</h3>
                    <div>
                      <span className='text-[12px] text-gray-500'>
                        Catalog ID: <span className='text-black'>4325232</span>
                      </span>
                    </div>
                    <div>
                      <span className='text-[12px] text-gray-500'>
                        Category ID: <span className='text-black'>Kurti</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full '>
              <h3 className='text-[16px] font-semibold text-elips mb-2'>Trendy Rayon Anarkali Kurti for Women's Ethnic Wear Middi Gown</h3>
              <div className='flex divide-x '>
                <span className='text-[14px] pr-2 text-gray-500'>
                  Catalog ID: 4325232
                </span>
                <span className='text-[14px] pl-2 text-gray-500'>
                  Category ID: Kurti
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory