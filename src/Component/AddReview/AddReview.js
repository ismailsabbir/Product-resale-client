import React from "react";
import "./AddReview.css";
const AddReview = () => {
  const submithandler = () => {};
  return (
    <div className="review-add-container">
      <div className="add-review-top">
        <p className="add-review-top-text">Add a Review</p>
        <p className="review-top-let">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <div className="addreview-botom">
        <form onSubmit={submithandler}>
          <textarea className="review" name="review"></textarea>
          <div className="name-email">
            <input
              className="name"
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <input
            type="checkbox"
            id="condition"
            name="vehicle1"
            value="Bike"
            className="checkbox"
          />
          <label for="condition" className="condition-text">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
          <br></br>
          <button className="addreview-btn">Add Review</button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
