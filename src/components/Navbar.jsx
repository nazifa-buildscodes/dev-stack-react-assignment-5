import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    window.location.hash || "#home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen((currentState) => !currentState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    closeMenu();
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Hamburger - Mobile */}
        <button
          className="menu-btn"
          onClick={handleMenuClick}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* Brand */}
        <a
          href="#home"
          className="brand"
          onClick={() => handleNavClick("#home")}
        >
          <span className="brand-logo">DS</span>
          <span className="brand-name">Dev Stack</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a
            href="#home"
            className={activeSection === "#home" ? "active" : ""}
            onClick={() => handleNavClick("#home")}
          >
            Home
          </a>

          <a
            href="#technologies"
            className={
              activeSection === "#technologies" ? "active" : ""
            }
            onClick={() => handleNavClick("#technologies")}
          >
            Technologies
          </a>

          <a
            href="#projects"
            className={activeSection === "#projects" ? "active" : ""}
            onClick={() => handleNavClick("#projects")}
          >
            Projects
          </a>

          <a
            href="#about"
            className={activeSection === "#about" ? "active" : ""}
            onClick={() => handleNavClick("#about")}
          >
            About
          </a>

          <a
            href="#contact"
            className={activeSection === "#contact" ? "active" : ""}
            onClick={() => handleNavClick("#contact")}
          >
            Contact
          </a>
        </nav>

        {/* Authentication */}
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav">
          <a
            href="#home"
            className={activeSection === "#home" ? "active" : ""}
            onClick={() => handleNavClick("#home")}
          >
            Home
          </a>

          <a
            href="#technologies"
            className={
              activeSection === "#technologies" ? "active" : ""
            }
            onClick={() => handleNavClick("#technologies")}
          >
            Technologies
          </a>

          <a
            href="#projects"
            className={activeSection === "#projects" ? "active" : ""}
            onClick={() => handleNavClick("#projects")}
          >
            Projects
          </a>

          <a
            href="#about"
            className={activeSection === "#about" ? "active" : ""}
            onClick={() => handleNavClick("#about")}
          >
            About
          </a>

          <a
            href="#contact"
            className={activeSection === "#contact" ? "active" : ""}
            onClick={() => handleNavClick("#contact")}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;