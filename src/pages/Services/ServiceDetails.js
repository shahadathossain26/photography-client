import React from 'react';
import serviceImage from '../../assets/services.jpg';

import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
const ServiceDetails = () => {
    const { name, image, discription } = useLoaderData();
    return (

        <div>
            <div className='relative mb-16'>
                <div className='home-banner'>
                    <img className='w-full h-80' src={serviceImage} alt="" />
                </div>

                <div className='absolute top-36 left-24'>
                    <h1 className='text-6xl font-bold text-white'>Service Details</h1>
                </div>
            </div>

            <div className="hero mb-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-1/2'>
                        <img src={image} className=" w-full rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold text-white">We Provide The Best {name}</h1>
                        <p className="py-6">{discription}</p>

                    </div>
                </div>
            </div>
            <Reviews></Reviews>
        </div>

    );
};

export default ServiceDetails;