import React from "react";

import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="navbar-links">
        <li className="p-opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p-opensans">
          <a href="#pages">Pages</a>
        </li>
        <li className="p-opensans">
          <a href="#contact">Contact Us</a>
        </li>
        <li className="p-opensans">
          <a href="#blog">Blog</a>
        </li>
        <li className="p-opensans">
          <a href="#landing">Landing</a>
        </li>
      </ul>
      <div className="navbar-login">
        <a href="#login" className="p-opensans">
          Login / Register
        </a>
        <div />
        <a href="/" className="p-opensans">
          Book a Table
        </a>
      </div>
      <div className="mob-navbar">
        <GiHamburgerMenu color="#fff" fontSize={27} className="humburger" onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className="mob-navbar-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)}/>
            <ul className="navbar-mob-links">
              <li className="p-opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p-opensans">
                <a href="#pages">Pages</a>
              </li>
              <li className="p-opensans">
                <a href="#contact">Contact Us</a>
              </li>
              <li className="p-opensans">
                <a href="#blog">Blog</a>
              </li>
              <li className="p-opensans">
                <a href="#landing">Landing</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
