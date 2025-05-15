import React from 'react';
import '../Styles/Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Column */}
        <div className="footer-about">
          <h2>Aldgate Recruitment</h2>
          <p>
            Connecting top-tier talent with London's leading businesses in hospitality,
            food & beverage, and corporate sectors.
          </p>
        </div>

        {/* Center Column - Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/why-us">Why Choose Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Column - Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt /> <a href="tel:+442037456756">020 3745 6756</a></p>
          <p><FaEnvelope /> <a href="mailto:info@aldgaterecruitment.co.uk">info@aldgaterecruitment.co.uk</a></p>
          <p><FaMapMarkerAlt /> London, UK</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aldgate Recruitment. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
