import React from "react";
import Slack from "../images/slack.png";
import GitHub  from "../images/GitHub.png";
import "./social-icon.css";

const SocialIcon = () => {
  return (
    <section id="social-icon">
      <div className="social-icon">
        <a href="https://github.com/iamtobaey">
          <img src={Slack} alt="" />
        </a>
        <a href="https://github.com/iamtobaey">
          <img src={GitHub} alt="" />
        </a>
      </div>
    </section>
  );
};

export default SocialIcon;
