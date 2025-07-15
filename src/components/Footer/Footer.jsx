import { Link } from "react-router-dom";

import githubIcon from "../../images/github-icon.png";
import facebookIcon from "../../images/facebook-icon.png";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <div className="footer__link-wrapper">
        <Link>
          <button className="footer__link-text" type="button">
            Home
          </button>
        </Link>
        <Link>
          <button className="footer__link-text" type="button">
            TripleTen
          </button>
        </Link>
        <div className="footer__icon-wrapper">
          <Link>
            <img className="footer__icon" src={githubIcon} alt="github icon" />
          </Link>
          <Link>
            <img
              className="footer__icon"
              src={facebookIcon}
              alt="facebook icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
