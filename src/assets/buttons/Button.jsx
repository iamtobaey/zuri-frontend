import React from "react";
import "./button.css";
import { Link } from "react-router-dom";
const GO_LINKS = [
  {
    data: "l",
    id: "twitter",
    title: "Twitter Link",
    link: "https://twitter.com/iamtobaey",
  },
  {
    data: "l1",
    id: "slack",
    title: "Slack Link",
    link: "https://slack.com/iamtobaey",
  },
  {
    data: "l2",
    id: "btn_zuri",
    title: "Zuri Team",
    link: "https://training.zuri.team",
  },
  {
    data: "l3",
    id: "books",
    title: "Zuri Books",
    link: "https://books.zuri.team",
  },
  {
    data: "l4",
    id: "book_python",
    title: "Python Books",
    link: "https://books.zuri.team/python-for-beginners?ref_id=Tobaey",
  },
  {
    data: "l5",
    id: "pithch",
    title: "Background Check for Coders",
    link: "https://background.zuri.team",
  },
  {
    data: "l6",
    id: "book_design",
    title: "Design Books",
    link: "https://books.zuri.team.design-rules",
  },
];

const Button = () => {
  return (
    <section id="buttons">
      <div className="buttons">
        <div className="button">
          {GO_LINKS.map((weblink) => {
            return (
              <a href={weblink.link} className="button-btn" id={weblink.id}>
                {weblink.title}
              </a>
            );
          })}
          <Link to="/contact" className="button-btn" id="contact">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Button;
