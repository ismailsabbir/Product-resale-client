import React from "react";
import "./Spiner.css";
import { Spinner } from "react-bootstrap";
const Spiner = () => {
  return (
    <div className="spiner-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Spiner;
