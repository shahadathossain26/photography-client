import React from 'react';
import aboutImage from '../../../assets/Banners/camera-2931883__340.jpg'

const About = () => {
    return (
        <div className="hero mb-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'>
                    <img src={aboutImage} className="rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold text-white">Read About My Journey.</h1>
                    <p className="py-6">As macular degeneration slowly begin to fade my eyesight, I picked up a camera. This allowed me to see in detail the sights I missed in person. I had a Sony A1, that I fitted a magnifier to, so I could see the live view LCD screen. Later I bought a Nikon D300, its viewfinder was bright enough for me to compose my shots. After joining two local camera clubs, I learned to better compose and edit my photos. Although legally blind I compete against fully sighted photographers in our local fair. This year I won three first-place awards along with two special awards. Including the Fair Directors Choice award. I also produce a calendar for the last ten years that I give to my family and friends.</p>
                    <button className="btn btn-accent">Work With Me</button>
                </div>
            </div>
        </div>
    );
};

export default About;