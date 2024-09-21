"use client";
import Image from 'next/image';

import React, { useState } from 'react';
import Link from 'next/link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div  
    className=" w-full shadow-md bg-gray-900 text-white fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between p-4">
        <div className="navbar-brand flex items-center">
          <Link href="/" className="flex items-center">
            <Image alt="logo" src="/logocc1.png" width={80} height={80} />
            <h1 className="text-2xl text-white  font-bold">ACEHub</h1>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
  <ul
          className={`lg:flex lg:items-center lg:space-x-4 lg:space-y-0 space-y-4 lg:pt-0 pt-6 fixed inset-0 bg-gray-900 lg:bg-transparent lg:relative lg:flex-row lg:top-auto lg:left-auto top-16 left-0 w-full lg:w-auto transition-transform transform ${
           isOpen ? 'translate-x-0' : '-translate-x-full'
          } z-40`} >
        
          <li className="px-4 py-2 lg:px-2">
            <Link href="/event" className="hover:bg-gray-800 hover:p-2 hover:rounded transition text-white">
              Events
            </Link>
          </li>
          <li className="px-4 py-2 lg:px-2">
            <Link href="/services" className="hover:bg-gray-800 hover:p-2 hover:rounded transition text-white">
              Services
            </Link>
          </li>
          <li className="px-4 py-2 lg:px-2">
            <Link href="/about" className="hover:bg-gray-800 hover:p-2 hover:rounded transition text-white">
              About
            </Link>
          </li>
          <li className="px-4 py-2 lg:px-2">
            <Link href="/blogs" className="hover:bg-gray-800 hover:p-2 hover:rounded transition text-white">
              Blogs
            </Link>
          </li>
          <li className="px-4 py-2 lg:px-2">
            <Link
              href="/login"
              className="group relative inline-block text-sm font-medium text-white focus:outline-none active:text-indigo-500"
            >
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 hover:border-indigo-500"></span>
              <span className="relative block border border-current bg-gray-800 px-3 py-2">Log In</span>
            </Link>
          </li>
          <li className="px-4 py-2 lg:px-2">
            <Link
              href="/signup"
              className="group relative inline-block text-sm font-medium text-white focus:outline-none active:text-indigo-500"
            >
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 hover:border-indigo-500"></span>
              <span className="relative block border border-current bg-gray-800 px-3 py-2">Sign up</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
    
