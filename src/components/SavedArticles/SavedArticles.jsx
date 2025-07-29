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
      <div className="savedArticles__news-card-container">
        {renderNewsCards()}
      </div>
      {articles.length > 0 ? (
        renderNewsCards()
      ) : (
        <p className="savedArticles__no-articles">No saved articles yet.</p>
      )}
    </main>
  );
}

export default SavedArticles;
