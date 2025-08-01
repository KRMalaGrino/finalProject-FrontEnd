import { useState } from "react";

import bookmarkUnmarked from "../../../images/bookmark-unmarked.png";
import bookmarkMarked from "../../../images/bookmark-marked.png";

function NewsCard({ article, handleArticleBookmark }) {
  const { _id, urlToImage, title, description, publishedAt, source } = article;
  const [isBookmarked, setIsBookmarked] = useState(
    article.isBookmarked || false
  );

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleBookmarkClick = () => {
    handleArticleBookmark({ _id, isBookmarked })
      .then((updatedArticle) => {
        setIsBookmarked(updatedArticle.isBookmarked);
      })
      .catch((err) => {
        console.error("Bookmark failed:", err);
      });
  };

  return (
    <div className="news-card">
      <div className="news-card__container">
        <div className="news-card__img-container">
          <img className="news-card__image" src={urlToImage} alt={title} />
          <div className="news-card__bookmark-container">
            <img
              className="news-card__bookmark"
              src={isBookmarked ? bookmarkMarked : bookmarkUnmarked}
              alt="bookmark-icon"
              onClick={handleBookmarkClick}
            />
          </div>
          <button className="news-card__sign-in-btn" type="button">
            Sign in to save articles
          </button>
        </div>
        <div className="news-card__text-container">
          <p className="news-card__date">{formattedDate}</p>
          <p className="news-card__title">{title}</p>
          <p className="news-card__description">{description}</p>
          <p className="news-card__source">{source.name}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
