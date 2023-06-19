import React from "react";
import "./HomeProducts.css";
import MainService from "../MainService/MainService";
import { Link } from "react-router-dom";
const HomeProducts = (props) => {
  const data = props.services;
  const slicedata = data.slice(0, 8);
  console.log(data);
  return (
    <div className="homeproduct-container">
      <div className="homeproduct-top">
        <h2>Deal on interior moduler</h2>
        <p>Donec a mattis elit sed fermentum tellus mauris</p>
      </div>
      <div className="homeproduct-right">
        <div className="row justify-content-Center">
          {slicedata.map((service) => (
            <MainService service={service} key={service._id}></MainService>
          ))}
        </div>
      </div>
      <div className="more-product-con">
        <Link className="more-coll-btn" to="/services">
          MORE COLLECTION
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
