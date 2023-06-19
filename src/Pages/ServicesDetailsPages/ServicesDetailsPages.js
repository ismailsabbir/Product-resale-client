import React, { useState } from "react";
import "./ServicesDetailsPages.css";
import payment from "../../../src/Images/payment.png";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillStar, AiFillCar, AiOutlineShoppingCart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sofa from "../../../src/Images/design1.webp";
import ServicesDescriptions from "../../Component/ServicesDescriptions/ServicesDescriptions";
import Additionalinformation from "../../Component/Additionalinformation/Additionalinformation";
import UserReviews from "../../Component/UserReviews/UserReviews";
import AddReview from "../../Component/AddReview/AddReview";
const ServicesDetailsPages = () => {
  const data = useLoaderData();
  const {
    picture,
    service,
    about,
    offer,
    Categories,
    SKU,
    balance,
    aditional,
  } = data;
  console.log(data);
  const [imageurl, setimageurl] = useState(picture);
  const incrementquentity = () => {
    const quentity = document.getElementById("quentity");
    const intquentity = parseInt(quentity.innerText);
    const newquentity = intquentity + 1;
    quentity.innerText = newquentity;
    console.log(newquentity);
  };
  const decresequentity = () => {
    const quentity = document.getElementById("quentity");
    const intquentity = parseInt(quentity.innerText);
    const newquentity = intquentity - 1;
    if (newquentity >= 1) {
      quentity.innerText = newquentity;
      console.log(newquentity);
    } else {
      toast("Please Minimum One item selected!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
  };
  return (
    <div className="detailspage-container">
      <div className="row details-hole">
        <div className="details-left col col-12 col-sm-12 col-md-12 col-lg-5">
          <div className="details-router">
            <Link className="details-path" to="/home">
              Home
            </Link>{" "}
            <>/</>
            <Link className="details-path" to="/services">
              Shop
            </Link>
            <>/</>
            <p>{service}</p>
          </div>
          <div className="row">
            <div className="details-left-left col col-12 col-sm-12 col-md-12 col-lg-3">
              <div className="small-imge">
                <img
                  src={sofa}
                  alt="not found"
                  onClick={() => setimageurl(sofa)}
                />
              </div>
              <div className="small-imge">
                <img
                  src={picture}
                  alt="not found"
                  onClick={() => setimageurl(picture)}
                />
              </div>
              <div className="small-imge">
                <img
                  src={picture}
                  alt="not found"
                  onClick={() => setimageurl(picture)}
                />
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-9 big-imge">
              <img src={imageurl} alt="" />
            </div>
          </div>
        </div>

        <div className="details-right col col-12 col-sm-12 col-md-12 col-lg-5">
          <h3 className="service-titlr">{service}</h3>
          <div className="review-star-con">
            <AiFillStar className="review-star"></AiFillStar>
            <AiFillStar className="review-star"></AiFillStar>
            <AiFillStar className="review-star"></AiFillStar>
            <AiFillStar className="review-star"></AiFillStar>
            <p className="number-review">({0} Review)</p>
          </div>
          <h5 className="product-price">
            ${balance} | <span className="offer">(offer 0%)</span>{" "}
          </h5>
          <p>Hurry up!! only 10 items left</p>
          <h6 className="quentity-tit">Quantity</h6>
          <div className="get-quentity">
            <div className="get-quentity-btn">
              <button onClick={incrementquentity}>+</button>
              <p id="quentity">1</p>

              <button onClick={decresequentity}>-</button>
            </div>
            <Link to="/cart" className="addcart-btn">
              <button className="addcart-ibtn">Add to Cart</button>
            </Link>
          </div>
          <Link to="/checkout">
            <button className="buy-now-btn">Buy Now</button>
          </Link>

          <div className="delivery-info-con">
            <div className="delivery-info">
              <AiFillCar className="car-icon"></AiFillCar>
              <p className="delivery-information">
                <span className="delivery-title"> Estimated Delivery : </span>
                Within 5-7 days
              </p>
            </div>
            <div className="delivery-info">
              <AiOutlineShoppingCart className="car-icon"></AiOutlineShoppingCart>
              <p className="delivery-information">
                <span className="delivery-title"> Free shipping : </span>On
                orders over $1499 and above
              </p>
            </div>
          </div>
          <div className="sku-category-con">
            <p className="sku">
              <span className="sku-title">SKU : </span>
              {SKU}
            </p>
            <p className="sku">
              <span className="sku-title">Categories : </span>
              {Categories}
            </p>
          </div>
          <div className="payment-types-con">
            <img src={payment} alt="not found" />
          </div>
        </div>
      </div>
      <ServicesDescriptions service={data}></ServicesDescriptions>
      <Additionalinformation service={data}></Additionalinformation>
      <UserReviews></UserReviews>
      <AddReview></AddReview>
      <ToastContainer />
    </div>
  );
};

export default ServicesDetailsPages;
