import React from "react";
import "./CartsPages.css";
import images from "../../Images/cart.webp";
import { Table } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const CartsPages = () => {
  const incrementquentity = () => {};
  const decresequentity = () => {};
  return (
    <div className="cartpages-container-hole">
      <div className="cartpage-container">
        <div className="row cart-container">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-8 cartpages-left">
            <div className="progress-container">
              <p>
                Buy <span>$179</span> more for get <span>Free Shipping!!</span>
              </p>
              <progress
                className="progress progress-error w-56"
                value="70"
                max="100"
              ></progress>
            </div>
            <div className="cart-container">
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th className="tablehead">Products</th>
                    <th className="tablehead">Price</th>
                    <th className="tablehead">Quantity</th>
                    <th className="tablehead">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="cartinfo">
                        <button className="cart-delate-btn">X</button>
                        <img src={images} alt="not found" />
                        <p> Metal Pendant Light</p>
                      </div>
                    </td>
                    <td>$240.00</td>
                    <td>
                      <div className="get-quentity-btn">
                        <button onClick={incrementquentity}>+</button>
                        <p id="quentity">1</p>

                        <button onClick={decresequentity}>-</button>
                      </div>
                    </td>
                    <td>$960.00</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="cupon-con">
              <input
                className="coupon-input"
                type="text"
                name="coupon"
                placeholder="Enter Coupon"
              />
              <button>Apply Coupon</button>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-3 cartpages-right">
            <h5 className="cart-title-t">Cart Totals</h5>
            <div className="subtotla">
              <p>Subtotal</p>
              <p>$960.00</p>
            </div>
            <p className="shippingca">Shipping</p>
            <div className="flat-con">
              <h6>Flat rate:</h6>
              <p>$10.00</p>
            </div>
            <p className="shippingca">
              Shipping to <span>CA</span>.
            </p>
            <div className="address">
              <p>Change address</p>
              <AiOutlineHome className="add-icon"></AiOutlineHome>
            </div>
            <div className="total-con">
              <p>Total:</p>
              <p>$970.00</p>
            </div>
            <Link to="/checkout">
              <button to="/checkout" className="checkout-btn">
                Proceed CheckOut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartsPages;
