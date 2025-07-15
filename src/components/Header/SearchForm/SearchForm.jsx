function SearchForm() {
  return (
    <div className="searchForm__wrapper">
      <h1 className="searchForm__title">What's going on in the world?</h1>
      <p className="searchForm__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="searchForm__form" id="searchForm">
        <label className="searchForm__label" htmlFor="search-form">
          <input
            className="searchForm__input"
            type="search-form"
            id="search-form"
            name="search-form"
            placeholder="Enter topic"
          />
          <button className="searchForm__btn" type="submit">
            Search
          </button>
        </label>
      </form>
    </div>
  );
}

export default SearchForm;
