import Navigation from "./Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";

function Header({
  isSignedIn,
  openLoginModal,
  userData,
  handleSignOut,
  setActiveView,
}) {
  return (
    <div className="header-searchForm__wrapper">
      <div className="header">
        <p className="header__title">NewsExplorer</p>
        <Navigation
          isSignedIn={isSignedIn}
          openLoginModal={openLoginModal}
          handleSignOut={handleSignOut}
        />
      </div>
      <SearchForm />
    </div>
  );
}

export default Header;
