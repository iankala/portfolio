import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/ian_kala_logo.svg";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
   const handleNav = (section) => {
    setMenu(section);
    closeMenu();
  };

  return (
    <div className="navbar">
      <img className="img" src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <a href="#home" onClick={() => handleNav("home")}>
            Home
          </a>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="#about" onClick={() => handleNav("about")}>
            About Me
          </a>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="#services" onClick={() => handleNav("services")}>
            Services
          </a>
          {menu === "services" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <a href="#work" onClick={() => handleNav("work")}>
            Portfolio
          </a>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="#contact" onClick={() => handleNav("contact")}>
            Contact
          </a>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>

      <div className="nav-connect">
        <a
          target="blank"
          href="https://www.linkedin.com/in/ian-kala-91a680239/"
        >
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
