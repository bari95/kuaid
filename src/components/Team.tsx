// components/Team.js
'use client';
import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal"; // Importing animations from react-awesome-reveal

const Team = () => {
    return (
        <div className="container mx-auto py-16">
            <div className="text-center mb-10">
                <Fade triggerOnce>
                    <h6 className="text-secondary uppercase">Our Team</h6>
                    <h1 className="mb-5 text-3xl font-bold">Expert Team Members</h1>
                </Fade>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Zoom key={index} cascade damping={0.1}>
                        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                            <div className="overflow-hidden mb-4 rounded-lg">
                                <img className="img-fluid w-full h-40 object-cover" src={`img/team-${index + 1}.jpg`} alt="" />
                            </div>
                            <h5 className="mb-0 text-xl font-semibold">Full Name</h5>
                            <p className="text-gray-500">Designation</p>
                            <div className="flex mt-1 space-x-3">
                                <i className="fa fa-share"></i>
                                <span>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </span>
                            </div>
                        </div>
                    </Zoom>
                ))}
            </div>
        </div>
    );
};

export default Team;
