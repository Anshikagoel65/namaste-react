import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btNameReact, setBtNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logoBox">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
