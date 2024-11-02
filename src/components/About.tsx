// components/About.js

'use client'

import React from 'react';
import { FaGlobe, FaShippingFast } from 'react-icons/fa';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import {  Merriweather } from "next/font/google"; // Import fonts from next/font

// Load fonts

const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"] });

const About = () => {
  return (
    <div className={`py-4 px-4 lg:px-0 border-left border-red-500 ${merriweather.className}` }>
      <div className="container mx-auto py-8 px-4 lg:px-0">
        <div className="flex flex-wrap g-5">
          {/* Image Section */}
          

          {/* Text Section */}
          <div className=" w-full px-4 flex flex-col justify-center">
            <Fade direction="up" delay={1000} >
              <h6 className="text-gray-600 uppercase mb-3 text-center lg:text-left">About Us</h6>
            </Fade>
            <Fade direction="up" delay={300} >
              <h1 className="mb-5 text-3xl font-bold text-blue-600 text-center lg:text-left">Quick Transport and Logistics Solutions</h1>
            </Fade>
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 ">
            <Slide direction='right' delay={400}>
          <div className="relative h-96 w-full">
          <img 
  className=" w-full h-full border border-red-500 bottom-4" 
  src="/img/about.jpg" 
  alt="About Kuaid" 
/>
          </div>
          </Slide>
            <Fade direction="up" delay={500} >
            <p className="mb-5 text-gray-700 text-center lg:text-left mt-5 lg:w-1/2 bg-blue-100 p-4 rounded-md shadow">
    At Kuaid, we provide top-notch freight forwarding services that ensure your goods are delivered safely and efficiently. Our dedicated team works around the clock to ensure on-time deliveries, making your logistics hassle-free.
</p>

            </Fade>
              {/* Global Coverage */}
              <Zoom delay={600} >
                <div className="flex flex-col items-start">
                  <FaGlobe className="text-blue-500 mb-3 text-3xl" />
                  <h5 className="font-semibold">Global Coverage</h5>
                  <p className="m-0 text-gray-600">We offer seamless logistics services across the globe, ensuring your shipments reach their destination without delay.</p>
                </div>
              </Zoom>
              {/* On Time Delivery */}
              <Zoom delay={700}>
                <div className="flex flex-col items-start">
                  <FaShippingFast className="text-blue-500 mb-3 text-3xl" />
                  <h5 className="font-semibold">On Time Delivery</h5>
                  <p className="m-0 text-gray-600">Our commitment to punctuality means you can trust us to deliver your goods on time, every time.</p>
                </div>
              </Zoom>
            </div>
            <Fade direction="up" delay={800} triggerOnce>
              <a href="#" className="bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-700 transition duration-300 text-center">
                Explore More
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
