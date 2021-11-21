import React, { useState, useEffect } from 'react';
import Package from '../Package/Package';

const Packages = () => { 
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://pacific-ocean-78149.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <h1 className='text-center mb-5'>Select Your Best Package <br /> For Your Travel</h1>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                packages.map( pack => <Package key={pack._id} pack={pack} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Packages;