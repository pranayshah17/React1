import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "./App";

export default function Login() {
  const { setIsLogin } = useContext(WrapperContext);

  const navigate = useNavigate();

  const Login = () => {
    setIsLogin(true);
    navigate("/");
  };
  return (
    <div>
      <h2>Login Form</h2>
      <button className="btn btn-primary" onClick={Login}>
        Login
      </button>
    </div>
  );
}
