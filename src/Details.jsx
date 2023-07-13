import React from "react";
import { useParams, NavLink } from "react-router-dom";

function Details() {
  const params = useParams();
  const { item } = params;
  return (
    <>
      <NavLink to="/details/mobile">
        <button className="btn btn-primary">Mobile</button>
      </NavLink>
      <NavLink to="/details/laptop">
        <button className="btn btn-primary">Laptop</button>
      </NavLink>
      <NavLink to="/details/tv">
        <button className="btn btn-primary">Tv</button>
      </NavLink>
      <h1>This is {item}'s Details</h1>;
    </>
  );
}
export default Details;
