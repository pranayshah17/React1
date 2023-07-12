import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <NavLink to="nescomp">Nested Component</NavLink>
      <Outlet />
    </>
  );
}
export default Home;
