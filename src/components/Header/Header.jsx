import { useLocation, Link } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";

function Header({
  isSignedIn,
  openLoginModal,
  userData,
  handleSignOut,
  onSearch,
}) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isSavedArticlesPage = location.pathname === "/saved-articles";

  return (
    <div
      className={
        isSavedArticlesPage
          ? "header-savedArticles__wrapper"
          : "header-searchForm__wrapper"
      }
    >
      <div className="header">
        <Link to="/" className="header__link">
          <p className="header__title">NewsExplorer</p>
        </Link>
        <Navigation
          isSignedIn={isSignedIn}
          openLoginModal={openLoginModal}
          handleSignOut={handleSignOut}
          username={userData?.name}
        />
      </div>

      {isHomePage && <SearchForm onSearch={onSearch} />}

      {isSavedArticlesPage && (
        <div className="header__saved-title-container">
          <h2 className="header__saved-title">Saved articles</h2>
        </div>
      )}
    </div>
  );
}

export default Header;
