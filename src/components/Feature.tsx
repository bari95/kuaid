// components/Feature.js
'use client';
import React from 'react';
import { FaGlobe, FaShippingFast, FaHeadphones } from 'react-icons/fa'; // Importing React Icons for features
import { Lora, Merriweather, Roboto } from 'next/font/google'; // Importing fonts from next/google
import { Fade, Slide } from "react-awesome-reveal";


// Load fonts
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] });

const Feature = () => {
    return (
        <div className={`container-fluid overflow-hidden py-20 ${lora.className}`}>
            <div className="container mx-auto py-5">
                <div className="flex flex-wrap mx-lg-0">
                    <div className="w-full lg:w-1/2 pr-0 lg:pr-5 mb-8 lg:mb-0">
                        <h6 className="text-gray-600 uppercase mb-3">{`Our Features`}</h6>
                        <h1 className={`mb-5 text-3xl font-bold text-gray-800 ${merriweather.className}`}>
                            We Are a Trusted Logistics Company 
                        </h1>
                        <FeatureItem 
                            icon={<FaGlobe />} 
                            title="Worldwide Service" 
                            description="We provide comprehensive logistics solutions that connect businesses globally." 
                            delay={100} // Delay in milliseconds
                        />
                        <FeatureItem 
                            icon={<FaShippingFast />} 
                            title="On-Time Delivery" 
                            description="Our commitment is to deliver your goods on time, every time." 
                            delay={300} 
                        />
                        <FeatureItem 
                            icon={<FaHeadphones />} 
                            title="24/7 Customer Support" 
                            description="Our dedicated support team is available around the clock to assist you." 
                            delay={500} 
                        />
                    </div>
                    <div className="w-full lg:w-1/2" style={{ minHeight: '400px' }}>
                        <Fade direction='right' delay={100}>
                            <div className="relative h-full">
                                <img className=" w-full  object-cover transition-transform duration-500 hover:scale-105" src="img/feature.jpg" alt="Feature" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface FeatureProps {
    icon: JSX.Element; // Changed to JSX.Element to accept React Icons
    title: string;
    description: string;
    delay: number; // Delay in milliseconds
}

const FeatureItem = ({ icon, title, description, delay }: FeatureProps) => (
    <Slide direction={'left'} delay={delay}>
        <div className={`flex mb-5 transform transition-transform duration-500 hover:translate-x-1`}>
            <div className="text-blue-500 text-4xl flex-shrink-0">{icon}</div>
            <div className="ml-4">
                <h5 className={`text-lg font-semibold ${roboto.className}`}>{title}</h5>
                <p className="mb-0 text-gray-700">{description}</p>
            </div>
        </div>
    </Slide>
);

export default Feature;
