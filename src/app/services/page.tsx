

import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { FaArrowRight } from 'react-icons/fa';
import { Lora, Merriweather } from 'next/font/google';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Load fonts
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const fairplay = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'] });

const domain = 'https://kuaid.vercel.app'; // Update to https://kuaid-cargo.com once live

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

// metadata for the page
export const metadata: Metadata = {
  title: 'Our Services - Explore Freight Solutions',
  description: 'Explore a variety of freight services including Air Freight, Ocean Freight, and more. Discover the best options for your shipping needs.',
  openGraph: {
    title: 'Our Services - Explore Freight Solutions',
    description: 'Explore a variety of freight services including Air Freight, Ocean Freight, and more.',
    url: domain + '/service',
    images: [
      {
        url: `${domain}/img/service-1.jpg`, // Placeholder for a general service page image
        width: 1200,
        height: 630,
        alt: 'Freight Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Explore Freight Solutions',
    description: 'Explore a variety of freight services including Air Freight, Ocean Freight, and more.',
    images: [`${domain}/img/service-1.jpg`],
  },
};

const ServicePage = () => {
  return (
    <>
      <Header />

      {/* Open Graph & Twitter Cards Metadata */}
      <Script
        id='service-page-script'
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Our Services",
            "description": "Explore a variety of freight services including Air Freight, Ocean Freight, and more.",
            "url": `${domain}/services`,
            "provider": {
              "@type": "Organization",
              "name": "Kuaid Cargo",
              "url": domain,
            },
          }),
        }}
      />

      <div className={`py-20 ${lora.className}`}>
        <div className="container mx-auto py-20">
          <div className="text-center mb-12">
            <h6 className="text-gray-600 uppercase">Our Services</h6>
            <h1 className={`mb-5 text-3xl font-bold text-gray-800 ${fairplay.className}`}>
              Explore Our Services
            </h1>
          </div>
          <div className="flex flex-wrap -mx-4">
            {dummyServices.map((service) => (
              <div key={service._id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="overflow-hidden mb-4 rounded-lg">
                  {service.media && (
    <div className="my-4 w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 relative">
      <Image
        src={service.media}
        alt={service.title}
        layout="responsive" // This will make the image responsive
        width={700} // Provide a reasonable default width
        height={400} // Provide a reasonable default height
        className="rounded-lg"
      />
    </div>
  )}
                  </div>
                  <h4 className={`mb-3 text-xl font-semibold text-gray-800 ${fairplay.className}`}>
                    {service.title} Service
                  </h4>
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

      <Footer />
    </>
  );
};

export default ServicePage;
