import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btNameReact, setBtNameReact] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  
  return (
    <div className="header">
      <div className="logoBox">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {OnlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btNameReact === "Login"
                ? setBtNameReact("Logout")
                : setBtNameReact("Login");
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
