import React from "react";
import "./Architecture.css";
import { Link } from "react-router-dom";
const Architecture = () => {
  return (
    <div className="architecture-con">
      <div className="arc-top">
        <h1>Interior architectural styles</h1>
        <p>Donec a mattis elit sed fermentum tellus mauris sed fermentum</p>
      </div>
      <div className="architecture-imge-con row justify-content-Center">
        <div className="arc-1 col col-12 col-sm-12 col-md-12 col-lg-3">
          <div className="arc-text">
            <h4>Modern Interior Design</h4>
            <Link className="arc-btn">SHOP NOW</Link>
          </div>
        </div>
        <div
          className="arc-2 col col-12 col-sm-12 col-md-12 col-lg-4"
          id="mid-arc"
        >
          <div className="arc-text">
            <h4>Modern Interior Design</h4>
            <Link className="arc-btn">SHOP NOW</Link>
          </div>
        </div>
        <div className="arc-3 col col-12 col-sm-12 col-md-12 col-lg-3">
          <div className="arc-text">
            <h4>Modern Interior Design</h4>
            <Link className="arc-btn">SHOP NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
