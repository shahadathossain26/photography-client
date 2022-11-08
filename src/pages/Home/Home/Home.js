import React from 'react';
import Services from '../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            <Services></Services>

        </div>
    );
};

export default Home;