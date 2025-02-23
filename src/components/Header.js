import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const Header = () => {
  const [btNameReact, setBtNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logoBox">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btNameReact === "Login" ? setBtNameReact("Logout") : setBtNameReact("Login");
            }}
          >
            {btNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
