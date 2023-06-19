import React from "react";
import "./HomeCategory.css";
import { Link } from "react-router-dom";
import image from "../../../src/Images/homemoney.jpg";
import image2 from "../../../src/Images/money.jpg";
import { AiOutlinePlusCircle } from "react-icons/ai";
const HomeCategory = (props) => {
  const category = props.category;
  console.log(category);
  return (
    <div className="homecategory-con">
      <div className="homecategory-top">
        <h3>Browse items by category</h3>
        {/* <p>Selected Your interior fruniture with Low cost</p> */}
      </div>
      <div className="homeactegoryitem row">
        {category.map((catego) => (
          <Link
            to={`/specificservice/${catego.id}`}
            className="homecategory-product col col-6 col-sm-3 col-md-3 col-lg-2"
          >
            <img src={catego.image} alt="not found" />
            <div className="homecategory-text">
              <h6>{catego.name}</h6>
              <p>96400 add</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="earning-money-con">
        <img src={image2} alt="not found" />
        <div className="earning-money-text">
          <h3>Start making money!</h3>
          <p>
            Do you have something to sell? Post your first ad and start making
            money!
          </p>
          <Link to="/postadd" className="addpost-btn">
            <AiOutlinePlusCircle></AiOutlinePlusCircle>
            Post Your Add For Free
          </Link>
        </div>
        <img src={image} alt="not found" />
      </div>
    </div>
  );
};

export default HomeCategory;
