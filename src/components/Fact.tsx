// components/Fact.js

'use client'
import React from 'react';
import { FaHeadphones, FaUsers, FaShip, FaStar } from 'react-icons/fa';
import { Fade, Zoom } from 'react-awesome-reveal';

const Fact = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto py-4">
        <div className="flex flex-wrap g-5">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full px-4">
            <Fade direction="up" delay={300} >
              <h6 className="text-gray-600 uppercase mb-3">Some Facts</h6>
            </Fade>
            <Fade direction="up" delay={400} >
              <h1 className="mb-5 text-3xl font-bold font-serif text-blue-500">#1 Place To Manage All Of Your Shipments</h1>
            </Fade>
           
            <Fade direction="up" delay={600} >
              <div className="flex items-center bg-blue-500 text-white p-4 rounded-md">
                <FaHeadphones className="text-3xl" />
                <div className="ml-4">
                  <h6 className="font-semibold">Call for any query!</h6>
                  <h3 className="text-xl">+255 745 787 370</h3>
                </div>
              </div>
            </Fade>
          </div>

          {/* Facts Section */}
          <div className="lg:w-1/2 w-full px-4">
            <div className="flex flex-wrap border gap-2  w-full">
              {/* Happy Clients */}
              <Zoom delay={700} >
                <div className="w-full sm:w-3/4 p-2">
                  <div className="bg-blue-500 p-6 mb-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
                    <FaUsers className="text-white text-3xl mb-3" />
                    <h2 className="text-white text-5xl font-bold">1234</h2>
                    <p className="text-white mb-0 text-lg p-4">Happy Clients</p>
                  </div>
                </div>
              </Zoom>
              
              {/* Complete Shipments */}
              <Zoom delay={800} >
                <div className="w-full sm:w-3/4 p-2">
                  <div className="bg-gray-600  mb-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
                    <FaShip className="text-white text-3xl mb-3" />
                    <h2 className="text-white text-5xl font-bold">1234</h2>
                    <p className="text-white mb-0 text-lg p-4">Complete Shipments</p>
                  </div>
                </div>
              </Zoom>
              
              {/* Customer Reviews */}
              <Zoom delay={900} >
                <div className="w-full sm:w-3/4 p-2">
                  <div className="bg-green-500 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
                    <FaStar className="text-white text-3xl mb-3" />
                    <h2 className="text-white text-5xl font-bold">1234</h2>
                    <p className="text-white mb-0 text-lg">Customer Reviews</p>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fact;
