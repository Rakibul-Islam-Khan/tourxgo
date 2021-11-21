import React from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Packages from './components/Packages/Packages';
import Tourx from './components/Tourx/Tourx';
// import Traveller from './components/Traveller/Traveller';

const Home = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Packages/>
            <Tourx/>
            <Footer/>
        </>
    );
};

export default Home;