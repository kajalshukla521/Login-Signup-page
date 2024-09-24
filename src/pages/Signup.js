import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  // State to handle input values
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State to handle error messages
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Please enter a valid email address.");
      return false;
    }
  };

  // Phone validation function
  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    if (phonePattern.test(phone)) {
      setPhoneError("");
      return true;
    } else {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return false;
    }
  };

  // Password validation function
  const validatePassword = (password) => {
    if (password.length >= 6) {
      setPasswordError("");
      return true;
    } else {
      setPasswordError("Password must be at least 6 characters long.");
      return false;
    }
  };

  // Confirm Password validation function
  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword === password) {
      setConfirmPasswordError("");
      return true;
    } else {
      setConfirmPasswordError("Passwords do not match.");
      return false;
    }
  };

  // Handle form submission
  const handleSignup = (e) => {
    e.preventDefault();
    
    // Perform validation for all fields
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    if (isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
      console.log("Form submitted with:", { email, phone, password });
      // Perform further actions like submitting data to the server
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="container border rounded-3 p-0" style={{ maxWidth: "900px", boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}>
        <div className="row g-0">
          {/* Left Side Image */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://plus.unsplash.com/premium_photo-1665329006421-4e945f91885f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Signup"
              className="img-fluid rounded-start h-100 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Side Signup Form */}
          <div className="col-md-6 p-4">
            <h3 className="text-center mb-4">Sign Up</h3>
            <form onSubmit={handleSignup}>
              {/* Email Input */}
              <div className="form-group mb-3 position-relative">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => validateEmail(email)}
                  />
                </div>
                {emailError && (
                  <div className="text-danger mt-1" style={{ fontSize: "0.9rem" }}>
                    {emailError}
                  </div>
                )}
              </div>

              {/* Phone Number Input */}
              <div className="form-group mb-3 position-relative">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-phone"></i>
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => validatePhone(phone)}
                  />
                </div>
                {phoneError && (
                  <div className="text-danger mt-1" style={{ fontSize: "0.9rem" }}>
                    {phoneError}
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
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => validatePassword(password)}
                  />
                </div>
                {passwordError && (
                  <div className="text-danger mt-1" style={{ fontSize: "0.9rem" }}>
                    {passwordError}
                  </div>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="form-group mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={() => validateConfirmPassword(confirmPassword)}
                  />
                </div>
                {confirmPasswordError && (
                  <div className="text-danger mt-1" style={{ fontSize: "0.9rem" }}>
                    {confirmPasswordError}
                  </div>
                )}
              </div>

              {/* Signup Button */}
              <div className="form-group text-center mb-3">
                <button type="submit" className="btn btn-primary w-50">
                  Sign Up
                </button>
              </div>

              {/* Login Option */}
              <div className="text-center">
                <p className="mb-0">
                  Already have an account?{" "}
                  <a href="Login" className="text-primary fw-bold text-decoration-none">
                    Log in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
