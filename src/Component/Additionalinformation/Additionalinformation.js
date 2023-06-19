import React from "react";
import "./Additionalinformation.css";
const Additionalinformation = (props) => {
  const data = props.service.aditional;

  return (
    <div className="additionalinformation-container">
      <div className="additional-top">
        <h4>Additional information</h4>
      </div>
      <div className="additionalinfo">
        {data.map((add) => (
          <div className="addtional-info-text">
            <p className="additional-key">{Object.keys(add)}</p>
            <p>{Object.values(add)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Additionalinformation;
