import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, image, text } = review;
    console.log(name);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{text}</p>

            </div>
        </div>
    );
};

export default ReviewCard;