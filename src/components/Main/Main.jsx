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
    <div className="main">
      <p className="main__title">Search results</p>
      <div className="main__news-card-container">
        {articles.slice(0, visibleCount).map((article) => (
          <NewsCard
            key={article._id}
            article={article}
            handleArticleBookmark={handleArticleBookmark}
          />
        ))}
      </div>
      {visibleCount < articles.length && (
        <button
          className="main__show-more-btn"
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default Main;
