import React from "react";
import "./CheckOutPages.css";
import { Link } from "react-router-dom";
import image from "../../../src/Images/cart.webp";
const CheckOutPages = () => {
  return (
    <div className="checkout-container-hole">
      <div className="checkoutlogin">
        <p>
          Returning customer?{" "}
          <Link to="/logon" className="login-link-c">
            Click here to login
          </Link>{" "}
        </p>
      </div>
      <div className="checkoutlogin">
        <p>
          Have a coupon?{" "}
          <Link to="/" className="login-link-c">
            login-link-c
          </Link>
        </p>
      </div>
      <div className="checkout-info-con">
        <div className="checkout-inforow-col row">
          <div className="checkout-info-con-left col col-12 col-sm-12 col-md-12 col-lg-8">
            <h4 className="biling-text">Billing Details</h4>
            <form>
              <div className="first-name-last-name">
                <input
                  type="text"
                  placeholder="First Name"
                  name="first-name"
                  className="mr-8"
                />
                <input type="text" placeholder="Last Name" name="first-name" />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="company-input"
              />
              <select className="country-selected" id="cars" name="cars">
                <option value="volvo">Country</option>
                <option value="saab">Bangladesh</option>
                <option value="fiat">India</option>
                <option value="audi">Bangladesh</option>
              </select>
              <input type="text" placeholder="City" className="company-input" />
              <input
                type="text"
                placeholder="PostCode/ZIP"
                className="company-input"
              />

              <input
                type="email"
                placeholder="Email"
                className="company-input"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="company-input"
              />
              <textarea
                name="note"
                placeholder="Notes about your order.Ex-Specail node for deliery"
                className="note-input"
              />
            </form>
          </div>
          <div className="checkout-info-right col col-12 col-sm-12 col-md-12 col-lg-3">
            <h5>Your Order</h5>
            <div className="checkout-product-con">
              <div className="checkout-product">
                <div className="checkout-product-info">
                  <img src={image} alt="not found" />
                  <div>
                    <p>Green Armchair </p>
                    <p className="checkout-price">$746</p>
                  </div>
                </div>
                <p>QTY 1</p>
              </div>
              <div className="checkout-subtotla">
                <p>Subtotal</p>
                <h6>$8766.0</h6>
              </div>
              <h6>Shipping</h6>
              <div className="checkout-shipping">
                <p>Flat rate:</p>
                <h6>$10.0</h6>
              </div>
              <div className="checkout-totla">
                <p>Total:</p>
                <p>$129.0</p>
              </div>
              <p className="checkout-personal">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <button className="place-order-btn">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPages;
