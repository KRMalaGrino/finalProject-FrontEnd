import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoutWhite from "../../../images/logout-white.svg";
import logoutBlack from "../../../images/logout-black.svg";

function Navigation({
  isSignedIn,
  openLoginModal,
  username,
  handleSignOut,
  isSavedArticlesPage,
  setIsMobileMenuOpen,
}) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    // handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`navigation ${isSavedArticlesPage ? "navigation--saved" : ""}`}
    >
      <div className="navigation__links">
        <Link to="/">
          <button className="navigation__home">Home</button>
        </Link>
        {isSignedIn ? (
          <>
            <Link to="/saved-articles">
              <button className="navigation__saved-articles">
                Saved articles
              </button>
            </Link>
            <div
              className={`navigation__author-wrapper ${
                isSavedArticlesPage ? "navigation__author-wrapper--saved" : ""
              }`}
            >
              <a href="#about" className="navigation__author-link">
                <button className="navigation__author" type="button">
                  {username || "User"}
                </button>
              </a>
              <button
                className="navigation__logout-button"
                onClick={handleSignOut}
              >
                <img
                  className="navigation__exit-icon"
                  src={isSavedArticlesPage ? logoutBlack : logoutWhite}
                  alt="logout icon"
                />
              </button>
            </div>
          </>
        ) : (
          !isMobile && (
            <button className="navigation__sign-in" onClick={openLoginModal}>
              Sign in
            </button>
          )
        )}
      </div>
      {isMobile && (
        <button
          className="navigation__hamburger"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>
      )}
    </nav>
  );
}

export default Navigation;
