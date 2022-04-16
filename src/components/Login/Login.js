import React, { useState } from "react";
import logo from "../../images/logo/logo2.png";
import "./Login.css";
import googleLogo from "../../images/google.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="input-container">
      <img src={logo} alt="" />
      <div className="input-area">
        <form>
          <h3>Please Login</h3>
          <input type="text" placeholder="Name" />
          <input
            onBlur={handleEmailBlur}
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
          />
          <input
          onBlur={handlePasswordBlur}
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />
          <input type="submit" value="Login" />
          <button>Login</button>
        </form>
        <p className="navigate-to-login">
          New to Red Onion? <Link to="/signUp">Create an Account</Link>
        </p>
        <div>
          <button className="google-button">
            <img src={googleLogo} alt="" /> <p>Countinue With Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
