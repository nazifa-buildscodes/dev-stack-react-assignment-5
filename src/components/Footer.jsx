const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="brand-logo">DS</span>
            <span className="brand-name">Dev Stack</span>
          </a>

          <p>
            Curated tools, technologies, and resources
            for developers building modern software.
          </p>

          <div className="social-links">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h4>PRODUCT</h4>

          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#technologies">Projects</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>COMPANY</h4>

          <a href="#home">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Careers</a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h4>LEGAL</h4>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;