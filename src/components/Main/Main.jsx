import NewsCard from "./NewsCard/NewsCard";

function Main({ articles, handleArticleBookmark }) {
  const renderNewsCards = () => {
    return articles.map((article, index) => (
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
      {articles.length > 0 && (
        <button className="main__show-more-btn" type="button">
          Show more
        </button>
      )}
    </div>
  );
}

export default Main;
