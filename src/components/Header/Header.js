import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo/logo2.png";
import pathLogo from "../../images/logo/Path 1.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../fiebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div>
     
      <div className="header-container">
      <img src={logo} alt="" />
      <div className="children-header">
        <img src={pathLogo} alt="" />
        <Link to="/">Home</Link>
        <Link to="/signUp">SignUp</Link>

        {
          user ?
          <Link className="signOut-button" onClick={handleSignOut} to="/login">Sign Out</Link>
          
          :
          <Link to="/login">Login</Link>

        }
      </div>

    </div>
    

    </div>
  );
};

export default Header;
