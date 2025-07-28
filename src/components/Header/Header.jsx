import Navigation from "./Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";

function Header({
  isSignedIn,
  openLoginModal,
  userData,
  handleSignOut,
  onSearch,
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
      <SearchForm onSearch={onSearch} />
    </div>
  );
}

export default Header;
