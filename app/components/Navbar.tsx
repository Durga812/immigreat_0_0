'use client'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <a href="/" className="flex items-center py-5 px-2 text-gray-700">
                <Image src='/image.png' alt="Company Logo" width={230} height={70} />
              </a>
            </div>
          </div>
          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/case_status" className="py-5 px-3 text-xl  text-gray-800 hover:text-gray-900">Check Case Status</Link>
            <Link href="/services" className="py-5 px-3 text-xl  text-gray-800 hover:text-gray-900">Services</Link>
            <Link href="#contact-us" className="py-5 px-3 text-xl  text-gray-800 hover:text-gray-900">Contact Us</Link>
          </div>
          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="/case_status" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Check Case Status</a>
        <a href="/services" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Services</a>
        <a href="#contact-us" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;