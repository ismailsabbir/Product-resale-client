import React, { useState } from "react";
import "./CartsPages.css";
import { Table } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
const CartsPages = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/cartproduct`)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  });
  const handlecartremove = (params) => {
    Swal.fire({
      title: "Do you want to Delete cart product?",
      showCancelButton: true,
      confirmButtonText: "Delate",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_HOST_LINK}/cartproduct/${params._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Delete Sucessfull");
            }
          });
      }
    });
  };
  var subtotal = 0;
  product.forEach((prod) => {
    subtotal = subtotal + parseFloat(prod.balance) * parseFloat(prod.quentity);
  });
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
                    <th className="tablehead">Quentity</th>
                    <th className="tablehead">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((prod) => (
                    <tr>
                      <td>
                        <div className="cartinfo">
                          <button
                            onClick={() => handlecartremove(prod)}
                            className="cart-delate-btn"
                          >
                            X
                          </button>
                          <img src={prod.picture} alt="not found" />
                          <p> {prod.service}</p>
                        </div>
                      </td>
                      <td id="productprice">${prod.balance}</td>
                      <td id="productprice">{prod.quentity}</td>
                      <td className="totla_price">
                        ${prod.balance * prod.quentity}
                      </td>
                    </tr>
                  ))}
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
              <p>${subtotal}</p>
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
              <p className="subtotlalast">${subtotal + 10}</p>
            </div>
            <Link to="/cartcheckout">
              <button to="" className="checkout-btn">
                Proceed CheckOut
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CartsPages;
