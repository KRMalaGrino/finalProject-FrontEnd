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

  return (
    <div className="header-searchForm__wrapper">
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
    </div>
  );
}

export default Header;
