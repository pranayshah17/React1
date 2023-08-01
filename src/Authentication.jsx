import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "./App";
import { useContext } from "react";

const withAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    // const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    const { setIsLogin } = useContext(WrapperContext);

    useEffect(() => {
      setIsLogin(true);
      navigate("/");
    });

    if (!setIsLogin) {
      navigate("/login");
    }
    return <WrappedComponent {...props} />;
  };
  return AuthHOC;
};
export default withAuth;
