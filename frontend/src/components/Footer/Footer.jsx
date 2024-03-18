import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" className="logo"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            perspiciatis magni rerum deserunt animi aliquid, delectus quis
            asperiores, saepe dolore non obcaecati accusamus neque, tempore
            incidunt architecto laboriosam sint placeat.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-221-356-122</li>
            <li>contact@freshfood.com</li>
            <input type="email" placeholder="Enter email address" className="email"/>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ FreshFood.com - All Rights Reserved.
      </p>

      <a href="#" className="scroll-up" id="scroll-up">
        <i class="fa-solid fa-arrow-up"></i>
    </a>
    </div>
  );
};

export default Footer;
