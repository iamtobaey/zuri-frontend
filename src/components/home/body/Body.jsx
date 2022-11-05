import React from "react";
import "./body.css";
import ME from "../../../assets/images/Tobaey.jpg";
import Button from "../../../assets/buttons/Button";
import SocialIcon from "../../../assets/icons/SocialIcon";
import ArrowIcon from "../../../assets/arrow/ArrowIcon";
import { BsCamera } from "react-icons/bs";

const Body = () => {
  return (
    <section id="body" className="container">
      <div className="body">
        <ArrowIcon />
        <div className="body-img">
          <img src={ME} alt="" id="profile_img" />
          <div className="camera-icon" >
            <BsCamera />
          </div>
        </div>
        <span>Oluwatobiloba Ademola</span>
      </div>
      <Button />
      <SocialIcon />
    </section>
  );
};

export default Body;
