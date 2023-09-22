import React from "react";
import '../assests/CSS/Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-column">
          <h6 className="footer-heading">Company</h6>
          <ul className="footer-links">
            <li>About</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Jobs</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="footer-column">
          <h6 className="footer-heading">Solutions</h6>
          <ul className="footer-links">
            <li>About</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Jobs</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="footer-column">
          <h6 className="footer-heading">Documentation</h6>
          <ul className="footer-links">
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h6 className="footer-heading">Legal</h6>
          <ul className="footer-links">
            <li>About</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
