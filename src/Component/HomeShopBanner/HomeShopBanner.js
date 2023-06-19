import React from "react";
import "./HomeShopBanner.css";
import { Link } from "react-router-dom";
const HomeShopBanner = () => {
  return (
    <div className="homeshopbanner-con">
      <div className="banner-shop-text">
        <h2>Lets modify your interior modern looks</h2>
        <Link to="/services">
          <button className="shop-btn">SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeShopBanner;
