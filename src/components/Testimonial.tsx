// Import necessary libraries and components
import React from 'react';

import { InfiniteMovingCards } from './MovingCards'; // Adjust the path as needed

const testimonials = [
    {
        name: 'Alice Johnson',
        profession: 'Project Manager',
        image: 'img/testimonial-1.jpg',
        quote: 'This service has significantly improved our logistics. I highly recommend them for their professionalism and efficiency.',
    },
    {
        name: 'Mark Smith',
        profession: 'Business Owner',
        image: 'img/testimonial-2.jpg',
        quote: 'The team was incredibly responsive and delivered exactly what we needed. Their dedication is unmatched!',
    },
    {
        name: 'Jessica Brown',
        profession: 'Entrepreneur',
        image: 'img/testimonial-3.jpg',
        quote: 'A fantastic experience from start to finish. Their attention to detail and customer service is outstanding.',
    },
    {
        name: 'John Doe',
        profession: 'Freelancer',
        image: 'img/testimonial-4.jpg',
        quote: 'I was amazed by the quality of service provided. They went above and beyond to meet our expectations.',
    },
];

const Testimonial: React.FC = () => {
    return (
        <div className="container mx-auto py-4 px-4">
            <div className="text-center mb-10">
                <h6 className="text-secondary uppercase font-poppins">Testimonials</h6>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">What Our Clients Say!</h1>
            </div>

         {/* Static testimonials for responsiveness */}
         <div className="flex flex-wrap justify-center">
            <InfiniteMovingCards 
                items={testimonials.map((t) => ({
                    quote: t.quote,
                    name: t.name,
                    title: t.profession,
                    profession: t.profession,
                    image: t.image
                }))}
                direction="left"
                speed="normal"
                className="mb-4"
            />

           
             
            </div>
        </div>
    );
};

export default Testimonial;
