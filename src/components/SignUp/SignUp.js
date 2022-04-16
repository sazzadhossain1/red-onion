import React, { useState } from "react";
import logo from "../../images/logo/logo2.png";
import googleLogo from "../../images/google.png";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../fiebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };


if(user){
    navigate('/')
}

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    }
    if (password.length < 6) {
      setError("password must be 6 characters or longer");
    }


    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="input-container">
      <img src={logo} alt="" />
      <div className="input-area">
        <form onSubmit={handleCreateUser}>
          <h3>Please SignUp</h3>
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
          <input
            onBlur={handleConfirmPasswordBlur}
            type="password"
            name=""
            id=""
            placeholder=" Confirm Password"
            required
          />
          <p style={{ color: "red" }}>{error}</p>

          <button>SignUp</button>
        </form>
        <p className="navigate-to-signUp">
          Already have an Account? <Link to="/login">Login</Link>
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

export default SignUp;
