import { useState, useEffect } from "react";
import {
  FaSearch,
  FaBell,
  FaBars,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/home" className="logo">
          <span className="logo-red">STREAM</span>
          <span className="logo-white">FLIX</span>
        </Link>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/tv-shows">TV Shows</NavLink>
          <NavLink to="/my-list">My List</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>

        {/* Right Side */}
        <div className="navbar-icons">

          <Link to="/search">
            <FaSearch className="icon" />
          </Link>

          <Link to="/notifications">
            <FaBell className="icon" />
          </Link>

          <Link to="/profile">
            <FaUserCircle className="profile-icon" />
          </Link>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;