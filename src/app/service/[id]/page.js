// app/service/[id]/page.js
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Merriweather } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

// Import the Spicy font
const spicy = Merriweather({ subsets: ['latin'], weight: ['400'] });

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

// Generate dynamic metadata for each service
export async function generateMetadata({ params }) {
  const { id } = params;
  const service = dummyServices.find((s) => s._id === id);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The service you are looking for does not exist.',
    };
  }

  return {
    title: service.title || 'Service Details',
    description: service.description || 'Details about the service.',
  };
}

// Server Component
const ServiceViewer = async ({ params }) => {
  const { id } = params;
  const service = dummyServices.find((s) => s._id === id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className={`p-20 max-w-2xl mx-auto ${spicy.className}`}>
        <h2 className="text-4xl font-bold mb-4 text-gray-800">{service.title}</h2>
        {service.media && (
          <img
            src={service.media}
            alt={service.title}
            className="my-4 w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
        )}
        <div
          className="text-gray-700 text-lg"
          dangerouslySetInnerHTML={{ __html: service.description }}
        />
      </div>
      <Footer />
    </>
  );
};

export default ServiceViewer;
