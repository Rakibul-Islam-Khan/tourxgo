import axios from "axios";
import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Footer from "../Home/components/Footer/Footer";
import Header from "../Home/components/Header/Header";
import "./Booking.css";
const Booking = () => {
  const { bookingId } = useParams();
  console.log(useParams());
  const [pack, setPack] = useState([]);
  useEffect(() => {
    fetch(`https://pacific-ocean-78149.herokuapp.com/package/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.fullName === "" || data.email === "" || data.phone === "") {
      return alert("Please fill all the fields");
    }
    axios.post(`https://pacific-ocean-78149.herokuapp.com/booking`, data).then((res) => {
      if (res.data.insertedId) {
        reset();
        alert("Successfully Add Package");
      }
    });
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row my-5">
          <div className="col-md-7">
            <div className="card p-4 mb-3">
              <img src={pack.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title d-flex justify-content-between">
                  <span>
                    <i className="bi bi-geo-alt"></i> {pack.title}
                  </span>
                  <span>${pack.price}</span>
                </h3>
                <p className="card-text">
                  <i className="bi bi-card-text fs-5"></i> {pack.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 border p-4 shadow book">
            <h3 className="text-center mb-4">Booking Details</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Your Full Name</label>
                <input className="form-control" {...register("fullName")} />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Your Email
                </label>
                <input className="form-control" {...register("email")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input className="form-control" {...register("number")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input className="form-control" {...register("address")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  {...register("price")}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Ticket Type</label>
                <select className="form-select" {...register("travel")}>
                  <option value="Travel With Bus">Travel With Bus</option>
                  <option value="Travel With Plane">Travel With Plane</option>
                  <option value="Travel With Train">Travel With Train</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("date")}
                />
              </div>
              <input className="btn btn-primary w-100" type="submit" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
