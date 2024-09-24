// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black py-3 shadow-sm">
      <div className="container">
        {/*  Add Left Side logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0"
            alt="Logo"
            style={{ height: "40px" }}
          />
        </Link>

        {/* Right Side Search and Login/Signup Links */}
        <div className="d-flex align-items-center">
          <div className="input-group me-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              style={{ minWidth: "200px" }}
            />
            <span className="input-group-text bg-white" id="search-addon">
              <i className="bi bi-search"></i>
            </span>
          </div>

          {/* Login and Signup Links */}
          <Link
            to="/login"
            className="text-white mx-3"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white mx-3"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
