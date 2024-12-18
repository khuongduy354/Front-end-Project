import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UsernameInput from "./components/UsernameInput";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import "./components/form.css";

function SignupForm({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  //Hàm kiểm tra email hợp lệ hay không
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_+=-]{7,}$/;
    return passwordRegex.test(password);
  };

  //Xử lí sự kiện khi nhấn nút Signup
  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      setEmailError(true);
      return;
    }

    const isPasswordValid = validatePassword(password);
    if (!isPasswordValid) {
      setPasswordError(true);
      return;
    }

    console.log("Username: ", username);
    console.log("Email: ", email);
    console.log("Password: ", password);
    localStorage.setItem("isLoggedIn", "true");
    onLoginSuccess();
    navigate("/");
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-form">
        <h2 className="login-signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit} noValidate>
          <UsernameInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <EmailInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />

          <div className="button-container">
            <button className="login-signup-button">Sign Up</button>
          </div>

          <div
            className="form-footer-signup"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "0.625rem",
            }}
          >
            <Link to="/login" className="footer-link">
              Already have an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
