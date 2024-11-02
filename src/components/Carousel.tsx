// components/Carousel.js

'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Fade,  AttentionSeeker } from "react-awesome-reveal";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { Roboto } from "next/font/google";
import {  Merriweather } from "next/font/google"; // Import fonts from next/font

// Load fonts

const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"] });

const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });


const slides = [
  {
    title: "#1 Place For Your Logistics Solution",
    description: "Providing innovative solutions for your transport and logistics needs. Experience seamless service and efficiency.",
    imgSrc: "/img/carousel-1.jpg",
  },
  {
    title: "#1 Place For Your Transport Solution",
    description: "Expert logistics services designed to meet the challenges of today’s fast-paced world. Let us handle your transport needs.",
    imgSrc: "/img/carousel-2.jpg",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden h-96 sm:h-[70vh] md:h-[80vh] lg:h-[85vh] carousel">
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full relative"
            style={{ minWidth: "100%", backgroundImage: `url(${slide.imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
              <div className="text-center text-white px-4 max-w-lg mx-auto">
                <Fade direction="down" triggerOnce>
                  <h5 className={`${roboto.className} uppercase text-md md:text-lg mb-4 tracking-wide`}>
                    Logistics & Transport Solutions
                  </h5>
                </Fade>
                <Fade delay={300} direction="down">
                  <h1 className={`${merriweather.className} text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-blue-500`}>
                    {slide.title}
                  </h1>
                </Fade>
                <Fade delay={600} direction="up">
                  <p className={`${merriweather.className} text-md sm:text-md lg:text-lg mb-6`}>
                    {slide.description}
                  </p>
                </Fade>
                <div className="space-x-2 sm:space-x-4">
                  <AttentionSeeker effect="pulse" delay={900}>
                    <Link href="/about" className="px-3 sm:px-4 lg:px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
                      Read More
                    </Link>
                  </AttentionSeeker>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={handleNext}
        className="absolute top-4 right-4 md:right-8 text-white text-2xl sm:text-3xl p-2 rounded-full bg-gray-600 hover:bg-gray-800 transition transform"
      >
        <FiArrowRightCircle />
      </button>
      <button
        onClick={handlePrevious}
        className="absolute bottom-4 right-4 md:right-8 text-white text-2xl sm:text-3xl p-2 rounded-full bg-gray-600 hover:bg-gray-800 transition transform"
      >
        <FiArrowLeftCircle />
      </button>
    </div>
  );
};

export default Carousel;
