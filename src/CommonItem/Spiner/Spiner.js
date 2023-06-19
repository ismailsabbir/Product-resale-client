import React from "react";
import "./Spiner.css";
import { Spinner } from "react-bootstrap";
const Spiner = () => {
  return (
    <div>
      <h2>
        L
        <span>
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </span>
        ading
      </h2>
    </div>
  );
};

export default Spiner;
