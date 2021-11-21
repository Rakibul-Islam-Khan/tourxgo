import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container">
        <div className="row py-5 text-light">
          <div className="col-md-3">
            <a href="#"><img src="https://i.ibb.co/QN58Q7f/foot.png" alt="" /></a>
            <p className="para mt-4">
            A tour description is the marketing content that explains what your tour is and it's unique selling points. The purpose of a tour description is to supply potential customers with details about the features of the tour.</p>
            <a className="icon fs-3 me-3" href="#">
              <i className="bi bi-facebook "></i>
            </a>
            <a className="icon fs-3 mx-3" href="#">
              <i className="bi bi-twitter "></i>
            </a>
            <a className="icon fs-3 mx-3" href="#">
              <i className="bi bi-instagram "></i>
            </a>
            <a className="icon fs-3 mx-3" href="#">
              <i className="bi bi-github "></i>
            </a>
          </div>
          <div className="col-md-3">
            <ul>
            <h4>Contact Us</h4>
              <li className="nav-item d-flex align-items-center my-3">
              <i className="bi bi-telephone fs-5 me-lg-3"></i> <span>+01852-1265122 <br /> +01852-1265122</span>
              </li>
              <li className="nav-item d-flex align-items-center my-3">
              <i className="bi bi-chat fs-5 me-lg-3"></i> <span> info@example.com support@example.com</span>
              </li>
              <li className="nav-item d-flex align-items-center">
              <i className="bi bi-geo-alt fs-5 me-lg-3"></i> <span> 2752 Willison Street Eagan, United State</span>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
            <h4>Support</h4>
              <li className="nav-item my-3">
                <i className="bi bi-check2"></i> Contact Us
              </li>
              <li className="nav-item my-3">
                <i className="bi bi-check2"></i> About Us
              </li>
              <li className="nav-item my-3">
                <i className="bi bi-check2"></i> Destinations
              </li>
              <li className="nav-item my-3">
                <i className="bi bi-check2"></i> Our Blogs
              </li>
              <li className="nav-item my-3">
                <i className="bi bi-check2"></i> Package
              </li>
            </ul>
          </div>
          <div className="col-md-4 px-5">
            <h4>Subscribe</h4>
            <div className="input-group my-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your email address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            <small>Get the latest news and updates right at your inbox.</small>
          </div>
          <hr className="mt-5" />
          <p className="text-center">Copyright 2021 TourX | Design By RIK Lab</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
