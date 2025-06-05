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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isKuaidRotating, setIsKuaidRotating] = useState(false);
  const [isCargoRotating, setIsCargoRotating] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const kuaidRef = useRef<HTMLDivElement>(null);
  const cargoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-sky-100' 
        : 'bg-gradient-to-r from-sky-50 via-blue-50 to-cyan-50 shadow-md'
    }`}>
      <div className="container mx-auto flex justify-between items-center p-4 md:px-8">
        <Link href="/" className="relative group flex items-center space-x-3">
          {/* Enhanced Logo with Glow Effect */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
            <Image
              src="/img/logo.png"
              alt="Kuaid Logo"
              width={50}
              height={50}
              className="relative animate-zoom-fade rounded-full ring-2 ring-sky-200 group-hover:ring-sky-300 transition-all duration-300"
            />
          </div>
          
          {/* Company Name */}
          <div className="hidden sm:block">
            <h1 className={`text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent transition-colors duration-300 ${
              isScrolled ? 'from-sky-700 to-blue-800' : ''
            }`}>
              Kuaid
            </h1>
            <p className="text-xs text-sky-500 font-medium">Cargo Solutions</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {[
            { href: '/', icon: FaHome, label: 'Home' },
            { href: '/about', icon: FaInfoCircle, label: 'About' },
            { href: '/services', icon: FaServicestack, label: 'Services' },
            { href: '/schedules', icon: FaRegCalendarTimes, label: 'Schedule' },
            { href: '/blogs', icon: SiMicrodotblog, label: 'Blog' },
            { href: '/videos', icon: MdVideoCameraFront, label: 'Videos' },
            { href: '/contact', icon: FaPhoneAlt, label: 'Contact' }
          ].map(({ href, icon: Icon, label }) => (
            <Link 
              key={href}
              href={href} 
              className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                  : 'text-slate-600 hover:text-sky-700 hover:bg-white/60'
              }`}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon and Text */}
              <Icon className="relative z-10 text-sm group-hover:scale-110 transition-transform duration-200" />
              <span className="relative z-10 text-sm font-medium">{label}</span>
              
              {/* Underline Effect */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden relative p-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'text-slate-700 hover:bg-sky-50'
              : 'text-slate-600 hover:bg-white/60'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative">
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 transform ${
        isOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-lg">
          <nav className="container mx-auto py-4">
            {[
              { href: '/', icon: FaHome, label: 'Home' },
              { href: '/about', icon: FaInfoCircle, label: 'About' },
              { href: '/services', icon: FaServicestack, label: 'Services' },
              { href: '/schedules', icon: FaRegCalendarTimes, label: 'Ship Schedule' },
              { href: '/blogs', icon: SiMicrodotblog, label: 'Blog' },
              { href: '/videos', icon: MdVideoCameraFront, label: 'Videos' },
              { href: '/contact', icon: FaPhoneAlt, label: 'Contact' }
            ].map(({ href, icon: Icon, label }, index) => (
              <Link 
                key={href}
                href={href} 
                onClick={toggleMenu} 
                className="group flex items-center space-x-3 px-6 py-3 text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200 border-l-4 border-transparent hover:border-sky-400"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                <Icon className="text-lg group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{label}</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes zoom-fade {
          0%, 100% { 
            transform: scale(1); 
            opacity: 1; 
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.8; 
          }
        }
        
        .animate-zoom-fade {
          animation: zoom-fade 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}
