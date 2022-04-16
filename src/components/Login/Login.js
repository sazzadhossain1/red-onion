import React, { useState } from "react";
import logo from "../../images/logo/logo2.png";
import "./Login.css";
import googleLogo from "../../images/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../fiebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';



  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserSignIn = event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }


  if (loading) {
    return <p>Loading...</p>;
  } 
  if(user){
    navigate(from, {replace: true});
  }
  return (
    <div className="input-container">
      <img src={logo} alt="" />
      <div className="input-area">
        <form onSubmit={handleUserSignIn}>
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
          <p style={{color: 'red'}}>{error?.message}</p>
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
