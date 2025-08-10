import NewsCard from "../Main/NewsCard/NewsCard";

function SavedArticles({ articles, handleArticleBookmark }) {
  const renderNewsCards = () => {
    return articles.map((article, index) => (
      <NewsCard
        key={article._id}
        article={article}
        handleArticleBookmark={handleArticleBookmark}
      />
    ));
  };

  return (
    <main className="savedArticles">
      {articles.length > 0 ? (
        <div className="savedArticles__news-card-container">
          {renderNewsCards()}
        </div>
      ) : (
        <div className="savedArticles__no-articles-wrapper">
          <p className="savedArticles__no-articles">No saved articles yet.</p>
        </div>
      )}
    </main>
  );
}

export default SavedArticles;
