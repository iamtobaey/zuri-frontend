import React from "react";
import BackIcon from "../images/arrow.png";
import OptionIcon from "../images/share.svg";
import "./arrow-icon.css";

const ArrowIcon = () => {
  return (
    <div className="arrow">
      <img src={BackIcon} alt="" />
      <img src={OptionIcon} alt="" />
    </div>
  );
};

export default ArrowIcon;
