import Navigation from "./Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";

function Header() {
  return (
    <div className="header-searchForm__wrapper">
      <div className="header">
        <p className="header__title">NewsExplorer</p>
        <Navigation />
      </div>
      <SearchForm />
    </div>
  );
}

export default Header;
