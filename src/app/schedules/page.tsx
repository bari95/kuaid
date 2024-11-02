
'use client';
// app/ship-schedules/page.tsx
import React from 'react';
import Flag from 'react-world-flags'; // Importing country flag component
import { Fade } from 'react-awesome-reveal'; // Importing animation component
import { Lora, Merriweather } from 'next/font/google'; // Importing fonts from next/google
import Footer from '@/components/Footer';
import Header from '@/components/Header';

// Load fonts
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'] });

// Dummy data for upcoming ships
const upcomingShips = [
    {
        _id: '1',
        country: 'US',
        name: 'Liberty Spirit',
        loadStart: '2024-11-05',
        loadEnd: '2024-11-08',
        departure: '2024-11-09',
        estimatedArrival: '2024-12-01',
    },
    {
        _id: '2',
        country: 'CN',
        name: 'Eastern Star',
        loadStart: '2024-11-10',
        loadEnd: '2024-11-13',
        departure: '2024-11-14',
        estimatedArrival: '2024-12-05',
    },
    {
        _id: '3',
        country: 'DE',
        name: 'Nordic Voyager',
        loadStart: '2024-11-15',
        loadEnd: '2024-11-18',
        departure: '2024-11-19',
        estimatedArrival: '2024-12-10',
    },
];

// Default image for carousel
const defaultImage = '/img/carousel-1.jpg';

const ShipSchedules = () => {
    return (
        <>
        <Header />
         <div className={`py-20 bg-gray-100 ${merriweather.className}`}>
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h6 className="text-gray-600 uppercase">Upcoming Ship Schedules</h6>
                    <h1 className={`mb-5 text-3xl font-bold text-gray-800 ${merriweather.className}`}>
                        Track the Latest Shipping Timelines
                    </h1>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {upcomingShips.map((ship) => (
                        <div key={ship._id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <Fade triggerOnce cascade>
                                <div className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                                    <img
                                        src={defaultImage}
                                        alt={ship.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <Flag code={ship.country} className="w-8 h-6 mr-2" />
                                            <h2 className={`text-xl font-bold ${merriweather.className}`}>
                                                {ship.name}
                                            </h2>
                                        </div>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Loading:</span> {ship.loadStart} to {ship.loadEnd}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Departure:</span> {ship.departure}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Est. Arrival:</span> {ship.estimatedArrival}
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </>
       
    );
};

export default ShipSchedules;
