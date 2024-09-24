import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../globalcomponent/Header";
import Footer from "../globalcomponent/Footer";

const Login = () => {
  // heare define State to handle input values and validation errors

  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState(""); // State to handle password error

  // Function to validate email or phone number

  const validateInput = (value) => {
    // email validation code is heare

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //  phone number validation code heare

    const phonePattern = /^[0-9]{10}$/;

    if (emailPattern.test(value) || phonePattern.test(value)) {
        // Clear error if valid
      setError(""); 
      return true;
    } else {
      setError("Please enter a valid email or phone number.");
      return false;
    }
  };

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();



    // Validate email/phone input
    const isEmailPhoneValid = validateInput(emailPhone);

    
    // Validate password input
    if (!password) {
      setPasswordError("Password is required.");
    } else {
      setPasswordError(""); // Clear error if valid
    }

    // Proceed with login if both fields are valid
    if (isEmailPhoneValid && password) {
      console.log("Logging in with:", emailPhone, password);
      // Reset form or perform any further actions
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="container border rounded-3 p-0"
        style={{ maxWidth: "900px", boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}
      >
        <div className="row g-0">
          {/* Left Side Image */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Login"
              className="img-fluid rounded-start h-100 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Side Login Form */}
          <div className="col-md-6 p-4">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleLogin}>
              {/* Email/Phone Input */}
              <div className="form-group mb-3 position-relative">
                <label htmlFor="emailPhone" className="form-label">
                  Email or Phone Number
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="emailPhone"
                    placeholder="Enter email or phone number"
                    value={emailPhone}
                    onChange={(e) => setEmailPhone(e.target.value)}
                  />
                </div>
                {error && (
                  <div
                    className="text-danger mt-1"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {error}
                  </div>
                )}
              </div>

              {/* Password Input */}
              <div className="form-group mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {passwordError && (
                  <div
                    className="text-danger mt-1"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {passwordError}
                  </div>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="d-flex justify-content-end mb-3">
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <div className="form-group text-center mb-5">
                <button type="submit" className="btn btn-secondary w-100">
                  Log In
                </button>
              </div>
            </form>

            <div className="text-center">
              <div className="text-center">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button
                    type="button"
                    className="btn btn-danger w-100 mb-2">
                    <i className="fab fa-google me-3"></i> Login with Google
                  </button>
                </a>
              </div>

              <button
                type="button"
                className="btn btn-primary w-100 mb-2">
                <i className="fab fa-facebook-f me-2"></i> Login with Facebook
              </button>
              
              <button type="button" className="btn btn-info w-100">
                <i className="fab fa-twitter me-3"></i> Login with Twitter
              </button>
            </div>

            {/* Sign Up Option */}
            <div className="text-center mt-4">
              <p className="mb-0">
                Don't have an account?{" "}
                <a
                  href="Signup"
                  className="text-primary fw-bold text-decoration-none"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
