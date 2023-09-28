import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const footerNavigation = {
    services: [
      { name: 'Fulfillment Services', href: '#' },
      { name: 'Account Management', href: '#' },
      { name: 'Partner Services', href: '#' },
      { name: 'Packaging Services', href: '#' },
     
    ],
    resources: [
      { name: 'Online Selling Guide', href: '#' },
      { name: 'Products in Demand', href: '#' },
      { name: 'Success Stories', href: '#' },
      { name: 'Seller Learning Center', href: '#' },
      { name: 'News', href: '#' },
      { name: 'API Documentation', href: '#' },
    ],
    account: [
      { name: 'General', href: '#' },
      { name: 'Fees and Charges', href: '#' },
      { name: 'Managing your Account', href: '#' },
    ],
    contact: [
      { name: 'demo@support.com', href: '#' },
    
    ],
    terms: [
        { name: 'Terms of Usage', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'About us', href: '/aboutus' },
      
      ],
  }

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-100 ">
    <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">  
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 py-8 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Services</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.services.map((item) => (
                  <li key={item.name} className="text-sm">
                    <Link href={item.href} className="text-gray-500 hover:text-gray-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Resources</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name} className="text-sm">
                    <Link href={item.href} className="text-gray-500 hover:text-gray-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">FAQs</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.account.map((item) => (
                  <li key={item.name} className="text-sm">
                    <Link href={item.href} className="text-gray-500 hover:text-gray-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Contact Us</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.contact.map((item) => (
                  <li key={item.name} className="text-sm">
                    <Link href={item.href} className="text-gray-500 hover:text-gray-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Terms & Policy</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.terms.map((item) => (
                  <li key={item.name} className="text-sm">
                    <Link href={item.href} className="text-gray-500 hover:text-gray-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
       
        </div>
      <div className="border-t border-gray-200 py-10">
        <p className="text-sm text-gray-500">COPYRIGHT &copy; 2023, Wiestell Ltd.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
