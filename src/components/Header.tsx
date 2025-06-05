'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt, FaRegCalendarTimes } from 'react-icons/fa';
import { MdVideoCameraFront } from 'react-icons/md';
import { SiMicrodotblog } from 'react-icons/si';
import Image from 'next/image';
import { clsx } from 'clsx';

const navItems = [
  { href: '/', icon: FaHome, label: 'Home' },
  { href: '/about', icon: FaInfoCircle, label: 'About' },
  { href: '/services', icon: FaServicestack, label: 'Services' },
  { href: '/schedules', icon: FaRegCalendarTimes, label: 'Schedule' },
  { href: '/blogs', icon: SiMicrodotblog, label: 'Blog' },
  { href: '/videos', icon: MdVideoCameraFront, label: 'Videos' },
  { href: '/contact', icon: FaPhoneAlt, label: 'Contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Glassmorphism Header */}
      <motion.header
        style={{
          backdropFilter: `blur(${headerBlur}px)`,
          opacity: headerOpacity,
        }}
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled 
            ? "bg-gradient-to-r from-sky-50/80 via-blue-50/80 to-cyan-50/80 shadow-2xl border-b border-sky-200/30" 
            : "bg-gradient-to-r from-sky-100/60 via-blue-100/60 to-cyan-100/60 shadow-lg"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-blue-400/10 to-cyan-400/10"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(56,189,248,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(34,211,238,0.1) 100%)",
              "linear-gradient(90deg, rgba(34,211,238,0.1) 0%, rgba(56,189,248,0.1) 50%, rgba(59,130,246,0.1) 100%)",
              "linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(34,211,238,0.1) 50%, rgba(56,189,248,0.1) 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto flex justify-between items-center p-4 md:px-8 relative z-10">
          {/* Enhanced Logo Section */}
          <Link href="/" className="group flex items-center space-x-4">
            <motion.div
              style={{ scale: logoScale }}
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Glow Ring */}
              <motion.div
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-30 blur-md"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Logo with Premium Border */}
              <motion.div
                className="relative p-1 rounded-full bg-gradient-to-r from-sky-200 to-blue-200"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/img/logo.png"
                  alt="Kuaid Logo"
                  width={48}
                  height={48}
                  className="rounded-full bg-white p-1 shadow-lg"
                />
              </motion.div>
            </motion.div>
            
            {/* Brand Text with Typewriter Effect */}
            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.h1
                className="text-2xl font-extrabold bg-gradient-to-r from-sky-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Kuaid
              </motion.h1>
              <motion.p
                className="text-xs font-semibold text-sky-600 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                PREMIUM CARGO SOLUTIONS
              </motion.p>
            </motion.div>
          </Link>

          {/* Desktop Navigation with Magnetic Effect */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(({ href, icon: Icon, label }, index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={href}>
                  <motion.div
                    className={clsx(
                      "group relative flex items-center space-x-2 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer",
                      activeItem === href
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg"
                        : "text-slate-700 hover:text-sky-600"
                    )}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setActiveItem(href)}
                    onHoverEnd={() => setActiveItem('/')}
                  >
                    {/* Hover Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-sky-100 via-blue-100 to-cyan-100 rounded-2xl opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating Particles */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      whileHover="hover"
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-sky-400 rounded-full opacity-0"
                          variants={{
                            hover: {
                              opacity: [0, 1, 0],
                              y: [0, -20],
                              x: [0, Math.random() * 20 - 10],
                            }
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                          style={{
                            left: `${20 + i * 30}%`,
                            bottom: "20%"
                          }}
                        />
                      ))}
                    </motion.div>
                    
                    <Icon className="relative z-10 text-sm" />
                    <span className="relative z-10 text-sm font-semibold tracking-wide">{label}</span>
                    
                    {/* Magnetic Orb */}
                    <motion.div
                      className="absolute -right-1 -top-1 w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-0"
                      whileHover={{ 
                        opacity: 1,
                        scale: [1, 1.5, 1],
                      }}
                      transition={{ 
                        scale: { duration: 1, repeat: Infinity },
                        opacity: { duration: 0.3 }
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Futuristic Mobile Menu Button */}
          <motion.button
            className="md:hidden relative p-3 rounded-2xl bg-gradient-to-r from-sky-100 to-blue-100 text-slate-700 shadow-lg"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </motion.div>
            
            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-sky-400 opacity-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-sky-200/50 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -50 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              {/* Menu Header */}
              <div className="p-6 bg-gradient-to-r from-sky-50 to-blue-50 border-b border-sky-200/30">
                <h3 className="text-lg font-bold text-slate-700">Navigation</h3>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
              </div>
              
              {/* Menu Items */}
              <nav className="p-4">
                {navItems.map(({ href, icon: Icon, label }, index) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Link href={href} onClick={toggleMenu}>
                      <motion.div
                        className="group flex items-center space-x-4 p-4 rounded-2xl mb-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 border-l-4 border-transparent hover:border-sky-400"
                        whileHover={{ x: 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="p-2 rounded-xl bg-gradient-to-r from-sky-100 to-blue-100 text-sky-600 group-hover:from-sky-200 group-hover:to-blue-200"
                          whileHover={{ rotate: 5 }}
                        >
                          <Icon className="text-lg" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <span className="font-semibold text-slate-700 group-hover:text-sky-700">
                            {label}
                          </span>
                        </div>
                        
                        <motion.div
                          className="w-2 h-2 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100"
                          whileHover={{ scale: 1.5 }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              {/* Menu Footer */}
              <div className="p-6 bg-gradient-to-r from-sky-50 to-blue-50 border-t border-sky-200/30">
                <motion.div
                  className="flex items-center justify-center space-x-2 text-sm text-sky-600"
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-sky-400 rounded-full" />
                  <span className="font-medium">Premium Navigation</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
