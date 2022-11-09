import React, { useEffect, useState } from 'react';
import serviceImage from '../../assets/services.jpg';

import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../Reviews/ReviewCard';

const ServiceDetails = () => {
    const { _id, name, image, discription } = useLoaderData();
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id]);


    return (

        <div>
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
            </div>
            <div>
                <div className='text-center mb-16'>
                    <h2 className='text-5xl text-white font-bold mb-5'>Customers Review</h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Harum eaque inventore in sed laborum labore laudantium libero, <br /> voluptatibus sint quasi asperiores rem magnam atque. Excepturi.</p>
                </div>
                <div className='grid lg:grid-cols-3  mx-16 mb-10'>
                    {
                        reviews.map(review => <ReviewCard
                            key={review._id}
                            review={review}
                        ></ReviewCard>)
                    }
                </div>
            </div>

        </div>

    );
};

export default ServiceDetails;