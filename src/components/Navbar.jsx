import React, { useState } from "react";
import "./Navbar.css";
import eeclogo from "../../assets/eeclogo.svg";
import Hamburger_icon from "../../assets/hamburger.svg";
import crossIcon from "../../assets/navbar-menu-cross-icon.svg";
import Hamburger_menu from "./Hamburger";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleHamburgerClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="navbar-container">
      <div className="logo">
        <img src={eeclogo} className="logo-img" alt="EEC Logo" />
        <img
          src={showMenu ? crossIcon : Hamburger_icon}
          className="hamburger-icon"
          alt="Menu"
          onClick={handleHamburgerClick}
        />
      </div>

      {showMenu && <Hamburger_menu />}
    </header>
  );
}

export default Navbar;
