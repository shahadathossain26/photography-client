import React from 'react';
import aboutImage from '../../../assets/Banners/camera-2931883__340.jpg'

const About = () => {
    return (
        <div className="hero mb-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'>
                    <img src={aboutImage} className="rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold text-white">Read About My Journey.</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-accent">Work With Me</button>
                </div>
            </div>
        </div>
    );
};

export default About;