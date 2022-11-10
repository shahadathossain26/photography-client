import React, { useContext, useEffect, useState } from 'react';
import serviceImage from '../../assets/services.jpg';

import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../Reviews/ReviewCard';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, name, image, discription } = useLoaderData();
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id]);

    const handleMyReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.photo.value;
        const phone = form.phone.value;
        const email = user?.email || 'unregister';
        const message = form.message.value;

        const review = {
            name: name,
            image: image,
            text: message,
            service_id: _id,

            email: email,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('Review placed succesfully')
                }
            })
            .catch(error => console.error(error));

    }


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
                <div className='grid lg:grid-cols-3 gap-6 mx-16 mb-20'>
                    {
                        reviews.map(review => <ReviewCard
                            key={review._id}
                            review={review}
                        ></ReviewCard>)
                    }
                </div>
            </div>

            <div>
                {user?.email ?
                    <div>
                        <h3 className='text-4xl text-accent font-bold text-center mb-14'><u>Add Your Review</u></h3>
                        <form onSubmit={handleMyReview}>
                            <div className='grid grid-cols-2 gap-x-20 gap-y-8 mx-16 mb-12'>
                                <input type="text" name='name' placeholder="Your name" className="input w-full bg-white text-black" />
                                <input type="text" name='photo' placeholder="Photo URL" className="input w-full bg-white text-black" value={user?.photoURL} />
                                <input type="text" name='phone' placeholder="Your Phone" className="input w-full bg-white text-black" />
                                <input type="text" name='email' placeholder="Your email" className="input w-full bg-white text-black" value={user?.email} />
                            </div>
                            <div className='text-center'>
                                <textarea name='message' className="textarea textarea-success w-3/4 mx-16 h-44 text-black  bg-white" placeholder="Bio"></textarea>

                            </div>
                            <div className='text-center mt-6'>
                                <button className="btn btn-accent">Place Your Review</button>
                            </div>

                        </form>
                    </div>
                    : <></>
                }
            </div>




        </div>

    );
};

export default ServiceDetails;