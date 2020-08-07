import React from "react";
import sunny from "./img/sunny.png";
import snow from "./img/snow.png";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img style={{ width: "300px" }} src={import "./img/sunny.png" } alt="img" />
      <div className="card-img-overlay">Card Component</div>
    </div>
  );
};

export default Card;
