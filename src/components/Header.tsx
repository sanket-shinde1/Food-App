import { useState } from "react";
import LOGO from "../utils/logo-removebg-preview.png";
import { Link } from "react-router-dom";

const Header = () => {
  // const [status, setStatus] = useState("Login");

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src={LOGO} width={150} alt="logo" />
        </div>
      </Link>
      <div className="nav-item">
        <ul>
          <li className="home">
            <p>
              <Link
                to="/"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                Home
              </Link>
            </p>
          </li>
          <li className="about">
            <p>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About Us
              </Link>
            </p>
          </li>
          <li className="contact">
            <p>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact Us
              </Link>
            </p>
          </li>
          {/* <li>
            <p>Cart</p>
          </li> */}
          {/* <button
            className="login-btn"
            onClick={() => {
              status === "Login" ? setStatus("Logout") : setStatus("Login");
            }}
          >
            {status}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
