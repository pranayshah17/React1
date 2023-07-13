import React from "react";

function Logout() {
  const logout = () => {
    localStorage.setItem("login", false);
  };
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     let login = localStorage.getItem("login");
  //     if (logout) {
  //       navigate("/");
  //     }
  //   });
  return (
    <div>
      <h1>You are logged out. please Login</h1>
    </div>
  );
}
export default Logout;
