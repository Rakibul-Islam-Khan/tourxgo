import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Footer from '../Home/components/Footer/Footer';
import Header from '../Home/components/Header/Header';

const MyPackage = () => {

    const [booking, setBooking] = useState([])
    const [hide, setHide] = useState([])
    useEffect(() => {
        fetch('https://pacific-ocean-78149.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    const handleCancel = id => {
        const proceed = window.confirm('Are you sure you want to cancel this booking?')
        if (proceed) {
            axios.delete(`https://pacific-ocean-78149.herokuapp.com/booking/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert('Booking Cancelled')
                        setBooking(booking.filter(book => book._id !== id))
                    }
                })
        }
    }
    const handleApprove = id => {
        if (id) {
            setHide('d-none')
        }
    }
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row my-5 align-items-center">
                    <div className="col-md-12">
                        <h1 className="text-center mb-md-5">My Package</h1>
                        {
                            booking.map(book => <div key={book._id} className="row border p-3 mb-3">
                                <div className="col-md-2">
                                    <p>Name: <span>{book.fullName}</span></p>
                                </div>
                                <div className="col-md-3">
                                    <p>Email: <span>{book.email}</span></p>
                                </div>
                                <div className="col-md-2">
                                    <p>Address: <span>{book.address}</span></p>
                                </div>
                                <div className="col">
                                    <p>Date: <span>{book.date}</span></p>
                                </div>
                                <div className="col">
                                    <p>Price: <span>${book.price}</span></p>
                                </div>
                                <div className="col-md-2 d-flex justify-content-between align-items-center">
                                    <button onClick={() => handleApprove(book._id)} className="btn btn-success">Approve</button>
                                    <button onClick={() => handleCancel(book._id)} className={`btn btn-danger ${hide}`}>Cancel</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyPackage;