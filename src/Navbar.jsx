import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href=""
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="about" className="nav-link" href="">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contact" className="nav-link" href="">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink to="login">
              <button className="btn btn-success" type="submit">
                Login
              </button>
            </NavLink>
            <NavLink>
              <button className="btn btn-danger" type="submit">
                LogOut
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
