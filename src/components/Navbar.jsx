import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Hamburger - Mobile */}
        <button
          className="menu-btn"
          onClick={handleMenuClick}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Brand */}
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-logo">DS</span>
          <span className="brand-name">Dev Stack</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#technologies">
            Technologies
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>

        {/* Authentication */}
        <div className="auth-buttons">
          <button className="sign-in">
            Sign In
          </button>

          <button className="sign-up">
            Sign Up
          </button>
        </div>

      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="mobile-nav">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#technologies" onClick={closeMenu}>
            Technologies
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;