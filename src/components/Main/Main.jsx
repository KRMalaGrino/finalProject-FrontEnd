import NewsCard from "./NewsCard/NewsCard";

function Main() {
  return (
    <div className="main">
      <p className="main__title">Search results</p>
      <div className="main__news-card-container">
        <NewsCard />
      </div>
      <button className="main__show-more-btn">Show more</button>
    </div>
  );
}

export default Main;
