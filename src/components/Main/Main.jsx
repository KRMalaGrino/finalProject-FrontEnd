import newsData from "../../utils/constants";
import NewsCard from "./NewsCard/NewsCard";

function Main() {
  const renderNewsCards = () => {
    return newsData.articles.map((article, index) => (
      <NewsCard key={index} article={article} />
    ));
  };

  return (
    <div className="main">
      <p className="main__title">Search results</p>
      <div className="main__news-card-container">{renderNewsCards()}</div>
      <button className="main__show-more-btn">Show more</button>
    </div>
  );
}

export default Main;
