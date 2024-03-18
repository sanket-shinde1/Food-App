import { hover } from "@testing-library/user-event/dist/hover";
import logo from "./logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} width={150} alt="logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
