function SearchForm() {
  return (
    <div className="searchForm__wrapper">
      <h1 className="searchForm__title">What's going on in the world?</h1>
      <p className="searchForm__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="searchForm__form">
        <label className="searchForm__label">
          <input className="searchForm__input" />
          <button className="searchForm__btn">Search</button>
        </label>
      </form>
    </div>
    // form ?
  );
}

export default SearchForm;
