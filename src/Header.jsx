import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <div>
      <div className="navbar">
        <NavLink to="home">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">contact</NavLink>
        <NavLink to="support">support</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default Header;
