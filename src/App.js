import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import React, { useState } from "react";
import Home from "./Home";
import { createContext } from "react";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import CocktailDetails from "./CocktailDetails";
import CompA from "./CompA";
import CompB from "./CompB";

export const WrapperContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [searchFormValue, setSearchFormValue] = useState("")
  return (
    <>
      <WrapperContext.Provider value={{ isLogin, setIsLogin, searchFormValue, setSearchFormValue }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cocktail" element={<PrivateRoute><CocktailDetails /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/componentA" element={<CompA />} />
            <Route path="/componentB" element={<CompB />} />
          </Routes>
        </BrowserRouter >
      </WrapperContext.Provider>
    </>
  );
}

export default App;
