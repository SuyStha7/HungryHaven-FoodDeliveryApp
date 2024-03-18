import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar fixed">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <a href="#home"
          to={"/"}
          onCack={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </a>
        <a
          href="#explore-menu"
          onCack={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#feedback"
          onCack={() => setMenu("feedback")}
          className={menu === "feedback" ? "active" : ""}
        >
          Testimonials
        </a>
        <a
          href="#app-download"
          onCack={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#contact"
          onCack={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={"/cart"} className="navbar-cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
