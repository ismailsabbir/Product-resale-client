import React from "react";
import "./ServicesBanner.css";
import image from "../../../src/Images/tub1.avif";
import image1 from "../../../src/Images/tub2.avif";
import image2 from "../../../src/Images/tub3.avif";
import image3 from "../../../src/Images/tub4.avif";
import image4 from "../../../src/Images/tub5.avif";
import image5 from "../../../src/Images/stub1.webp";

const ServicesBanner = () => {
  return (
    <div className="services-banner-con">
      <img src={image} alt="not found" />
      <img src={image1} alt="not found" />
      <img src={image2} alt="not found" />
      <img src={image3} alt="not found" />
      <img src={image4} alt="not found" />
      <img src={image5} alt="not found" />
      <div className="servicebanner-text">
        <h1>Choses Your Product</h1>
      </div>
    </div>
  );
};

export default ServicesBanner;
