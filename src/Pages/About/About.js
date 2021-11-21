import React from 'react';
import Footer from '../Home/components/Footer/Footer';
import Header from '../Home/components/Header/Header';

const About = () => {
    return (
        <>
        <Header/>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6 px-5">
                        <img src="https://www.trekksoft.com/hs-fs/hubfs/kiki-siepel-583489-unsplash.jpg?width=1200&name=kiki-siepel-583489-unsplash.jpg" className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4>About TourX</h4>
                        <h2>The Best Travel Agency Company.</h2>
                        <p>In the digital age, photography is the first engagement tool we have when advertising tours and activities. It's what attracts the website user, and what will set you apart from your competition. You need to choose a featured image that is eye-catching, unique and makes a customer want to click and find out more. Look at what your competitors are using, and select something different so that your tour stands out. You should also change your photo from time-to-time to see if engagement increases or decreases. This way you can find which one works best.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;