import React from 'react';
import './Tourx.css'
const Tourx = () => {
    return (
        <div className="tourx my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mt-5 fs-3">Why TourX</p>
                        <h1 className="mb-5">Why You Are Travel With <br /> Tourx</h1>
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            <div className="col">
                                <div className="card bg-primary text-light">
                                    <i className='bi bi-people fs-1'></i>
                                    <div className="card-body">
                                        <h4 className="card-title">2000+ Our worldwide guide</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-primary text-light">
                                    <i className="bi bi-image-fill fs-1"></i>
                                    <div className="card-body">
                                        <h4 className="card-title">100% trusted travel agency</h4>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-primary text-light">
                                    <i className='bi bi-calendar-check fs-1'></i>                                        <div className="card-body">
                                        <h4 className="card-title">10+ year of travel experience</h4>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-primary text-light">
                                    <i className='bi bi-emoji-smile fs-1'></i>
                                    <div className="card-body">
                                        <h4 className="card-title">90% of our traveller happy</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tourx;