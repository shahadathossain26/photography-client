import React from 'react';

import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Latestwork from '../Latestwork/Latestwork';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            <Latestwork></Latestwork>

        </div>
    );
};

export default Home;