import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function NesComponent() {
  return (
    <>
      <h1>nested component</h1>
      <button>
        <NavLink to="user/pranay">Pranay</NavLink>
      </button>
      <button>
        <NavLink to="user/amaan">Amaan</NavLink>
      </button>
      <button>
        <NavLink to="user/kalpesh">Kaplesh</NavLink>
      </button>
      <Outlet />
    </>
  );
}
export default NesComponent;
