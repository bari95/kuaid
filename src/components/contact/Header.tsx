'use client';

import React, { useState } from 'react';
import { FaHeadphones, FaHome, FaInfoCircle, FaPhoneAlt, FaServicestack, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-300 w-full shadow-lg border-t-4 border-blue-500 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-white">
          <h2 className="text-2xl font-semibold bg-blue-500 p-2 rounded-lg">Kuaid</h2>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-yellow-300 transition duration-300">Home</Link>
          <Link href="/about" className="text-white hover:text-yellow-300 transition duration-300">About</Link>
          <Link href="/services" className="text-white hover:text-yellow-300 transition duration-300">Services</Link>
          <Link href="/contact" className="text-yellow-300 font-semibold">Contact</Link>
          <div className="flex items-center text-white">
            <FaHeadphones className="text-yellow-300 mr-2" />+012 345 6789
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-r from-blue-500 to-blue-300 w-full shadow-lg absolute top-16 left-0 z-30">
          <nav className="flex flex-col space-y-4 py-6 px-4">
            <Link href="/" onClick={toggleMenu} className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300">
              <FaHome />
              <span>Home</span>
            </Link>
            <Link href="/about" onClick={toggleMenu} className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300">
              <FaInfoCircle />
              <span>About</span>
            </Link>
            <Link href="/services" onClick={toggleMenu} className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300">
              <FaServicestack />
              <span>Services</span>
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="flex items-center space-x-2 text-yellow-300 font-semibold">
              <FaPhoneAlt />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
