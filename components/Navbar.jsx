import React, { useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

function Navbar() {
  let [menu, setMenu] = useState(false);
  var router = useRouter();

  return (
    <>
      <nav className="w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-sm">
        <div className="w-full text-center p-2 bg-sky-300 text-sm text-white">
          Expand Your Shopping Journey With Our Amazing Products 
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 bg-white">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/logo.png" className="h-12" alt="Azibella Logo" />
            <span className="self-center text-lg font-semibold whitespace-nowrap text-black">Aziibella Surgical</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button onClick={()=>{
              router.push("/Cart")
            }} type="button" className="p-3 text-black text-lg font-medium rounded-lg mx-1 py-1 text-center hover:text-sky-400">
              <FaShoppingCart/>
            </button>
            <button onClick={()=>{
              router.push("/Login")
            }} type="button" className="text-black text-lg font-medium rounded-lg mx-1 py-1 text-center hover:text-sky-400">
              <FaUser/>
            </button>
            <button
            onClick={()=>{
              setMenu(!menu)
            }}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center ${menu ? "block" : "hidden"} justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-2 md:p-0 mt-2 font-medium border border-gray-100 rounded-lg bg-white md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
              <li>
                <Link href="/" className="block py-1 px-2 text-black rounded md:bg-transparent md:text-black md:p-0 hover:text-sky-400" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Products?p=All" className="block py-1 px-2 text-black rounded md:bg-transparent md:text-black md:p-0 hover:text-sky-400 dark:text-black dark:hover:bg-gray-700 dark:hover:text-sky-400 md:dark:hover:bg-transparent dark:border-gray-700">
                  Products
                </Link>
              </li>
             
              <li>
                <Link href="/Contact" className="block py-1 px-2 text-black rounded md:bg-transparent md:text-black md:p-0 hover:text-sky-400 dark:text-black dark:hover:bg-gray-700 dark:hover:text-sky-400 md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/About" className="block py-1 px-2 text-black rounded md:bg-transparent md:text-black md:p-0 hover:text-sky-400" aria-current="page">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
