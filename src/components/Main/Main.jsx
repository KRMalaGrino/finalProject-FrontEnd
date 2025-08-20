import { useState, useEffect, useRef } from "react";

import NewsCard from "./NewsCard/NewsCard";

function Main({ articles, handleArticleBookmark, currentSearchKeyword }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const prevKeyword = useRef(currentSearchKeyword);

  useEffect(() => {
    if (prevKeyword.current !== currentSearchKeyword) {
      setVisibleCount(3);
      prevKeyword.current = currentSearchKeyword;
    }
  }, [currentSearchKeyword]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, articles.length));
  };

  return (
    <main className="main">
      <h1 className="main__title">Search results</h1>
      <ul className="main__news-card-container">
        {articles.slice(0, visibleCount).map((article) => (
          <li key={article._id} className="main__news-card-item">
            <NewsCard
              article={article}
              handleArticleBookmark={handleArticleBookmark}
            />
          </li>
        ))}
      </ul>
      {visibleCount < articles.length && (
        <button
          className="main__show-more-btn"
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </main>
  );
}

export default Main;
