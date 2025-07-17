import Navigation from "./Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";

function Header({ isSignedIn, openLoginModal }) {
  return (
    <div className="header-searchForm__wrapper">
      <div className="header">
        <p className="header__title">NewsExplorer</p>
        <Navigation isSignedIn={isSignedIn} openLoginModal={openLoginModal} />
      </div>
      <SearchForm />
    </div>
  );
}

export default Header;
