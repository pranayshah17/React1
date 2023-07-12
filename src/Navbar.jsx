import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import NesComponent from "./NesComponent";
import Contact from "./Contact";
import Support from "./Support";
import User from "./User";

const Navbar = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "nescomp",
            element: <NesComponent />,
            children: [
              {
                path: "user/:name",
                element: <User />,
              },
            ],
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
]);

export default Navbar;
