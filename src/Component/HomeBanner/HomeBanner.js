import React from "react";
import banner from "../../../src/Images/sofa.webp";
import "./HomeBanner.css";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <div>
      <div className="homebanner-container">
        <div className="homebanner-left">
          <div className="left-text">
            <h1>Renovate your Interior</h1>
            <p>Invite clip connection style underline boolean device</p>
            <Link to="/services">
              <button className="shop-btn">SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div className="homebanner-right">
          <img src={banner} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
