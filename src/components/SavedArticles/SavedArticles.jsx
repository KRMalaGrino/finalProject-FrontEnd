import NewsCard from "../Main/NewsCard/NewsCard";

function SavedArticles({ articles, handleArticleBookmark }) {
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
    <main className="savedArticles">
      {articles.length > 0 ? (
        <div className="savedArticles__news-card-container">
          {renderNewsCards()}
        </div>
      ) : (
        <p className="savedArticles__no-articles">No saved articles yet.</p>
      )}
    </main>
  );
}

export default SavedArticles;
