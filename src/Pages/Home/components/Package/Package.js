import React from 'react';
import { Link } from 'react-router-dom';
import "./Package.css"
const Package = (props) => {
    const {title, description, img, _id} = props.pack;
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-geo-alt"></i> {title}</h5>
                        <p className="card-text text-truncate pack"><i className="bi bi-card-text fs-5"></i> {description}</p>
                        <Link to={`/booking/${_id}`}>
                        <button className='btn btn-primary d-block mx-auto'>Book Now <i className="bi bi-check2-circle"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Package;