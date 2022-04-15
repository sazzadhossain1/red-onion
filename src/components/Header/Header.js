import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo/logo2.png";
import pathLogo from "../../images/logo/Path 1.png";

const Header = () => {
  return (
    <div>
     
      <div className="header-container">
      <img src={logo} alt="" />
      <div className="children-header">
        <img src={pathLogo} alt="" />
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signUp">SignUp</Link>
      </div>

    </div>
    

    </div>
  );
};

export default Header;
