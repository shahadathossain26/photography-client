import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LatestworkCard from '../LatestworkCard/LatestworkCard';

const Latestwork = () => {
    const [latestWorks, setLatestWorks] = useState([]);
    useEffect(() => {
        fetch('https://assainment11-server.vercel.app/')
            .then(res => res.json())
            .then(data => setLatestWorks(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-16'>
                <h2 className='text-5xl text-white font-bold mb-5'>Browse My Latest Work</h2>
                <p className=''>Browse all of my lastest and top rated works and find which service you are looking for.</p>
            </div>
            <div
                className='grid lg:grid-cols-3 gap-6 mx-16 mb-10'>
                {
                    latestWorks.map(latestWork => <LatestworkCard
                        key={latestWork._id}
                        latestWork={latestWork}
                    ></LatestworkCard>)
                }

            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-outline btn-accent text-xl w-40">See All</button></Link>
            </div>



        </div>
    );
};

export default Latestwork;