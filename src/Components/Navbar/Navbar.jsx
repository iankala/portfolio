import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/ian_kala_logo.svg";
import underline from "../../assets/nav_underline.svg";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0"
  }
   const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }


  return (
    <div className="navbar">
      <img className="img" src={logo} alt=""  />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <p onClick={()=>setMenu("home")}><a href="#home"> Home</a></p>
          {menu === "home" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <p onClick={()=>setMenu("about")}><a href="#about">About Me</a></p>
          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <p onClick={()=>setMenu("services")}><a href="#services">Services</a></p>
          {menu === "services" ? <img src={underline} /> : null}
        </li>
        <li>
          <p onClick={()=>setMenu("work")}><a href="#work">Portfolio</a></p>
          {menu === "work" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <p onClick={()=>setMenu("contact")}><a href="#contact">Contact</a></p>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>

      <div className="nav-connect"><a target="blank" href="https://www.linkedin.com/in/ian-kala-91a680239/">Connect With Me</a></div>
    </div>
  );
};

export default Navbar;
