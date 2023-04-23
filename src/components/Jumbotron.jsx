import React from "react";
import IPhone from "../assets/images/iphone-14.jpg";
const Jumbotron = () => {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title"> New </h2>
      <img className="logo" src={IPhone} alt="iphone 14 pro" />
      <p className="text">Big and Bigger</p>
      <span className="description">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
    </div>
  );
};

export default Jumbotron;
