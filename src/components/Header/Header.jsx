import { useLocation, Link } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";

function Header({
  isSignedIn,
  openLoginModal,
  userData,
  handleSignOut,
  onSearch,
  savedArticlesCount,
  savedKeywords = [],
  setIsMobileMenuOpen,
}) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isSavedArticlesPage = location.pathname === "/saved-articles";

  const wrapperClassName = `header ${
    isSavedArticlesPage ? "header--saved" : ""
  }`;

  return (
    <header
      className={
        isSavedArticlesPage
          ? "header__saved-articles-wrapper"
          : "header__search-form-wrapper"
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
          username={userData?.username}
          isSavedArticlesPage={isSavedArticlesPage}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      {isHomePage && <SearchForm onSearch={onSearch} />}

      {isSavedArticlesPage && (
        <div className="header__saved-title-container">
          <p className="header__saved-title">Saved articles</p>
          <p className="header__total">
            {userData?.username || "User"}, you have {savedArticlesCount} saved{" "}
            {savedArticlesCount === 1 ? "article" : "articles"}
          </p>
          <p className="header__keywords">
            By keywords:{" "}
            <span className="header__keywords--bold">
              {savedKeywords.length === 0
                ? "No keywords"
                : savedKeywords.length === 1
                ? savedKeywords[0]
                : savedKeywords.length === 2
                ? `${savedKeywords[0]} and ${savedKeywords[1]}`
                : `${savedKeywords[0]}, ${savedKeywords[1]} and ${
                    savedKeywords.length - 2
                  } others`}
            </span>
          </p>
          {/* <p className="header__total">{`${user}, you have ${total} saved articles`}</p>
          <p>{`By keywords: ${keywords} and ${total-left} others`}</p> */}
        </div>
      )}
    </header>
  );
}

export default Header;
