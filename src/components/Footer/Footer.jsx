import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}

        <div className="footer-brand">

          <h2>
            <span className="red">STREAM</span>
            <span className="white">FLIX</span>
          </h2>

          <p>
            Watch unlimited movies, TV shows, and exclusive originals anytime,
            anywhere.
          </p>

        
            <div className="social-icons">

  <a
    href="https://www.facebook.com/login"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/accounts/login/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://x.com/i/flow/login"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
  >
    <FaTwitter />
  </a>

  <a
    href="https://accounts.google.com/ServiceLogin?service=youtube"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>

  <a
    href="https://github.com/login"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

</div>
        </div>

        {/* Navigation */}

        <div className="footer-links">

          <h3>Navigation</h3>

          <Link to="/">Home</Link>

          <Link to="/movies">Movies</Link>

          <Link to="/tv-shows">TV Shows</Link>

          <Link to="/my-list">My List</Link>

          <Link to="/search">Search</Link>

        </div>

        {/* Support */}

        <div className="footer-links">

          <h3>Support</h3>

          <Link to="/profile">Profile</Link>

          <Link to="/settings">Settings</Link>

          <Link to="/login">Login</Link>

          <Link to="/signup">Sign Up</Link>

        </div>

        {/* Contact */}

        <div className="footer-links">

          <h3>Contact</h3>

          <p>Email</p>

          <p>support@streamflix.com</p>

          <p>Available 24/7</p>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} StreamFlix. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;