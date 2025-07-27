import newsData from "../../utils/constants";
import NewsCard from "./NewsCard/NewsCard";

function Main({ handleArticleBookmark }) {
  const renderNewsCards = () => {
    return newsData.articles.map((article, index) => (
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
      <button className="main__show-more-btn" type="button">
        Show more
      </button>
    </div>
  );
}

export default Main;
