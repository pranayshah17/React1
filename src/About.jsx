import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About Page</h1>
      <NavLink>
        <button className="btn btn-primary">Mobile</button>
      </NavLink>
      <NavLink>
        <button className="btn btn-primary">Laptop</button>
      </NavLink>
      <NavLink>
        <button className="btn btn-primary">Tv</button>
      </NavLink>
    </>
  );
}
export default About;
