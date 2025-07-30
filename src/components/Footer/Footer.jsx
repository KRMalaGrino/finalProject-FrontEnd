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
    <div className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <div className="footer__link-wrapper">
        <Link to="/">
          <button
            className="footer__link-text"
            type="button"
            onClick={handleHomeClick}
          >
            Home
          </button>
        </Link>
        <a
          href="https://tripleten.com/home/web/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__a"
        >
          <button className="footer__link-text" type="button">
            TripleTen
          </button>
        </a>
        <div className="footer__icon-wrapper">
          <a
            href="https://github.com/KRMalaGrino"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__a"
          >
            <img className="footer__icon" src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://www.instagram.com/kr_malagrino/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__a"
          >
            <img
              className="footer__icon"
              src={instagramIcon}
              alt="facebook icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
