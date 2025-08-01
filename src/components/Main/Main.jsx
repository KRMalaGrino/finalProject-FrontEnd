import { useState, useEffect } from "react";

import NewsCard from "./NewsCard/NewsCard";

function Main({ articles, handleArticleBookmark }) {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setVisibleCount(3);
  }, [articles]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, articles.length));
  };

  const renderNewsCards = () => {
    return articles
      .slice(0, visibleCount)
      .map((article) => (
        <NewsCard
          key={article._id}
          article={article}
          handleArticleBookmark={handleArticleBookmark}
        />
      ));
  };

  return (
    <div className="main">
      <p className="main__title">Search results</p>
      <div className="main__news-card-container">{renderNewsCards()}</div>
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
