import React from "react";
import "./ServicesDescriptions.css";
const ServicesDescriptions = (props) => {
  const data = props.service;
  return (
    <div className="descriptions-container">
      <h5 className="description-design">Description</h5>
      <div className="row descriptions">
        <div className="left-descriptions col col-12 col-sm-12 col-md-6 col-lg-3">
          <img src={data.picture} alt="not found" />
        </div>
        <div className="right-description col col-12 col-sm-12 col-md-6 col-lg-8">
          <h5>Product details</h5>
          <p>{data.about.slice(0, 289)}</p>
          <p>{data.about.slice(290, 1000)}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDescriptions;
