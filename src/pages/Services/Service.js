import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service, latestWork }) => {
    const { _id, name, image, price, discription } = service;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-64' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{`${discription.slice(0, 80)}...`}</p>

                    <div className="card-actions flex justify-between mt-5">
                        <h3 className='text-3xl text-red-600 font-bold'>$ {price}</h3>
                        <Link to={`/services/${_id}`}><button className="btn btn-accent">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;