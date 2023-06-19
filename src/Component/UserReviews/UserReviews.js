import React from "react";
import "./UserReviews.css";
import { FaUserTie } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const UserReviews = () => {
  return (
    <div className="review-container">
      <div className="user-imge-div">
        <FaUserTie className="user-imge"></FaUserTie>
      </div>
      <div>
        <div className="review-star-con">
          <AiOutlineStar className="review-star"></AiOutlineStar>
          <AiOutlineStar className="review-star"></AiOutlineStar>
          <AiOutlineStar className="review-star"></AiOutlineStar>
          <AiOutlineStar className="review-star"></AiOutlineStar>
        </div>
        <p className="review-text">Review is goood</p>
      </div>
    </div>
  );
};

export default UserReviews;
