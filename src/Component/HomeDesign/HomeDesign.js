import React from "react";
import "./HomeDesign.css";
import image1 from "../../../src/Images/design1.webp";
import image2 from "../../../src/Images/design2.webp";
import Services from "../Services/Services";
const HomeDesign = (props) => {
  const services = props?.services;
  const twoservice = services?.slice(0, 2);
  return (
    <div className="homedesign-container">
      <div className="homedesign-left">
        <div className="homedesign-imge1">
          <img src={image1} alt="not found" />
        </div>
        <div className="homedesign-imge2">
          <img src={image2} alt="not found" />
        </div>
      </div>
      <div className="homedesign-right">
        <h3>Renovate your interior with moduler design</h3>
        <div className="row justify-content-Center">
          {twoservice.map((service, _id) => (
            <Services service={service} key={_id}></Services>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDesign;
