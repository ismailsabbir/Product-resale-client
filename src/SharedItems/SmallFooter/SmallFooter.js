import React from "react";
import "./SmallFooter.css";
import logo from "../../../src/Images/logo1.png";
const SmallFooter = () => {
  return (
    <div className="small-footer-con">
      <img src={logo} alt="not found" />
      <p>emare123@gmail.com</p>
    </div>
  );
};

export default SmallFooter;
