import React from "react";
import { RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <RouterProvider router={Navbar} />
    </>
  )
}

export default App;
