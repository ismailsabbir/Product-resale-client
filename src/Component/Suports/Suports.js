import React from "react";
import "./Suports.css";
import imag1 from "../../../src/Images/car.svg";
import imag2 from "../../../src/Images/pay.svg";
import imag3 from "../../../src/Images/cart.svg";
import imag4 from "../../../src/Images/ear.svg";
const Suports = () => {
  return (
    <div className="support-container row">
      <div className="support1 col col-12 col-sm-12 col-md-6 col-lg-3">
        <img src={imag1} alt="not found" />
        <div>
          <h4>Free Shipping</h4>
          <p>Get free shipping over $1499</p>
        </div>
      </div>
      <div className="support1 col col-12 col-sm-12 col-md-6 col-lg-3">
        <img src={imag2} alt="not found" />
        <div>
          <h4>Quick Payment</h4>
          <p>Online Quick Payment easily</p>
        </div>
      </div>
      <div className="support1 col col-12 col-sm-12 col-md-6 col-lg-3">
        <img src={imag3} alt="not found" />
        <div>
          <h4>Easy Return</h4>
          <p>Easy return within 24 hours</p>
        </div>
      </div>
      <div className="support1 col col-12 col-sm-12 col-md-6 col-lg-3">
        <img src={imag4} alt="not found" />
        <div>
          <h4>24/7 Support</h4>
          <p>Customer Online Support</p>
        </div>
      </div>
    </div>
  );
};

export default Suports;
