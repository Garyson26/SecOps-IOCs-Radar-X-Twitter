import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
const faqs = [
    {
        question: "What is Sell on WIESTELLl or SOA?",
        answer:
            "Sell on WIESTELLl is a program that enables you to list and sell your product on Wiestell.",
    },
    {
        question: "How does selling on Wiestell work?",
        answer:
            "Sell on WIESTELLl is a program that enables you to list and sell your product on Wiestell.",
    },
    {
        question: "What products can I sell on Wiestell?",
        answer:
            "Sell on WIESTELLl is a program that enables you to list and sell your product on Wiestell.",
    },
    {
        question: "What do I need to register as a seller on Wiestell?",
        answer:
            "Sell on WIESTELLl is a program that enables you to list and sell your product on Wiestell.",
    },
    {
        question: "I don’t have a website, can I still sell on Wiestell?",
        answer:
            "Sell on WIESTELLl is a program that enables you to list and sell your product on Wiestell.",
    },
    {
        question: "Who takes care of shipping?",
        answer:
            "Sell on WIESTELLl is a program that enables you to list and sell your product on Wiestell.",
    },
    {
        question: "Who takes care of packaging? If I take care of packaging, where do I get the packaging material from?",
        answer:
            "Sell on WIESTELLl is a program that enables you to list and sell your product on Wiestell.",
    },
    {
        question: "If I list my products using Sell on WIESTELLl, will the customer know that he or she is purchasing from me on Wiestell marketplace?",
        answer:
            "Sell on WIESTELLl is a program that enables you to list and sell your product on Wiestell.",
    },
    {
        question: "What is a Offer Display?",
        answer:
            "Sell on WIESTELLl is a program that enables you to list and sell your product on Wiestell.",
    },
    {
        question: "What is Prime badge?",
        answer:
            "Sell on WIESTELLl is a program that enables you to list and sell your product on Wiestell.",
    },
    // More questions...
]
const Faqs = () => {
    return (
        <div>

            <div className="bg-white">
            <div
                        className="h-[272px] bg-no-repeat bg-cover bg-center  flex items-center justify-center"
                        style={{ backgroundImage: 'url("assets/images/hero-common.png")' }}
                    >
                        <div className="text-center">
                            <h6 className="text-white text-[48px] font-semibold">Faqs</h6>

                        </div>
                    </div>
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                  
                    <div className='text-center mb-6'>
                        <h4 className='text-[20px] '>Get answers to the frequently asked questions from sellers about Selling on Wiestell</h4>
                    </div>
                    <div className="mx-auto mb-12 max-w-4xl divide-y divide-gray-900/10">
                        <h2 className="text-2xl font-bold leading-10  text-gray-900">General</h2>
                        <dl className="mt-8 space-y-6 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                    <span className="text-base font-medium leading-7">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        {open ? (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-[13px] font-[300] leading-7 text-gray-600">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                    <div className="mx-auto  mb-12  max-w-4xl divide-y divide-gray-900/10">
                        <h2 className="text-2xl font-bold leading-10  text-gray-900">Fees and Charges</h2>
                        <dl className="mt-8 space-y-6 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                    <span className="text-base font-medium leading-7">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        {open ? (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-[13px] font-[300] leading-7 text-gray-600">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                    <div className="mx-auto  mb-12  max-w-4xl divide-y divide-gray-900/10">
                        <h2 className="text-2xl font-bold leading-10  text-gray-900">Managing your Account</h2>
                        <dl className="mt-8 space-y-6 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                    <span className="text-base font-medium leading-7">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        {open ? (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-[13px] font-[300] leading-7 text-gray-600">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                    <div className="mx-auto  mb-12  max-w-4xl divide-y divide-gray-900/10">
                        <h2 className="text-2xl font-bold leading-10  text-gray-900">Services</h2>
                        <dl className="mt-8 space-y-6 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                    <span className="text-base font-medium leading-7">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        {open ? (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-[13px] font-[300] leading-7 text-gray-600">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
