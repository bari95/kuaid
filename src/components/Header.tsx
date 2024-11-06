'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt, FaRegCalendarTimes } from 'react-icons/fa';
import { MdVerified, MdVideoCameraFront } from 'react-icons/md';
import { SiMicrodotblog } from 'react-icons/si';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isKuaidRotating, setIsKuaidRotating] = useState(false);
  const [isCargoRotating, setIsCargoRotating] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const kuaidRef = useRef<HTMLDivElement>(null);
  const cargoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rotationTimeout: ReturnType<typeof setTimeout>;

    const triggerRotation = () => {
      setIsKuaidRotating(true);
      setIsCargoRotating(true);

      if (kuaidRef.current) {
        kuaidRef.current.classList.remove('animate-rotate-pause-reverse');
        void kuaidRef.current.offsetWidth;
        kuaidRef.current.classList.add('animate-rotate-pause-reverse');
      }
      if (cargoRef.current) {
        cargoRef.current.classList.remove('animate-rotate-pause');
        void cargoRef.current.offsetWidth;
        cargoRef.current.classList.add('animate-rotate-pause');
      }

      // Stop rotation after 4 seconds
      setTimeout(() => {
        setIsKuaidRotating(false);
        setIsCargoRotating(false);
      }, 4000);

      // Set up next rotation after 7 seconds
      rotationTimeout = setTimeout(triggerRotation, 7000);
    };

    // Start initial rotation
    triggerRotation();

    // Clean up timeouts on component unmount
    return () => clearTimeout(rotationTimeout);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white to-blue-300 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4 md:px-8">
      <Link href="/" className="relative group flex items-center space-x-2">
          {/* Logo with Smooth Zooming and Fading Animation */}
          <Image
            src="/img/logo.png"
            alt="Kuaid Logo"
            width={50}
            height={50}
            className="animate-zoom-fade" // Apply custom animation
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="flex items-center space-x-1  hover:text-yellow-300 transition duration-300">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-1  hover:text-yellow-300 transition duration-300">
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link href="/services" className="flex items-center space-x-1 hover:text-yellow-300 transition duration-300">
            <FaServicestack />
            <span>Services</span>
          </Link>
          <Link href="/schedules" className="flex items-center space-x-1 hover:text-yellow-300 transition duration-300">
            <FaRegCalendarTimes />
            <span>Ship schedule</span>
          </Link>
          <Link href="/blogs" className="flex items-center space-x-1 hover:text-yellow-300 transition duration-300">
            <SiMicrodotblog />
            <span>Blog</span>
          </Link>
          <Link href="/videos" className="flex items-center space-x-1  hover:text-yellow-300 transition duration-300">
            <MdVideoCameraFront />
            <span>Videos</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-1  hover:text-yellow-300 transition duration-300">
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
