import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className='display-2 mt-lg-5 text-light'>Amazing Tour In Indonesia </h1>
                        <p className='text-warning fs-2'>7 Days, 8 Night Tour </p>
                        <button className='btn btn-primary mt-lg-2'>Book Now <i className="bi bi-check2-circle"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;