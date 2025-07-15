import { Link } from "react-router-dom";

import logoutWhite from "../../../images/logout-white.png";

function Navigation({ isSignedIn }) {
  return (
    <nav className="navigation">
      <Link to="/">
        <button className="navigation__home">Home</button>
      </Link>
      {isSignedIn ? (
        <>
          <button className="navigation__saved-articles">Saved articles</button>
          <div className="navigation__author-wrapper">
            <Link to="/about">
              <button className="navigation__author" type="button">
                Ryan
              </button>
            </Link>
            <img
              className="navigation__exit-icon"
              src={logoutWhite}
              alt="logout icon"
            />
          </div>
        </>
      ) : (
        <button className="navigation__sign-in">Sign in</button>
      )}
    </nav>
  );
}

export default Navigation;
