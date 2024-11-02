// pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Fact from '../components/Fact';
import Service from '../components/Service';
import Feature from './Feature';
import Pricing from './Pricing';
import Quote from './Quote';
import Team from './Team';
import Testimonial from './Testimonial';
import Footer from './Footer';
import VideoHighlights from './VideoHiglits';

const HomePage = () => {
    return (
        <>
            <Header />
            <Carousel />

            <div className="container mx-auto px-4 lg:px-0">
                <About />
                <VideoHighlights />
                <Fact />
                <Service />
                <Feature />
                <Pricing />
                <Quote />
                <Team />
                <Testimonial />
            </div>
            
            <Footer />
        </>
    );
};

export default HomePage;
