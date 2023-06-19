import React from "react";
import { Link } from "react-router-dom";

const MainService = (props) => {
  const data = props.service;
  return (
    <Link
      to={`/services/${data._id}`}
      className="product-card col col-12 col-sm-12 col-md-12 col-lg-3"
    >
      <img src={data.picture} alt="not found" />
      <h5 className="service-name">{data.service}</h5>
      <h6 className="service-price">${data.balance}</h6>
    </Link>
  );
};

export default MainService;
