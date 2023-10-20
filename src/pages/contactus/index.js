import React from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
const ContactUs = () => {
  return (
    // <div className="relative isolate bg-white">
    //   <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
    //     <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-20">
    //       <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
    //         <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
    //           <svg
    //             className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    //             aria-hidden="true"
    //           >
    //             <defs>
    //               <pattern
    //                 id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
    //                 width={200}
    //                 height={200}
    //                 x="100%"
    //                 y={-1}
    //                 patternUnits="userSpaceOnUse"
    //               >
    //                 <path d="M130 200V.5M.5 .5H200" fill="none" />
    //               </pattern>
    //             </defs>
    //             <rect width="100%" height="100%" strokeWidth={0} fill="white" />
    //             <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
    //               <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
    //             </svg>
    //             <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
    //           </svg>
    //         </div>
    //         <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
    //         <p className="mt-6 text-lg leading-8 text-gray-600">
    //           Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
    //           integer elementum id sem. Arcu sed malesuada et magna.
    //         </p>
    //         <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
    //           <div className="flex gap-x-4">
    //             <dt className="flex-none">
    //               <span className="sr-only">Address</span>
    //               <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
    //             </dt>
    //             <dd>
    //               545 Mavis Island
    //               <br />
    //               Chicago, IL 99191
    //             </dd>
    //           </div>
    //           <div className="flex gap-x-4">
    //             <dt className="flex-none">
    //               <span className="sr-only">Telephone</span>
    //               <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
    //             </dt>
    //             <dd>
    //               <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
    //                 +1 (555) 234-5678
    //               </a>
    //             </dd>
    //           </div>
    //           <div className="flex gap-x-4">
    //             <dt className="flex-none">
    //               <span className="sr-only">Email</span>
    //               <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
    //             </dt>
    //             <dd>
    //               <a className="hover:text-gray-900" href="mailto:hello@example.com">
    //                 hello@example.com
    //               </a>
    //             </dd>
    //           </div>
    //         </dl>
    //       </div>
    //     </div>
    //     <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-20">
    //       <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
    //         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    //           <div>
    //             <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
    //               First name
    //             </label>
    //             <div className="mt-2.5">
    //               <input
    //                 type="text"
    //                 name="first-name"
    //                 id="first-name"
    //                 autoComplete="given-name"
    //                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //           <div>
    //             <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
    //               Last name
    //             </label>
    //             <div className="mt-2.5">
    //               <input
    //                 type="text"
    //                 name="last-name"
    //                 id="last-name"
    //                 autoComplete="family-name"
    //                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //           <div className="sm:col-span-2">
    //             <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
    //               Email
    //             </label>
    //             <div className="mt-2.5">
    //               <input
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //                 autoComplete="email"
    //                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //           <div className="sm:col-span-2">
    //             <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
    //               Phone number
    //             </label>
    //             <div className="mt-2.5">
    //               <input
    //                 type="tel"
    //                 name="phone-number"
    //                 id="phone-number"
    //                 autoComplete="tel"
    //                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //           <div className="sm:col-span-2">
    //             <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
    //               Message
    //             </label>
    //             <div className="mt-2.5">
    //               <textarea
    //                 name="message"
    //                 id="message"
    //                 rows={4}
    //                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                 defaultValue={''}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-8 flex justify-end">
    //           <button
    //             type="submit"
    //             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Send message
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="bg-[rgb(250_251_255)] dark:bg-gray-900 relative">
      <div
        className="h-[272px] bg-no-repeat bg-cover bg-center  flex items-center justify-center"
        style={{ backgroundImage: 'url("assets/images/hero-common.png")' }}
      >
        <div className="text-center">
          <h6 className="text-white text-[48px] font-semibold">Contact</h6>

        </div>
      </div>
      <div className="container mx-auto py-[100px]">
        <div className="max-w-[996px] w-full mx-auto">
          <div className="text-center mb-9">
            <h4 className="text-gray-900 dark:text-white mb-1">
              Quick Contact Address
            </h4>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {" "}
              NFTs are digital real estate and it is going to be worth a lot more
              than real estate.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-12">
            <div className="group px-6 py-8 bg-white dark:bg-dark rounded-lg outline outline-1 hover:outline-2 outline-[#E2E5F1] hover:outline-[#764AF1] dark:hover:outline-[#764AF1] dark:outline-gray-800 shadow-outline hover:shadow-hover">
              <svg
                className="w-8 h-8 fill-gray-700 dark:fill-gray-400
				group-hover:fill-primary-500"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.1281 6.38047C10.7918 5.83359 10.2395 5.5 9.61055 5.5H6.38945C5.76055 5.5 5.18305 5.83496 4.87188 6.38184L1.98984 11.424C1.91602 11.5566 1.875 11.7043 1.875 11.8574V13.375C1.875 13.8568 2.2682 14.25 2.75 14.25H13.25C13.7318 14.25 14.125 13.8568 14.125 13.375V11.8574C14.125 11.7036 14.084 11.5566 14.0088 11.4232L11.1281 6.38047ZM8 11.625C6.91309 11.625 6.03125 10.7432 6.03125 9.65625C6.03125 8.56934 6.91445 7.6875 8 7.6875C9.08555 7.6875 9.96875 8.56934 9.96875 9.65625C9.96875 10.7432 9.08828 11.625 8 11.625ZM14.8387 4.48828C12.9438 2.90234 10.4992 2 8 2C5.50078 2 3.05762 2.90234 1.16064 4.48828C1.05811 4.57305 1 4.70156 1 4.83281V6.375C1 6.61768 1.19482 6.8125 1.4375 6.8125H3.35512C3.51918 6.8125 3.67312 6.72021 3.74477 6.56982L4.5 4.625C5.59047 4.15332 6.77637 3.96875 8 3.96875C9.22363 3.96875 10.409 4.15469 11.5 4.625L12.2552 6.56969C12.3258 6.71953 12.4816 6.8125 12.6457 6.8125H14.5625C14.8059 6.8125 15 6.61836 15 6.375V4.83281C15 4.70156 14.9426 4.57305 14.8387 4.48828Z" />
              </svg>
              <h6 className="text-xl text-gray-900 dark:text-white group-hover:text-primary-500 mt-[10px] mb-3">
                {" "}
                Contact Numbers{" "}
              </h6>
              <div className="flex items-center pb-1">
                <svg
                  className="w-[14px] h-[14px] fill-gray-700
						dark:fill-gray-400"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.2402 9.30156L9.75711 8.66582C9.58236 8.59019 9.37703 8.64104 9.25836 8.78843L8.65625 9.52425C7.70934 9.05941 6.93988 8.28995 6.47504 7.34359L7.2125 6.71758C7.35947 6.59751 7.40968 6.3941 7.33533 6.21938L6.69844 4.75977C6.61641 4.56836 6.40859 4.46445 6.20898 4.51094L4.83086 4.82812C4.61211 4.87461 4.47539 5.04414 4.47539 5.24375C4.47539 8.6918 7.28086 11.5 10.7289 11.5C10.9295 11.5 11.1008 11.3637 11.1456 11.1689L11.4634 9.79102C11.5355 9.59141 11.4316 9.38359 11.2402 9.30156ZM8 1C4.13359 1 1 4.13359 1 8C1 11.8664 4.13359 15 8 15C11.8664 15 15 11.8664 15 8C15 4.13359 11.8664 1 8 1ZM8 13.6875C4.86367 13.6875 2.3125 11.1361 2.3125 8C2.3125 4.86395 4.86367 2.3125 8 2.3125C11.1363 2.3125 13.6875 4.86395 13.6875 8C13.6875 11.1361 11.1363 13.6875 8 13.6875Z" />
                </svg>
                <small className="text-gray-700 dark:text-gray-400 ml-[6px]">
                  {" "}
                  +(123) 456 7890{" "}
                </small>
              </div>
              <div className="flex items-center pb-1">
                <svg
                  className="w-[14px] h-[14px] fill-gray-700
						dark:fill-gray-400"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.2402 9.30156L9.75711 8.66582C9.58236 8.59019 9.37703 8.64104 9.25836 8.78843L8.65625 9.52425C7.70934 9.05941 6.93988 8.28995 6.47504 7.34359L7.2125 6.71758C7.35947 6.59751 7.40968 6.3941 7.33533 6.21938L6.69844 4.75977C6.61641 4.56836 6.40859 4.46445 6.20898 4.51094L4.83086 4.82812C4.61211 4.87461 4.47539 5.04414 4.47539 5.24375C4.47539 8.6918 7.28086 11.5 10.7289 11.5C10.9295 11.5 11.1008 11.3637 11.1456 11.1689L11.4634 9.79102C11.5355 9.59141 11.4316 9.38359 11.2402 9.30156ZM8 1C4.13359 1 1 4.13359 1 8C1 11.8664 4.13359 15 8 15C11.8664 15 15 11.8664 15 8C15 4.13359 11.8664 1 8 1ZM8 13.6875C4.86367 13.6875 2.3125 11.1361 2.3125 8C2.3125 4.86395 4.86367 2.3125 8 2.3125C11.1363 2.3125 13.6875 4.86395 13.6875 8C13.6875 11.1361 11.1363 13.6875 8 13.6875Z" />
                </svg>
                <small className="text-gray-700 dark:text-gray-400 ml-[6px]">
                  {" "}
                  +(123) 098 7654{" "}
                </small>
              </div>
            </div>
            <div className="group px-6 py-8 bg-white dark:bg-dark rounded-lg outline outline-1 hover:outline-2 outline-[#E2E5F1] hover:outline-[#764AF1] dark:hover:outline-[#764AF1] dark:outline-gray-800 shadow-outline hover:shadow-hover">
              <svg
                className="w-8 h-8 fill-gray-700 dark:fill-gray-400
				group-hover:fill-primary-500"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.6875 3C14.4121 3 15 3.58762 15 4.3125C15 4.72539 14.8059 5.11367 14.475 5.3625L8.525 9.825C8.21328 10.0574 7.78672 10.0574 7.475 9.825L1.525 5.3625C1.1945 5.11367 1 4.72539 1 4.3125C1 3.58762 1.58762 3 2.3125 3H13.6875ZM6.95 10.525C7.57344 10.9926 8.42656 10.9926 9.05 10.525L15 6.0625V11.75C15 12.7152 14.2152 13.5 13.25 13.5H2.75C1.7834 13.5 1 12.7152 1 11.75V6.0625L6.95 10.525Z" />
              </svg>
              <h6 className="text-xl text-gray-900 dark:text-white group-hover:text-primary-500 mt-[10px] mb-3">
                {" "}
                Email Address{" "}
              </h6>
              <div className="flex items-center pb-1">
                <svg
                  className="w-[14px] h-[14px] fill-gray-700
						dark:fill-gray-400"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.7293 1.11446C14.5215 0.973474 14.2528 0.961498 14.033 1.08539L1.33174 8.30351C1.11452 8.4293 0.986214 8.66445 1.00118 8.91328C1.01615 9.16279 1.17181 9.3825 1.40244 9.47902L5.59842 11.2394V14.3429C5.59842 14.583 5.72972 14.8034 5.94056 14.9188C6.03901 14.9727 6.14576 15 6.23061 15C6.35422 15 6.47799 14.965 6.58616 14.8958L9.62982 12.9418L12.3275 14.0738C12.4092 14.108 12.4956 14.1251 12.582 14.1251C12.6936 14.1251 12.8048 14.0969 12.9044 14.0405C13.081 13.9414 13.2022 13.7654 13.2315 13.5652L14.9832 1.75274C15.0441 1.50422 14.9346 1.25629 14.7293 1.11446ZM11.1081 4.25937L5.98701 9.97148L3.14124 8.78477L11.1081 4.25937ZM6.88752 13.1406V11.7909L8.1589 12.3244L6.88752 13.1406ZM12.0798 12.5363L7.24608 10.5077L13.3936 3.68543L12.0798 12.5363Z" />
                </svg>
                <small className="text-gray-700 dark:text-gray-400 ml-[6px]">
                  {" "}
                  info@naw.io{" "}
                </small>
              </div>
              <div className="flex items-center pb-1">
                <svg
                  className="w-[14px] h-[14px] fill-gray-700
						dark:fill-gray-400"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.7293 1.11446C14.5215 0.973474 14.2528 0.961498 14.033 1.08539L1.33174 8.30351C1.11452 8.4293 0.986214 8.66445 1.00118 8.91328C1.01615 9.16279 1.17181 9.3825 1.40244 9.47902L5.59842 11.2394V14.3429C5.59842 14.583 5.72972 14.8034 5.94056 14.9188C6.03901 14.9727 6.14576 15 6.23061 15C6.35422 15 6.47799 14.965 6.58616 14.8958L9.62982 12.9418L12.3275 14.0738C12.4092 14.108 12.4956 14.1251 12.582 14.1251C12.6936 14.1251 12.8048 14.0969 12.9044 14.0405C13.081 13.9414 13.2022 13.7654 13.2315 13.5652L14.9832 1.75274C15.0441 1.50422 14.9346 1.25629 14.7293 1.11446ZM11.1081 4.25937L5.98701 9.97148L3.14124 8.78477L11.1081 4.25937ZM6.88752 13.1406V11.7909L8.1589 12.3244L6.88752 13.1406ZM12.0798 12.5363L7.24608 10.5077L13.3936 3.68543L12.0798 12.5363Z" />
                </svg>
                <small className="text-gray-700 dark:text-gray-400 ml-[6px]">
                  {" "}
                  support@naw.io{" "}
                </small>
              </div>
            </div>
            <div className="group px-6 py-8 bg-white dark:bg-dark rounded-lg outline outline-1 hover:outline-2 outline-[#E2E5F1] hover:outline-[#764AF1] dark:hover:outline-[#764AF1] dark:outline-gray-800 shadow-outline hover:shadow-hover">
              <svg
                className="w-8 h-8 fill-gray-700 dark:fill-gray-400
				group-hover:fill-primary-500"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.9167 4.91493C10.9167 6.24123 9.13993 8.60475 8.35972 9.55696C8.17257 9.81202 7.82743 9.81202 7.64028 9.55696C6.86007 8.60475 5.08333 6.24123 5.08333 4.91493C5.08333 3.30516 6.38854 2 8 2C9.61146 2 10.9167 3.30516 10.9167 4.91493ZM8 5.69225C8.53715 5.69225 8.97222 5.25744 8.97222 4.7206C8.97222 4.18401 8.53715 3.74896 8 3.74896C7.46285 3.74896 7.02778 4.18401 7.02778 4.7206C7.02778 5.25744 7.46285 5.69225 8 5.69225ZM11.3444 6.36754C11.3566 6.33839 11.3688 6.30924 11.3809 6.27766L14.2003 5.15056C14.5844 4.99752 15 5.2793 15 5.69225V12.2703C15 12.5083 14.8542 12.7221 14.633 12.812L11.1111 14.2184V6.86794C11.1962 6.70033 11.274 6.53515 11.3444 6.36754ZM4.65556 6.36754C4.72604 6.53515 4.80382 6.70033 4.88889 6.86794V12.9747L1.7999 14.2111C1.41684 14.3423 1 14.0824 1 13.6694V7.09141C1 6.85336 1.14523 6.61774 1.36677 6.54972L4.34444 5.35946C4.40278 5.70439 4.52187 6.0469 4.65556 6.36754ZM8.96736 10.0428C9.30521 9.64198 9.83507 8.95454 10.3333 8.19423V14.25L5.66667 12.9164V8.19423C6.16493 8.95454 6.69479 9.64198 7.03264 10.0428C7.5309 10.6865 8.4691 10.6865 8.96736 10.0428Z" />
              </svg>
              <h6 className="text-xl text-gray-900 dark:text-white group-hover:text-primary-500 mt-[10px] mb-3">
                {" "}
                Address{" "}
              </h6>
              <div className="flex items-center pb-1">
                <svg
                  className="w-[14px] h-[14px] fill-gray-700
						dark:fill-gray-400"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5 6.01557C10.5 7.4004 9.38125 8.52205 8 8.52205C6.61875 8.52205 5.5 7.4004 5.5 6.01557C5.5 4.63073 6.61875 3.50908 8 3.50908C9.38125 3.50908 10.5 4.63073 10.5 6.01557ZM8 5.01297C7.44687 5.01297 7 5.46101 7 6.01557C7 6.57013 7.44687 7.01816 8 7.01816C8.55313 7.01816 9 6.57013 9 6.01557C9 5.46101 8.55313 5.01297 8 5.01297ZM14 6.01557C14 8.7539 10.3437 13.629 8.74062 15.6405C8.35625 16.1198 7.64375 16.1198 7.25938 15.6405C5.62813 13.629 2 8.7539 2 6.01557C2 2.69322 4.68625 0 8 0C11.3125 0 14 2.69322 14 6.01557ZM8 1.50389C5.51562 1.50389 3.5 3.52475 3.5 6.01557C3.5 6.40407 3.64031 7.00563 3.97812 7.80771C4.30562 8.58472 4.77063 9.44319 5.30625 10.3111C6.19375 11.7586 7.225 13.1309 8 14.1522C8.775 13.1309 9.80625 11.7586 10.6938 10.3111C11.2281 9.44319 11.6938 8.58472 12.0219 7.80771C12.3594 7.00563 12.5 6.40407 12.5 6.01557C12.5 3.52475 10.4844 1.50389 8 1.50389Z" />
                </svg>
                <small className="text-gray-700 dark:text-gray-400 ml-[6px]">
                  {" "}
                  132, My St, Kingston, New York 12401.{" "}
                </small>
              </div>
              <div className="flex items-center pb-1">
                <svg
                  className="w-[14px] h-[14px] fill-gray-700
						dark:fill-gray-400"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5 6.01557C10.5 7.4004 9.38125 8.52205 8 8.52205C6.61875 8.52205 5.5 7.4004 5.5 6.01557C5.5 4.63073 6.61875 3.50908 8 3.50908C9.38125 3.50908 10.5 4.63073 10.5 6.01557ZM8 5.01297C7.44687 5.01297 7 5.46101 7 6.01557C7 6.57013 7.44687 7.01816 8 7.01816C8.55313 7.01816 9 6.57013 9 6.01557C9 5.46101 8.55313 5.01297 8 5.01297ZM14 6.01557C14 8.7539 10.3437 13.629 8.74062 15.6405C8.35625 16.1198 7.64375 16.1198 7.25938 15.6405C5.62813 13.629 2 8.7539 2 6.01557C2 2.69322 4.68625 0 8 0C11.3125 0 14 2.69322 14 6.01557ZM8 1.50389C5.51562 1.50389 3.5 3.52475 3.5 6.01557C3.5 6.40407 3.64031 7.00563 3.97812 7.80771C4.30562 8.58472 4.77063 9.44319 5.30625 10.3111C6.19375 11.7586 7.225 13.1309 8 14.1522C8.775 13.1309 9.80625 11.7586 10.6938 10.3111C11.2281 9.44319 11.6938 8.58472 12.0219 7.80771C12.3594 7.00563 12.5 6.40407 12.5 6.01557C12.5 3.52475 10.4844 1.50389 8 1.50389Z" />
                </svg>
                <small className="text-gray-700 dark:text-gray-400 ml-[6px]">
                  {" "}
                  417 Chatsworth Rd, Chesterfield, UK.{" "}
                </small>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center bg-white dark:bg-dark rounded-lg outline outline-1 outline-[#E2E5F1] dark:outline-gray-800 shadow-outline p-7">
            <form>
              <h6 className="text-[22px] text-gray-900 dark:text-white mb-4">
                {" "}
                Contact Us{" "}
              </h6>
              <div className="mb-5 relative w-full bg-white dark:bg-dark group rounded-md">
                <input
                  id="name2"
                  type="text"
                  name="name"
                  className="block p-4 rounded-md w-full text-xs font-normal text-gray-900 dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-600 bg-transparent outline  outline-[#E2E5F1] ring-0 focus:ring-0 focus:shadow-none dark:outline-gray-700 appearance-none focus:outline-[#764AF1] outline-1 dark:focus:outline-[#764AF1] peer"
                  placeholder=" "
                  onfocus="this.placeholder='Type here'"
                  onblur="this.placeholder=' '"
                  required=""
                />
                <label
                  htmlFor="name2"
                  className="ml-[14px] z-[1] flex items-center px-1 rounded-[3px] peer-focus:font-medium absolute bg-white dark:bg-dark text-xs font-normal text-gray-700 dark:text-gray-600 duration-300 transform -translate-y-[20px] scale-75 top-3 peer-focus:z-10 origin-[0] peer peer-disabled:bg-green-500 peer-focus:left-0 peer-focus:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[4.5px] peer-focus:scale-75 peer-focus:-translate-y-[20px]"
                >
                  {" "}
                  Name{" "}
                </label>
              </div>
              <div className="mb-5 relative w-full bg-white dark:bg-dark group rounded-md">
                <input
                  id="username"
                  type="text"
                  name="username"
                  className="block p-4 rounded-md w-full text-xs font-normal text-gray-900 dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-600 bg-transparent outline  outline-[#E2E5F1] ring-0 focus:ring-0 focus:shadow-none dark:outline-gray-700 appearance-none focus:outline-[#764AF1] outline-1 dark:focus:outline-[#764AF1] peer"
                  placeholder=" "
                  onfocus="this.placeholder='Type username'"
                  onblur="this.placeholder=' '"
                  required=""
                />
                <label
                  htmlFor="username"
                  className="ml-[14px] z-[1] flex items-center px-1 rounded-[3px] peer-focus:font-medium absolute bg-white dark:bg-dark text-xs font-normal text-gray-700 dark:text-gray-600 duration-300 transform -translate-y-[20px] scale-75 top-3 peer-focus:z-10 origin-[0] peer peer-disabled:bg-green-500 peer-focus:left-0 peer-focus:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[4.5px] peer-focus:scale-75 peer-focus:-translate-y-[20px]"
                >
                  {" "}
                  Username{" "}
                </label>
              </div>
              <div className="mb-5 relative w-full bg-white dark:bg-dark group rounded-md">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="block p-4 rounded-md w-full text-xs font-normal text-gray-900 dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-600 bg-transparent outline  outline-[#E2E5F1] ring-0 focus:ring-0 focus:shadow-none dark:outline-gray-700 appearance-none focus:outline-[#764AF1] outline-1 dark:focus:outline-[#764AF1] peer"
                  placeholder=" "
                  onfocus="this.placeholder='Type your email'"
                  onblur="this.placeholder=' '"
                  required=""
                />
                <label
                  htmlFor="email"
                  className="ml-[14px] z-[1] flex items-center px-1 rounded-[3px] peer-focus:font-medium absolute bg-white dark:bg-dark text-xs font-normal text-gray-700 dark:text-gray-600 duration-300 transform -translate-y-[20px] scale-75 top-3 peer-focus:z-10 origin-[0] peer peer-disabled:bg-green-500 peer-focus:left-0 peer-focus:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[4.5px] peer-focus:scale-75 peer-focus:-translate-y-[20px]"
                >
                  {" "}
                  Email{" "}
                </label>
              </div>
              <div className="mb-6 relative w-full bg-white dark:bg-dark group rounded-md">
                <textarea
                  rows={6}
                  id="description"
                  name="description"
                  className="block p-4 rounded-md w-full text-xs font-normal text-gray-900 dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-600 bg-transparent outline  outline-[#E2E5F1] ring-0 focus:ring-0 focus:shadow-none dark:outline-gray-700 appearance-none focus:outline-[#764AF1] outline-1 dark:focus:outline-[#764AF1] peer"
                  placeholder=" "
                  onfocus="this.placeholder='Type description'"
                  onblur="this.placeholder=' '"
                  required=""
                  defaultValue={""}
                />
                <label
                  htmlFor="description"
                  className="ml-[14px] z-[1] flex items-center px-1 rounded-[3px] peer-focus:font-medium absolute bg-white dark:bg-dark text-xs font-normal text-gray-700 dark:text-gray-600 duration-300 transform -translate-y-[20px] scale-75 top-3 peer-focus:z-10 origin-[0] peer peer-disabled:bg-green-500 peer-focus:left-0 peer-focus:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[4.5px] peer-focus:scale-75 peer-focus:-translate-y-[20px]"
                >
                  {" "}
                  Description{" "}
                </label>
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-md font-medium text-base flex items-center justify-center bg-[rgb(118_74_241)] text-white hover:bg-primary-600 transition-colors duration-200 mr-4"
              >
                {" "}
                Send Message{" "}
              </button>
            </form>
            <div className="my-7 md:my-0">

              <img
                className="w-full block "
                src="assets/images/contact-light.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs