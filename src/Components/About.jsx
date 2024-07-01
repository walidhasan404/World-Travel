import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const About = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout); // Cleanup function
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    return (
        <Fade cascade damping={0.5}>
            <section className="py-10 bg-green-100 m-2 lg:m-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-center">About Us</h2>
                        <p className="text-lg lg:text-xl text-center mb-8">Explore World is your ultimate guide to discovering the most fascinating destinations around the globe. We are passionate about travel and dedicated to providing you with the best travel experiences.</p>
                        <p className="text-lg lg:text-xl text-center mb-8">Our mission is to inspire and empower travelers to explore new horizons, connect with diverse cultures, and create unforgettable memories. Whether you're a seasoned globetrotter or a first-time explorer, we've got you covered with expert travel tips, insightful guides, and curated recommendations.</p>
                        <p className="text-lg lg:text-xl text-center">Join us on a journey of discovery and adventure. Let's explore the world together!</p>
                    </div>
                </div>
            </section>
        </Fade>
    );
};

export default About;
