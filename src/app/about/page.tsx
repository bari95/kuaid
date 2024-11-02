// pages/about.js
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { FaGlobe, FaShippingFast, FaHandsHelping, FaTruckMoving } from 'react-icons/fa';

const About = () => {
  return (
    <div className="py-20 px-4 lg:px-0 bg-gray-50">
        <Header />
      <div className="container mx-auto flex flex-col lg:flex-row items-center py-20 px-4 lg:px-0">
        <div className="relative lg:w-1/2 w-full mb-10 lg:mb-0">
          <img 
            className=" object-cover w-full h-full rounded-lg shadow-lg" 
            src="/img/about.jpg" 
            alt="About Kuaid" 
          />
        </div>
        <div className="lg:w-1/2 w-full px-4">
          <h6 className="text-gray-600 uppercase mb-3">About Kuaid</h6>
          <h1 className="mb-5 text-3xl font-bold text-gray-800">Your Reliable Freight Forwarding Partner</h1>
          <p className="mb-5 text-gray-700">
            At Kuaid, we provide comprehensive freight forwarding solutions tailored to your business needs. Our expertise in logistics ensures that your goods are delivered efficiently and safely across the globe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaGlobe className="text-blue-500 mb-3 text-3xl" />
              <h5 className="font-semibold text-lg">Global Coverage</h5>
              <p className="m-0 text-gray-600">We operate globally, ensuring that your shipments reach their destination on time, every time.</p>
            </div>
            <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaShippingFast className="text-blue-500 mb-3 text-3xl" />
              <h5 className="font-semibold text-lg">On-Time Delivery</h5>
              <p className="m-0 text-gray-600">Our commitment to on-time delivery sets us apart from the competition.</p>
            </div>
            <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaHandsHelping className="text-blue-500 mb-3 text-3xl" />
              <h5 className="font-semibold text-lg">Customer Support</h5>
              <p className="m-0 text-gray-600">Our dedicated support team is available 24/7 to assist you with all your logistics needs.</p>
            </div>
            <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaTruckMoving className="text-blue-500 mb-3 text-3xl" />
              <h5 className="font-semibold text-lg">Advanced Tracking</h5>
              <p className="m-0 text-gray-600">Stay updated with our advanced tracking system for your shipments.</p>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
