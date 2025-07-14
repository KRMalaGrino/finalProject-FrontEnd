import Navigation from "./Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";

function Header({ isSignedIn }) {
  return (
    <div className="header-searchForm__wrapper">
      <div className="header">
        <p className="header__title">NewsExplorer</p>
        <Navigation isSignedIn={isSignedIn} />
      </div>
      <SearchForm />
    </div>
  );
}

export default Header;
