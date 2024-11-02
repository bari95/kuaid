// components/Pricing.js

'use client'
import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa'; // Importing React Icons for checkmark and arrow
import { Lora, Merriweather, Roboto } from 'next/font/google'; // Importing fonts from next/google

// Load fonts
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const fairplay = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] });

const Pricing = () => {
    return (
        <div className={`container-xxl py-4 ${lora.className}`}>
            <div className="container mx-auto py-5">
                <div className="text-center mb-12 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-gray-600 uppercase">Pricing Plan</h6>
                    <h1 className={`mb-5 text-3xl font-bold text-gray-800 ${fairplay.className}`}>Perfect Pricing Plan</h1>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={plan.title} plan={plan} delay={`${0.3 + index * 0.2}s`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const pricingPlans = [
    {
        title: "Basic Plan",
        price: 49.00,
        features: [
            "Customs Clearance Support",
            "Basic Freight Documentation",
            "Cargo Insurance Option",
            "Standard Tracking",
            "Email Support"
        ]
    },
    {
        title: "Standard Plan",
        price: 99.00,
        features: [
            "Priority Customs Clearance",
            "Enhanced Freight Documentation",
            "Cargo Insurance Included",
            "Real-time Tracking",
            "Phone & Email Support"
        ]
    },
    {
        title: "Advanced Plan",
        price: 149.00,
        features: [
            "Express Customs Clearance",
            "Full Freight Documentation Handling",
            "Premium Cargo Insurance",
            "24/7 Real-time Tracking",
            "Dedicated Account Manager"
        ]
    }
];


interface PricingCardProps {
    plan: { title: string; price: number; features: string[] };
    delay: string;
}

const PricingCard = ({ plan, delay }: PricingCardProps) => (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4 wow fadeInUp" data-wow-delay={delay}>
        <div className="border rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300 bg-white">
            <div className="border-b pb-4 mb-4">
                <h5 className="text-blue-500 mb-1 font-semibold">{plan.title}</h5>
                <h1 className="text-4xl mb-0">
                    <small className="align-top text-xl">$</small>{plan.price.toFixed(2)}<small className="text-lg align-bottom">/ Month</small>
                </h1>
            </div>
            <div className={`${roboto.className}`}>
                {plan.features.map((feature, index) => (
                    <p key={index} className="flex items-center mb-2">
                        <FaCheck className="text-green-500 mr-2" />
                        {feature}
                    </p>
                ))}
                <a className="flex items-center mt-4 text-blue-500 hover:text-blue-700 font-semibold" href="#">
                    <FaArrowRight className="mr-2" />
                    <span>Order Now</span>
                </a>
            </div>
        </div>
    </div>
);

export default Pricing;
