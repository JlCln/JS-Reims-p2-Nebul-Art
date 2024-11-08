import { useState } from "react";

import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignUpClick = () => {
    setIsLogin(false);
  };

  const handleValidation = () => {
    if (inputValue.trim() === "") {
      setIsError(true);
    } else {
      setIsError(false);
      alert("Formulaire soumis !");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isError) {
      setInputValue(e.target.value);
      setIsError(false);
    } else {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className="sign-container">
      <div className="toggle-login">
        <div className="form-toggle">
          <button
            type="button"
            className={isLogin ? "active" : ""}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            type="button"
            className={!isLogin ? "active" : ""}
            onClick={handleSignUpClick}
          >
            SignUp
          </button>
        </div>
      </div>

      {isLogin ? (
        <>
          <div className="inputs">
            <h2 className="login-h2"> Login Form </h2>
            <div className="input">
              <input
                type="email"
                placeholder="Email ID"
                value={inputValue}
                onChange={handleChange}
              />
              {isError && (
                <p style={{ color: "red" }}>Le champ ne peut pas être vide.</p>
              )}
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Password"
                value={inputValue}
                onChange={handleChange}
              />
              {isError && (
                <p style={{ color: "red" }}>Le champ ne peut pas être vide.</p>
              )}

              <button type="button" onClick={handleValidation}>
                Login
              </button>
            </div>
            <p style={{ margin: "1rem" }}>Forgot Password ?</p>
            <p>
              Not a member ?
              <button
                type="button"
                onClick={handleSignUpClick}
                className="redirection-btn"
              >
                Signup now
              </button>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="inputs">
            <h2> Signup Form </h2>
            <div className="input">
              <input
                type="Email"
                placeholder="Email Adress"
                value={inputValue}
                onChange={handleChange}
              />
              {isError && (
                <p style={{ color: "red" }}>Le champ ne peut pas être vide.</p>
              )}
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Password"
                value={inputValue}
                onChange={handleChange}
              />
              {isError && (
                <p style={{ color: "red" }}>Le champ ne peut pas être vide.</p>
              )}
            </div>
          </div>

          <div className="input">
            <input
              type="password"
              placeholder="Confirm Password"
              value={inputValue}
              onChange={handleChange}
            />
            {isError && (
              <p style={{ color: "red" }}>Le champ ne peut pas être vide.</p>
            )}
            <button type="button" onClick={handleValidation}>
              Sign Up
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
