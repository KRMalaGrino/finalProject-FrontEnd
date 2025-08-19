import NewsCard from "../Main/NewsCard/NewsCard";

function SavedArticles({
  articles,
  handleArticleBookmark,
  handleDeleteArticle,
}) {
  // const renderNewsCards = () => {
  //   return articles.map((article, index) => (
  //     <NewsCard
  //       key={article._id}
  //       article={article}
  //       handleArticleBookmark={handleArticleBookmark}
  //       onDelete={handleDeleteArticle}
  //     />
  //   ));
  // };

  return (
    <main className="savedArticles">
      {articles.length > 0 ? (
        <div className="savedArticles__news-card-container">
          {articles.map((article) => (
            <NewsCard
              key={article._id}
              article={article}
              handleArticleBookmark={handleArticleBookmark}
              onDelete={handleDeleteArticle}
            />
          ))}
        </div>
      ) : (
        <div className="savedArticles__no-articles-wrapper">
          <h1 className="savedArticles__no-articles">No saved articles yet.</h1>
        </div>
      )}
    </main>
  );
}

export default SavedArticles;
