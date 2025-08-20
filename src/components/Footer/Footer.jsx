import { useLocation, useNavigate, Link } from "react-router-dom";

import githubIcon from "../../images/github-icon.png";
import instagramIcon from "../../images/instagram-icon.png";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <footer className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>

      {/* ✅ Use nav + ul + li for navigation */}
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <Link to="/" onClick={handleHomeClick} className="footer__link">
              Home
            </Link>
          </li>
          <li className="footer__nav-item">
            <a
              href="https://tripleten.com/home/web/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              TripleTen
            </a>
          </li>
          <li className="footer__nav-item footer__icon-wrapper">
            <a
              href="https://github.com/KRMalaGrino"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img
                className="footer__icon"
                src={githubIcon}
                alt="github icon"
              />
            </a>
          </li>
          <li className="footer__nav-item footer__icon-wrapper">
            <a
              href="https://www.instagram.com/kr_malagrino/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img
                className="footer__icon"
                src={instagramIcon}
                alt="instagram icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;