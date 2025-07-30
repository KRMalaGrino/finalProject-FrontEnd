import { useState } from "react";

import NewsCard from "./NewsCard/NewsCard";

function Main({ articles, handleArticleBookmark }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const renderNewsCards = () => {
    return articles
      .slice(0, visibleCount)
      .map((article, index) => (
        <NewsCard
          key={index}
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
