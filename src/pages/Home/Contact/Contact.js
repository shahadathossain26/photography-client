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
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae velit vel expedita blanditiis consectetur quos nobis, exercitationem eaque laboriosam, delectus voluptatibus illo pariatur eos eligendi beatae, incidunt labore dolorem natus.</p>
            </div>

            <div className='absolute top-60 left-24 mt-20'>
                <button className="btn btn-accent text-white">Contact Me</button>

            </div>
        </div>
    );
};

export default Contact;