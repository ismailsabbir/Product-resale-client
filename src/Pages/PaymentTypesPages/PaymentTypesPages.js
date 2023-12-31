import React from "react";
import "./PaymentTypesPages.css";
import bkash from "../../Images/bkash.png";
import card from "../../Images/cred.png";
import nogod from "../../Images/nogod.avif";
import cash from "../../Images/cashon.png";
import rocket from "../../Images/rocket.png";
import visa from "../../Images/visa.png";
import circle from "../../Images/circel.png";
import blue from "../../Images/bluecrd.png";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../CheckoutForm/CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const PaymentTypesPages = () => {
  const [cardshow, setcardshow] = useState(true);
  const [bkashshow, setbkashshow] = useState(false);
  const location = useLocation();
  const paymentinfo = location.state?.checkoutdata;
  const cardhandler = () => {
    setbkashshow(false);
    setcardshow(true);
  };
  const handlebkashshow = () => {
    setcardshow(false);
    setbkashshow(true);
  };
  return (
    <div className="paymentcontainer">
      <div className="payment-text">
        <div className="row payment-types-pt ">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-8">
            <h5>Select Payment Method</h5>
            <div className="payment-typess">
              <div className="bkash" onClick={cardhandler}>
                <img src={card} alt="not found" />
                <p>Credit/Debit Card</p>
              </div>
              <div className="bkash">
                <img src={nogod} alt="not found" />
                <p>Nagad</p>
              </div>
              <div className="bkash">
                <img src={rocket} alt="not found" />
                <p>Rocket</p>
              </div>
              <div className="bkash" onClick={handlebkashshow}>
                <img src={bkash} alt="not found" />
                <p>Save bKash Account</p>
              </div>
              <div className="bkash">
                <img src={cash} alt="not found" />
                <p>Cash On Delivery</p>
              </div>
            </div>
            <div className={cardshow ? "show" : "notshow"}>
              <div className="card-info-con">
                <div className="cardss">
                  <img src={visa} alt="not found" />
                  <img src={circle} alt="not found" />
                  <img src={blue} alt="not found" />
                </div>
                {/* //////////////////////////////////////////////// */}
                <div>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm paymentinfo={paymentinfo}></CheckoutForm>
                  </Elements>
                </div>
                {/* <Form>
                  <Form.Group
                    className="mb-3 card-input"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Card number</Form.Label>
                    <Form.Control type="email" placeholder="Card number" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 card-input"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name on card</Form.Label>
                    <Form.Control type="email" placeholder="Name on card" />
                  </Form.Group>
                  <div className="card-inputlast">
                    <Form.Group
                      className="mb-3 expiration-data"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Expiration date</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Expiration date"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="email" placeholder="CVV" />
                    </Form.Group>
                  </div>
                  <div className="secure-card">
                    <h6>Save Card</h6>
                    <p>
                      I acknowledge that my card information is saved in my
                      Daraz account for subsequent transactions.
                    </p>
                  </div>
                  <button className="pay-now-btn">Pay Now</button>
                </Form> */}
              </div>
            </div>
            <div className={bkashshow ? "show" : "notshow"}>
              <div className="card-info-con">
                <div className="">
                  <p>
                    1) Users paying with bkash for the first time: Enter bKash
                    Wallet Number and OTP for successful account saving.
                  </p>
                  <p>2) For all subsequent users: Enter PIN to make payment</p>
                  <button className="pay-now-btn">Pay Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="taka-payment-con">
              <h5>Order Summary</h5>
              <div className="taka-payment">
                <p>
                  Subtotal ({paymentinfo?.productinfo[0].quentity} Items and
                  shipping fee included)
                </p>
                <p>
                  $
                  {parseFloat(paymentinfo.totaldoler) *
                    parseFloat(paymentinfo.productinfo[0].quentity)}
                </p>
              </div>
              <div className="taka-payment">
                <p>Total Amount</p>
                <p className="totla-taka">
                  ${" "}
                  {parseFloat(paymentinfo.totaldoler) *
                    parseFloat(paymentinfo.productinfo[0].quentity) +
                    10}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTypesPages;
