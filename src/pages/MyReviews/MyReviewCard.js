import React, { useEffect, useState } from 'react';

const MyReviewCard = ({ myReview, handleDelete }) => {
    const { _id, name, text, email, service_id } = myReview;
    const [service, setService] = useState({});


    useEffect(() => {
        fetch(`https://assainment11-server.vercel.app/services/${service_id}`)
            .then(res => res.json())
            .then(data => setService(data))

    }, [service_id])


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-accent">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img src={service.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {text}
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MyReviewCard;