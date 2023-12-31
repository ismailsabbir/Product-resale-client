import React, { useState } from "react";
import "./CheckOutPages.css";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
const CheckOutPages = () => {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [country, setcountry] = useState();
  const [city, setcity] = useState();
  const [postcode, setpostcode] = useState();
  const [email, setemail] = useState();
  const [mobile, setmobile] = useState();
  const [message, setmesssage] = useState();
  const data = useLoaderData();
  const { quentity } = useParams();
  const service = data?.service;
  const balance = data?.balance;
  const picture = data?.picture;
  const _id = data?._id;
  const productinfo = [{ _id, service, quentity, picture, balance }];
  const totaldoler = balance;
  const firstnamehandle = (e) => {
    const firstname = e.target.value;
    setfirstname(firstname);
  };
  const lastnamehandle = (e) => {
    const lastname = e.target.value;
    setlastname(lastname);
  };
  const countryhandler = (e) => {
    const country = e.target.value;
    setcountry(country);
  };
  const cityhandler = (e) => {
    const city = e.target.value;
    setcity(city);
  };
  const postcodehander = (e) => {
    const code = e.target.value;
    setpostcode(code);
  };
  const emailhander = (e) => {
    const email = e.target.value;
    setemail(email);
  };
  const mobilrhandler = (e) => {
    const mobile = e.target.value;
    setmobile(mobile);
  };
  const messagehandler = (e) => {
    const message = e.target.value;
    setmesssage(message);
  };
  const checkoutdata = {
    firstname,
    lastname,
    country,
    city,
    postcode,
    email,
    mobile,
    message,
    productinfo,
    totaldoler,
  };
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
        <Form className="checkout-inforow-col row">
          <div className="checkout-info-con-left col col-12 col-sm-12 col-md-12 col-lg-8">
            <h4 className="biling-text">Billing Details</h4>
            {/* <form> */}
            <div className="first-name-last-name">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                className="mr-8"
                onChange={firstnamehandle}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                onChange={lastnamehandle}
              />
            </div>
            {/* <input
              type="text"
              placeholder="Company Name"
              className="company-input"
            /> */}
            <select
              className="country-selected"
              id="cars"
              name="cars"
              onChange={countryhandler}
              required
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="fiat">India</option>
              <option value="audi">Bangladesh</option>
            </select>
            <input
              type="text"
              placeholder="City"
              className="company-input"
              onChange={cityhandler}
            />
            <input
              type="text"
              placeholder="PostCode/ZIP"
              className="company-input"
              onChange={postcodehander}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="company-input"
              onChange={emailhander}
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="company-input"
              onChange={mobilrhandler}
              required
            />
            <textarea
              name="note"
              placeholder="Notes about your order.Ex-Specail node for deliery"
              className="note-input"
              onChange={messagehandler}
            />
            {/* </form> */}
          </div>
          <div className="checkout-info-right col col-12 col-sm-12 col-md-12 col-lg-3">
            <h5>Your Order</h5>
            <div className="checkout-product-con">
              <div className="checkout-product">
                <div className="checkout-product-info">
                  <img src={data?.picture} alt="not found" />
                  <div>
                    <p>{data?.service} </p>
                    <p className="checkout-price">${data?.balance}</p>
                  </div>
                </div>
                <p>QTY {quentity}</p>
              </div>
              <div className="checkout-subtotla">
                <p>Subtotal</p>
                <h6>${parseFloat(data?.balance) * parseFloat(quentity)}</h6>
              </div>
              <h6>Shipping</h6>
              <div className="checkout-shipping">
                <p>Delivery Fee:</p>
                <h6>$2</h6>
              </div>
              <div className="checkout-totla">
                <p>Total:</p>
                <p>${parseFloat(data?.balance) * parseFloat(quentity) + 2}</p>
              </div>
              <p className="checkout-personal">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <Link to="/payment" state={{ checkoutdata }}>
                <button className="place-order-btn">Place Order</button>
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CheckOutPages;
