import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start mt-5">
      {/* Container for the footer content */}
      <div className="container p-4">
        {/* Row */}
        <div className="row">
          {/* Column 1 - About */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              We are a company committed to providing the best services to our
              customers. Contact us for more information and let us know how we
              can help you.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div className="col-lg-3 col-md-6 mb-md-0 text-center">
            <h5 className="text-uppercase">Follow Us</h5>
            {/* Social Media Icons centered below the heading */}
            <div className="d-flex justify-content-center mt-2">
              <a href="#!" className="text-white text-decoration-none mx-3">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="#!" className="text-white text-decoration-none mx-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#!" className="text-white text-decoration-none mx-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#!" className="text-white text-decoration-none mx-3">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Row */}
      </div>

      {/* Copyright Section */}
      <div className="text-center p-3 bg-black">
        <p className="mb-0">© 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
