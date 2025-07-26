import { Link } from "react-router-dom";

import logoutWhite from "../../../images/logout-white.png";

function Navigation({ isSignedIn, openLoginModal, username, handleSignOut }) {
  return (
    <nav className="navigation">
      <Link to="/">
        <button className="navigation__home">Home</button>
      </Link>
      {isSignedIn ? (
        <>
          <Link to="/saved-news">
            <button className="navigation__saved-articles">
              Saved articles
            </button>
          </Link>
          <div className="navigation__author-wrapper">
            <Link to="/about">
              <button className="navigation__author" type="button">
                {username || "User"}
              </button>
            </Link>
            <button
              className="navigation__logout-button"
              onClick={handleSignOut}
            >
              <img
                className="navigation__exit-icon"
                src={logoutWhite}
                alt="logout icon"
              />
            </button>
          </div>
        </>
      ) : (
        <button className="navigation__sign-in" onClick={openLoginModal}>
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
