import React from 'react';

const Service = ({ service }) => {
    const { name, image, price, discription } = service;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-64' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{discription}</p>
                    <h3 className='text-3xl text-red-600 font-bold'>$ {price}</h3>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;