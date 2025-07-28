import { useState } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleInputChange(e) {
    setQuery(e.target.value);
    if (error) setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (query.trim() === "") {
      setError("Please enter a keyword");
      return;
    }

    setError("");
    onSearch(query);
  }

  return (
    <div className="searchForm__wrapper">
      <h1 className="searchForm__title">What's going on in the world?</h1>
      <p className="searchForm__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form
        className="searchForm__form"
        id="searchForm"
        onSubmit={handleSubmit}
      >
        <label className="searchForm__label" htmlFor="search-form">
          <input
            className="searchForm__input"
            type="search"
            id="search-form"
            name="search-form"
            placeholder="Enter topic"
            value={query}
            onChange={handleInputChange}
          />
          <button className="searchForm__btn" type="submit">
            Search
          </button>
        </label>
        {error && <span className="searchForm__error">{error}</span>}
      </form>
    </div>
  );
}

export default SearchForm;
