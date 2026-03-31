import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/ian_kala_logo.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";
import github_icon from "../../assets/github_icon.svg";

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
          {menu === "home" ? <div className="nav-underline"></div> : null}
        </li>
        <li>
          <a href="#about" onClick={() => handleNav("about")}>
            About Me
          </a>
          {menu === "about" ? <div className="nav-underline"></div> : null}
        </li>
        <li>
          <a href="#services" onClick={() => handleNav("services")}>
            Services
          </a>
          {menu === "services" ? <div className="nav-underline"></div> : null}
        </li>
        <li>
          <a href="#work" onClick={() => handleNav("work")}>
            Portfolio
          </a>
          {menu === "work" ? <div className="nav-underline"></div> : null}
        </li>
        <li>
          <a href="#contact" onClick={() => handleNav("contact")}>
            Contact
          </a>
          {menu === "contact" ? <div className="nav-underline"></div> : null}
        </li>
      </ul>

      <div className="nav-socials">
        <div className="nav-github">
          <a href="https://github.com/iankala" target="_blank" rel="noreferrer">
            <img src={github_icon} alt="GitHub" />
          </a>
        </div>
        <div className="nav-linkedin">
          <a href="https://www.linkedin.com/in/ian-kala-91a680239/" target="_blank" rel="noreferrer">
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
    </div>
  );
};

export default Navbar;