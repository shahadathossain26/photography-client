import React, { useEffect, useState } from 'react';
import Service from './Service';
import serviceImage from '../../assets/services.jpg'
import useTitle from '../../hooks/useTitle';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('Services');
    useEffect(() => {
        fetch('https://assainment11-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='relative mb-16'>
                <div className='home-banner'>
                    <img className='w-full h-80' src={serviceImage} alt="" />
                </div>

                <div className='absolute top-36 left-24'>
                    <h1 className='text-6xl font-bold text-white'>Services</h1>
                </div>


            </div>
            <div className='text-center mb-16'>
                <h2 className='text-5xl text-white font-bold mb-5'>My Services</h2>
                <p className=' w-1/2 ml-80'>These are the services that I provide. Visit the services and see my performance. If your requirement doesn't match with the service, you can personally contact me and discribe your requirement to me. I will do my best to fullfill your requirement.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 mx-16 mb-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;