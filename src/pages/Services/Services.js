import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-16'>
                <h2 className='text-5xl text-white font-bold mb-5'>Our Services</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Harum eaque inventore in sed laborum labore laudantium libero, <br /> voluptatibus sint quasi asperiores rem magnam atque. Excepturi.</p>
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