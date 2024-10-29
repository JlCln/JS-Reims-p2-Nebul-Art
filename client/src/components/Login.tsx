import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignUpClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="container">
      <div className="toggle">
        <div className="form-toggle">
          <button
            type="button"
            className={isLogin ? "active" : ""}
            onClick={handleLoginClick}
          > Login
</button>
          <button
            type="button"
            className={!isLogin ? "active" : ""}
            onClick={handleSignUpClick}
          >
            signup
          </button>
        </div>
      </div>

      {isLogin ? (
        <>
          <div className="inputs">
            <h2> Login Form </h2>
            <div className="input">
              <input type="email" placeholder="Email Address" />
            </div>
          </div>
          <div className="input">
            <input type="password" placeholder="Password" />

            <a href=" http://localhost:3001/"> Forgot Password ? </a>

            <button type="button">Login</button>
            <p>
              Not a member ?
              <a href=" http://localhost:3001/" onClick={handleSignUpClick}> Signup now
              </a>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="inputs">
            <h2> Signup Form </h2>
            <div className="input">
              <input type="email" placeholder="Email Address" />
            </div>
          </div>
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>

          <div className="input">
            <input type="password" placeholder="Confirm Password" />
            <button type="button">Sign Up</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
