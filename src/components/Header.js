import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btNameReact, setBtNameReact] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  
  return (
    <div className="flex justify-between bg-pink-100 h-32 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logoBox">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
