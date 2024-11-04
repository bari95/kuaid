// components/Service.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Lora, Merriweather } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image'; // Importing Next.js Image component

// Load fonts
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const fairplay = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'] });

// Dummy data for services
const dummyServices = [
    {
        _id: '1',
        title: 'Air Freight',
        description: 'Discover the best options for air freight. Our team is dedicated to providing exceptional service...',
        media: '/img/service-6.jpg',
    },
    {
        _id: '2',
        title: 'Ocean Freight',
        description: 'Discover the best options for ocean freight. Our team is dedicated to providing exceptional service...',
        media: '/img/service-5.jpg',
    },
    {
        _id: '3',
        title: 'Road Freight',
        description: 'Discover the best options for road freight. Our team is dedicated to providing exceptional service...',
        media: '/img/service-1.jpg',
    },
    {
        _id: '4',
        title: 'Train Freight',
        description: 'Discover the best options for train freight. Our team is dedicated to providing exceptional service...',
        media: '/img/service-2.jpg',
    },
    {
        _id: '5',
        title: 'Customs Clearance',
        description: 'Discover the best options for customs clearance. Our team is dedicated to providing exceptional service...',
        media: '/img/service-3.jpg',
    },
    {
        _id: '6',
        title: 'Warehouse Solutions',
        description: 'Discover the best options for warehouse solutions. Our team is dedicated to providing exceptional service...',
        media: '/img/service-4.jpg',
    },
];

const Service = () => {
    return (
        <div className={`py-20 ${lora.className}`}>
            <div className="container mx-auto py-20">
                <div className="text-center mb-12">
                    <h6 className="text-gray-600 uppercase">Our Services</h6>
                    <h1 className={`mb-5 text-3xl font-bold text-gray-800 ${fairplay.className}`}>Explore Our Services</h1>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {dummyServices.map((service) => (
                        <div key={service._id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                                <div className="overflow-hidden mb-4 rounded-lg">
                                    <Image
                                        src={service.media}
                                        alt={service.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                                    />
                                </div>
                                <h4 className={`mb-3 text-xl font-semibold text-gray-800 ${fairplay.className}`}>{service.title} Service</h4>
                                <p className="text-gray-700">{service.description}</p>
                                <Link href={`/service/${service._id}`} className="flex items-center mt-2 text-blue-500 hover:text-blue-700">
                                    <FaArrowRight className="mr-2" />
                                    <span>Read More</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
