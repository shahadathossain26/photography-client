import React from 'react';
import bannerImage from '../../../assets/Banners/banner3.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='relative mb-16'>
            <div className='home-banner'>
                <img className='w-full h-1/2' src={bannerImage} alt="" />
            </div>
            <div className='absolute top-20 left-24'>
                <h4 className='text-xl text-red-600 font-bold'>Professional Videographer Service</h4>
            </div>
            <div className='absolute top-40 left-24'>
                <h1 className='text-6xl font-bold text-white'>Capture The Best <br /> Experience</h1>
            </div>

            <div className='absolute top-80 left-24 w-1/2'>
                <p className='text-white'>Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image with the right camera</p>
            </div>

            <div className='absolute top-96 left-24 mt-20'>
                <button className="btn btn-accent text-xl text-white">See My All Work</button>

            </div>
        </div>
    );
};

export default Banner;