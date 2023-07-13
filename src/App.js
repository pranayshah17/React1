import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Details from "./Details";
import Protcted from "./Protected";
import Logout from "./Logout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protcted Component={Home} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:item" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
