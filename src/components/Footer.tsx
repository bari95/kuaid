// Import Google Fonts

"use client"
import { Roboto, Merriweather } from 'next/font/google';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaYoutube, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import React, { useState } from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['700'] });

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string>('');

    const handleSubscribe = async () => {
        setLoading(true);
        setSuccess(false);
        setError('');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSuccess(true);
                setEmail(''); // Clear input field
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Subscription failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div
            className={`bg-gray-900 text-gray-200 pt-5 ${roboto.className}`}
            style={{
                backgroundImage: 'url("/footer-grid.svg")',
                marginTop: '6rem',
            }}
        >
            <div className="container mx-auto py-5">
                <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-5">
                        <h4 className={`text-lg font-semibold mb-4 ${merriweather.className}`}>Address</h4>
                        <p className="mb-2 flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> Magomeni Street, Dar es Salaam, URT
                        </p>
                        <p className="mb-2 flex items-center">
                            <FaPhoneAlt className="mr-2" /> +255 3475 87370
                        </p>
                        <p className="mb-2 flex items-center">
                            <FaEnvelope className="mr-2" /> info@kuaid-cargo.com
                        </p>
                        <div className="flex space-x-3 pt-2">
                            <a className="text-gray-200 hover:text-blue-400" href="#">
                                <BsTwitterX />
                            </a>
                            <a className="text-gray-200 hover:text-blue-400" href="#">
                                <FaFacebookF />
                            </a>
                            <a className="text-gray-200 hover:text-blue-400" href="#">
                                <FaYoutube />
                            </a>
                            <a className="text-gray-200 hover:text-blue-400" href="#">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    <div className="mb-5">
                        <h4 className={`text-lg font-semibold mb-4 ${merriweather.className}`}>Services</h4>
                        <a className="text-gray-200 hover:underline mb-1 block" href="#">Air Freight</a>
                        <a className="text-gray-200 hover:underline mb-1 block" href="#">Sea Freight</a>
                        <a className="text-gray-200 hover:underline mb-1 block" href="#">Road Freight</a>
                        <a className="text-gray-200 hover:underline mb-1 block" href="#">Logistic Solutions</a>
                        <a className="text-gray-200 hover:underline mb-1 block" href="#">Industry Solutions</a>
                    </div>

                    <div className="mb-5">
                        <h4 className={`text-lg font-semibold mb-4 ${merriweather.className}`}>Quick Links</h4>
                        <a className="text-gray-200 hover:underline mb-1 block" href="/about">About Us</a>
                        <a className="text-gray-200 hover:underline mb-1 block" href="/contact">Contact Us</a>
                        <a className="text-gray-200 hover:underline mb-1 block" href="/services">Our Services</a>
                        <a className="text-gray-200 hover:underline mb-1 block" href="/schedules">Ship schedules</a>
                        <a className="text-gray-200 hover:underline mb-1 block" href="/videos">Videos</a>
                    </div>

                    <div className="mb-5">
                        <h4 className={`text-lg font-semibold mb-4 ${merriweather.className}`}>Newsletter</h4>
                        <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input
                                className="border-0 w-full py-3 pl-4 pr-12 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                disabled={loading}
                            />
                            <button
                                type="button"
                                onClick={handleSubscribe}
                                className="bg-blue-600 text-white py-2 absolute top-0 right-0 mt-2 mr-2 rounded hover:bg-blue-500"
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Sign Up'}
                            </button>
                        </div>
                        {success && (
                            <AttentionSeeker effect="bounce">
                                <p className="text-green-500 mt-3">Thank you for subscribing!</p>
                            </AttentionSeeker>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-700">
                    <div className="text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-b border-gray-200 hover:border-blue-400" href="#">kuaid.com</a>, All Rights Reserved.
                    </div>
                    <div className="text-center text-md-end text-sm">
                        Developed by
                        <a
                            className="border-b border-gray-200 hover:border-blue-400 ml-1"
                            href="https://wa.me/255765762688"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Bariki Kaneno
                        </a>
                    </div>
                </div>
            </div>

            <a href="#" className="bg-blue-600 text-white rounded-full fixed bottom-5 right-5 p-3 shadow-lg transition-transform transform hover:scale-110">
                <FaArrowUp />
            </a>
        </div>
    );
};

export default Footer;
