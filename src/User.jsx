import React from "react";
import { Outlet, useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const { name } = params;

  return (
    <>
      <h1>This is {name}'s Deatails</h1>
      <Outlet />
    </>
  );
}

export default User;
