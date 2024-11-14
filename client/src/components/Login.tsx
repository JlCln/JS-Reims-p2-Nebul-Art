import { useState } from "react";
import "./Login.css";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loginEmailError, setLoginEmailError] = useState(false);
  const [loginPasswordError, setLoginPasswordError] = useState(false);
  const [signupEmailError, setSignupEmailError] = useState(false);
  const [signupPasswordError, setSignupPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
    resetSignupFormFields();
  };

  const handleSignUpClick = () => {
    setIsLogin(false);
    resetLoginFormFields();
  };

  const resetLoginFormFields = () => {
    setLoginEmail("");
    setLoginPassword("");
    setLoginEmailError(false);
    setLoginPasswordError(false);
  };

  const resetSignupFormFields = () => {
    setSignupEmail("");
    setSignupPassword("");
    setConfirmPassword("");
    setSignupEmailError(false);
    setSignupPasswordError(false);
    setConfirmPasswordError(false);
  };

  const handleLoginValidation = () => {
    setLoginEmailError(false);
    setLoginPasswordError(false);

    let isValid = true;

    if (loginEmail.trim() === "") {
      setLoginEmailError(true);
      isValid = false;
    }

    if (loginPassword.trim() === "") {
      setLoginPasswordError(true);
      isValid = false;
    }

    if (isValid) {
      alert("Connexion réussie !");
    }
  };

  const handleSignupValidation = () => {
    setSignupEmailError(false);
    setSignupPasswordError(false);
    setConfirmPasswordError(false);

    let isValid = true;

    if (signupEmail.trim() === "") {
      setSignupEmailError(true);
      isValid = false;
    }

    if (signupPassword.trim() === "") {
      setSignupPasswordError(true);
      isValid = false;
    }

    if (confirmPassword.trim() === "") {
      setConfirmPasswordError(true);
      isValid = false;
    }

    if (signupPassword !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      isValid = false;
    }

    if (isValid) {
      alert("Inscription réussie !");
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
            Sign Up
          </button>
        </div>
      </div>

      {isLogin ? (
        <div className="inputs">
          <h2 className="login-h2">Login Form</h2>
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            {loginEmailError && (
              <p style={{ color: "red" }}>Le champ ne peut pas être vide.</p>
            )}
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            {loginPasswordError && (
              <p style={{ color: "red" }}>Le champ ne peut pas être vide.</p>
            )}

            <button type="button" onClick={handleLoginValidation}>
              Login
            </button>
          </div>
          <p style={{ margin: "1rem" }}>Forgot Password?</p>
          <p>
            Not a member?
            <button
              type="button"
              onClick={handleSignUpClick}
              className="redirection-btn"
            >
              Sign up now
            </button>
          </p>
        </div>
      ) : (
        <div className="inputs">
          <h2 className="signup-h2">SignUp Form</h2>
          <div className="input">
            <input
              type="email"
              placeholder="Email Address"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            {signupEmailError && (
              <p style={{ color: "red" }}>Le champ ne peut pas être vide.</p>
            )}
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            {signupPasswordError && (
              <p style={{ color: "red" }}>Le champ ne peut pas être vide.</p>
            )}
          </div>

          <div className="input">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && (
              <p style={{ color: "red" }}>Le champ ne peut pas être vide.</p>
            )}

            <button type="button" onClick={handleSignupValidation}>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
