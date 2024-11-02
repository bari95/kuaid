import React from 'react';
import { FaPhoneAlt, FaRegEdit } from 'react-icons/fa'; // Importing icons for phone and edit

const Quote: React.FC = () => {
    return (
        <div className="container mx-auto py-6">
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
                            <h3 className="text-primary text-xl">+012 345 6789</h3>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="bg-light text-center p-10 rounded-lg shadow-lg">
                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        className="form-input w-full border border-gray-300 rounded-lg p-2"
                                        placeholder="Your Name"
                                        style={{ height: '55px' }}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        className="form-input w-full border border-gray-300 rounded-lg p-2"
                                        placeholder="Your Email"
                                        style={{ height: '55px' }}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="form-input w-full border border-gray-300 rounded-lg p-2"
                                        placeholder="Your Mobile"
                                        style={{ height: '55px' }}
                                        required
                                    />
                                </div>
                                <div>
                                    <select className="form-select w-full border border-gray-300 rounded-lg p-2" style={{ height: '55px' }} required>
                                        <option value="" disabled selected>Select A Freight Service</option>
                                        <option value="local">Local Freight Shipping</option>
                                        <option value="regional">Regional Freight Shipping</option>
                                        <option value="international">International Freight Shipping</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <textarea
                                        className="form-input w-full border border-gray-300 rounded-lg p-2"
                                        placeholder="Special Instructions or Notes"
                                        rows={4}
                                    ></textarea>
                                </div>
                                <div className="col-span-2">
                                    <button className="btn-primary w-full py-3 rounded-lg flex items-center justify-center" type="submit">
                                        <FaRegEdit className="mr-2" />
                                        Submit Request
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
