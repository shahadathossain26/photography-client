import React from 'react';
import contactImage from '../../../assets/Banners/images (1).jpg'

const Contact = () => {
    return (
        <div className='relative mb-16'>
            <div className='home-banner'>
                <img className='w-full h-1/2' src={contactImage} alt="" />
            </div>

            <div className='absolute top-10 left-24'>
                <h1 className='text-5xl font-bold text-white'>Need Help With Professional <br /> Photographer?</h1>
            </div>

            <div className='absolute top-44 left-24 w-1/2'>
                <p className='text-white'>Confident and dedicated photographer with experience in both professional and freelance photography. Holds nearly 10 years of working experience with great variety in order to tackle any photography job quickly and effectively. Intimately familiar taking high quality digital photographs, including framing, selecting and setting up lighting, and determining advanced shutter and lens options.</p>
            </div>

            <div className='absolute top-60 left-24 mt-20'>
                <button className="btn btn-accent text-white">Contact Me</button>

            </div>
        </div>
    );
};

export default Contact;