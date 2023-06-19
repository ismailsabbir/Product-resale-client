import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = (props) => {
  const data = props.service;
  console.log(data);
  console.log(data.picture);
  return (
    <Link
      to={`/services/${data._id}`}
      className="product-card col col-12 col-sm-12 col-md-12 col-lg-6"
    >
      <img src={data.picture} alt="not found" />
      <h5 className="service-name">{data.service}</h5>
      <h6 className="service-price">${data.balance}</h6>
    </Link>
  );
};

export default Services;
