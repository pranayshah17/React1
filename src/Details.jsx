import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  const params = useParams();
  const { item } = params;
  return <h1>This is {item}'s Details</h1>;
}
export default Details;
