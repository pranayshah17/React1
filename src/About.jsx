import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About Page</h1>
      <NavLink to="/details/mobile">
        <button className="btn btn-primary">Mobile</button>
      </NavLink>
      <NavLink to="/details/laptop">
        <button className="btn btn-primary">Laptop</button>
      </NavLink>
      <NavLink to="/details/tv">
        <button className="btn btn-primary">Tv</button>
      </NavLink>
      <Outlet />
    </>
  );
}
export default About;
