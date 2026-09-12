import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "Technologies",
    target: "technologies",
  },
  {
    label: "Projects",
    target: "technologies",
  },
  {
    label: "About",
    target: "home",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "technologies", "contact"];

      let currentSection = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 140;

          if (window.scrollY >= sectionTop) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (target) => {
    setActiveSection(target);
    setMenuOpen(false);

    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMenuClick = () => {
    setMenuOpen((previousState) => !previousState);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Mobile Menu Button */}
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
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("home");
          }}
        >
          <span className="brand-logo">DS</span>
          <span className="brand-name">Dev Stack</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.target}`}
              className={
                activeSection === item.target &&
                item.label !== "Projects" &&
                item.label !== "About"
                  ? "active"
                  : ""
              }
              onClick={(event) => {
                event.preventDefault();
                handleNavClick(item.target);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.target}`}
              className={
                activeSection === item.target &&
                item.label !== "Projects" &&
                item.label !== "About"
                  ? "active"
                  : ""
              }
              onClick={(event) => {
                event.preventDefault();
                handleNavClick(item.target);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;