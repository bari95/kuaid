'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt, FaRegCalendarTimes } from 'react-icons/fa';
import { MdVerified, MdVideoCameraFront } from 'react-icons/md';
import { SiMicrodotblog } from 'react-icons/si';
import { BsPhoneVibrateFill } from 'react-icons/bs';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rotationTimeout: ReturnType<typeof setTimeout>;

    const triggerRotation = () => {
      if (titleRef.current) {
        setIsRotating(true); // Start rotation
        titleRef.current.classList.remove('animate-rotate-pause');
        void titleRef.current.offsetWidth; // Trigger reflow to restart animation
        titleRef.current.classList.add('animate-rotate-pause');

        // Pause rotation and display icon after 4 seconds
        setTimeout(() => setIsRotating(false), 4000);

        // Set up next rotation after 3 seconds + animation duration
        rotationTimeout = setTimeout(triggerRotation, 7000); // Adjust timing to match desired pause + animation
      }
    };

    // Start initial rotation
    triggerRotation();

    // Clean up timeouts on component unmount
    return () => clearTimeout(rotationTimeout);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-300 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4 md:px-8">
      <div ref={titleRef} className="text-2xl text-white flex items-center relative">
  <Link href="/" className="hover:text-yellow-300 relative">
    Kuaid
    {/* Display the verified icon when rotation stops */}
    {!isRotating && (
      <MdVerified className="absolute top-1/2 transform -translate-y-1/2 left-full ml-1 text-white" />
    )}
  </Link>
</div>
<div className="flex items-center text-white">
            <BsPhoneVibrateFill size={24} className=" mr-2" />+255 745 787 370
          </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="flex items-center space-x-1 text-white hover:text-yellow-300 transition duration-300">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-1 text-white hover:text-yellow-300 transition duration-300">
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link href="/services" className="flex items-center space-x-1 text-white hover:text-yellow-300 transition duration-300">
            <FaServicestack />
            <span>Services</span>
          </Link>

          <Link href="/schedules" className="flex items-center space-x-1 text-white hover:text-yellow-300 transition duration-300">
            <FaRegCalendarTimes />
            <span>Ship schedule</span>
          </Link>
          <Link href="/blogs" className="flex items-center space-x-1 text-white hover:text-yellow-300 transition duration-300">
            <SiMicrodotblog />
            <span>Blog</span>
          </Link>
          <Link href="/videos" className="flex items-center space-x-1 text-white hover:text-yellow-300 transition duration-300">
            <MdVideoCameraFront />
            <span>Videos</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-1 text-white hover:text-yellow-300 transition duration-300">
            <FaPhoneAlt />
            <span>Contact</span>
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-blue-300 w-full shadow-lg absolute top-16 left-0 transition-transform duration-300">
          <nav className="flex flex-col space-y-2 py-4">
            <Link href="/" onClick={toggleMenu} className="flex items-center space-x-1 px-4 py-2 text-white hover:text-yellow-300 transition duration-300">
              <FaHome />
              <span>Home</span>
            </Link>
            <Link href="/about" onClick={toggleMenu} className="flex items-center space-x-1 px-4 py-2 text-white hover:text-yellow-300 transition duration-300">
              <FaInfoCircle />
              <span>About</span>
            </Link>
            <Link href="/services" onClick={toggleMenu} className="flex items-center space-x-1 px-4 py-2 text-white hover:text-yellow-300 transition duration-300">
              <FaServicestack />
              <span>Services</span>
            </Link>

            <Link href="/schedules" onClick={toggleMenu} className="flex items-center space-x-1 px-4 py-2 text-white hover:text-yellow-300 transition duration-300">
              <FaRegCalendarTimes />
              <span>Ship schedule</span>
            </Link>

            <Link href="/blogs" onClick={toggleMenu} className="flex items-center space-x-1 px-4 py-2 text-white hover:text-yellow-300 transition duration-300">
              <SiMicrodotblog />
              <span>Blog</span>
            </Link>

            <Link href="/videos" onClick={toggleMenu} className="flex items-center space-x-1 px-4 py-2 text-white hover:text-yellow-300 transition duration-300">
              <MdVideoCameraFront />
              <span>Video</span>
            </Link>
            
            <Link href="/contact" onClick={toggleMenu} className="flex items-center space-x-1 px-4 py-2 text-white hover:text-yellow-300 transition duration-300">
              <FaPhoneAlt />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
