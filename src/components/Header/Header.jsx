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

  const wrapperClassName = `header ${
    isSavedArticlesPage ? "header--saved" : ""
  }`;

  return (
    <div
      className={
        isSavedArticlesPage
          ? "header-savedArticles__wrapper"
          : "header-searchForm__wrapper"
      }
    >
      <div className={wrapperClassName}>
        <Link to="/" className="header__link">
          <p className="header__title">NewsExplorer</p>
        </Link>
        <Navigation
          isSignedIn={isSignedIn}
          openLoginModal={openLoginModal}
          handleSignOut={handleSignOut}
          username={userData?.name}
          isSavedArticlesPage={isSavedArticlesPage}
        />
      </div>

      {isHomePage && <SearchForm onSearch={onSearch} />}

      {isSavedArticlesPage && (
        <div className="header__saved-title-container">
          <p className="header__saved-title">Saved articles</p>
          <p className="header__total">Ryan, you have __ saved articles</p>
          <p className="header__keywords">
            By keywords: <span className="header__keywords-bold">keyword, keyword and __ others</span>
          </p>
          {/* <p className="header__total">{`${user}, you have ${total} saved articles`}</p>
          <p>{`By keywords: ${keywords} and ${total-left} others`}</p> */}
        </div>
      )}
    </div>
  );
}

export default Header;
