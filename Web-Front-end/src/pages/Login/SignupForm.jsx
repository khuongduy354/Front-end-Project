import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UsernameInput from "./components/UsernameInput";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import "./components/form.css";

function SignupForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");

  //Hàm kiểm tra email hợp lệ hay không
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //Xử lí sự kiện khi nhấn nút Signup
  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError(false);

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      setEmailError(true);
      return;
    }

    console.log("Username: ", username);
    console.log("Email: ", email);
    console.log("Password: ", password);
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
