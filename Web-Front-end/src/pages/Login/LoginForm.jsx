import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import "./components/form.css";

function LoginForm({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_+=-]{10,}$/;
    return passwordRegex.test(password);
  };

  //Xử lí sự kiện khi nhấn nút Login
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

    console.log("Email: ", email);
    console.log("Password: ", password);
    localStorage.setItem("isLoggedIn", "true");
    onLoginSuccess(); // Gọi callback để cập nhật trạng thái
    navigate("/");
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-form">
        <h2 className="login-signup-title">Login</h2>
        <form onSubmit={handleSubmit} noValidate>
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
            <button className="login-signup-button">Login</button>
          </div>

          <div
            className="form-footer-login"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.625rem",
            }}
          >
            <Link to="/signup" className="footer-link">
              Create an account
            </Link>

            <Link to="/password" className="footer-link">
              Forgot Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
