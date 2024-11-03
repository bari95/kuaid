'use client'

import React, { useState } from 'react';
import { FaPhoneAlt, FaRegEdit } from 'react-icons/fa';
import { AttentionSeeker } from 'react-awesome-reveal';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

const Quote: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: '',
        instructions: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // Start loading

        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error submitting request');
            }

            const result = await response.json();
            setSuccessMessage(result.message);  // Show success message
            setFormData({ name: '', email: '', mobile: '', service: '', instructions: '' });  // Reset form fields
        } catch (error) {
            console.error('Submission error:', error);
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setLoading(false);  // Stop loading
        }
    };

    const resetForm = () => {
        setSuccessMessage('');
    };

    return (
        <div className={`container mx-auto py-6 ${merriweather.className}`}>
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2">
                    <h6 className="text-secondary uppercase mb-3">Get A Quote</h6>
                    <h1 className="mb-5 text-4xl font-bold text-gray-800">Request A Free Freight Quote!</h1>
                    <p className="mb-5 text-lg text-gray-600">
                        We understand that each shipment is unique. Fill out the form below to receive a personalized quote tailored to your specific freight needs. Our team is here to assist you every step of the way!
                    </p>
                    <div className="flex items-center mt-4">
                        <FaPhoneAlt className="text-3xl bg-primary p-3 text-white rounded-full" />
                        <div className="ml-4">
                            <h6 className="text-lg text-gray-700">Need Assistance? Call Us!</h6>
                            <h3 className="text-primary text-xl">+255 745 787 370</h3>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="bg-light text-center p-10 rounded-lg shadow-lg">
                        {successMessage ? (
                            <AttentionSeeker effect="pulse">
                                <div className="p-6 bg-green-100 text-green-700 rounded-lg text-lg font-semibold">
                                    {successMessage}
                                    <button
                                        onClick={resetForm}
                                        className="mt-4 px-4 py-2 bg-primary text-white bg-green-500 rounded-lg hover:bg-primary-dark"
                                    >
                                        Submit Another Quote
                                    </button>
                                </div>
                            </AttentionSeeker>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-input w-full border border-gray-300 text-gray-500 rounded-lg p-2"
                                            placeholder="Your Name"
                                            style={{ height: '55px' }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input w-full border border-gray-300 rounded-lg p-2"
                                            placeholder="Your Email"
                                            style={{ height: '55px' }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            className="form-input w-full border border-gray-300 rounded-lg p-2"
                                            placeholder="Your Mobile"
                                            style={{ height: '55px' }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="form-select w-full text-gray-500 border border-gray-300 rounded-lg p-2"
                                            style={{ height: '55px' }}
                                            required
                                        >
                                            <option   className="form-select w-full text-gray-500 border border-gray-300 rounded-lg p-2" value="" disabled>Select A Freight Service</option>
                                            <option   className="form-select w-full text-gray-500 border border-gray-300 rounded-lg p-2" value="local">Local Freight Shipping</option>
                                            <option   className="form-select w-full text-gray-500 border border-gray-300 rounded-lg p-2" value="regional">Regional Freight Shipping</option>
                                            <option   className="form-select w-full text-gray-500 border border-gray-300 rounded-lg p-2" value="international">International Freight Shipping</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <textarea
                                            name="instructions"
                                            value={formData.instructions}
                                            onChange={handleChange}
                                            className="form-input w-full border border-gray-300 text-gray-500 rounded-lg p-2"
                                            placeholder="Special Instructions or Notes"
                                            rows={4}
                                        ></textarea>
                                    </div>
                                    <div className="col-span-2">
                                        <button className="btn-primary w-full py-3 rounded-lg flex items-center justify-center" type="submit" disabled={loading}>
                                            {loading ? (
                                                <span className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full border-t-transparent mr-2"></span>
                                            ) : (
                                                <FaRegEdit className="mr-2" />
                                            )}
                                            {loading ? 'Submitting...' : 'Submit Request'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
