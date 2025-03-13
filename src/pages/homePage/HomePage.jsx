import React from 'react';
import Navbar from '../../components/nav/Navbar';
import Banner from '../../components/banner/Banner';
import Clients from '../../components/clients/Clients';

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Clients/>
        </>
    );
};

export default HomePage;