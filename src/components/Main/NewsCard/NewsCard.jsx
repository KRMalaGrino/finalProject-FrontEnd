import { useState, useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import { formatDate } from "../../../utils/apiUtils";

import bookmarkUnmarked from "../../../images/bookmark-unmarked.png";
import bookmarkMarked from "../../../images/bookmark-marked.png";

function NewsCard({ article, handleArticleBookmark }) {
  const {
    _id,
    urlToImage,
    title,
    description,
    publishedAt,
    source,
    isBookmarked,
  } = article;
  const [showTooltip, setShowTooltip] = useState(false);
  const { isSignedIn } = useContext(CurrentUserContext);

  const handleBookmarkClick = () => {
    if (!isSignedIn) return;
    handleArticleBookmark(article)
      .catch((err) => {
        console.error("Bookmark failed:", err);
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
          <div
            className="news-card__bookmark-container"
            onMouseEnter={() => !isSignedIn && setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button
              className="news-card__bookmark-button"
              onClick={handleBookmarkClick}
              type="button"
              disabled={!isSignedIn}
            >
              <img
                className="news-card__bookmark-icon"
                src={isBookmarked ? bookmarkMarked : bookmarkUnmarked}
                alt={isBookmarked ? "Saved" : "Save"}
              />
            </button>
            {!isSignedIn && showTooltip && (
              <div className="news-card__tooltip">Sign in to save articles</div>
            )}
          </div>
        </div>
        <div className="news-card__text-container">
          <p className="news-card__date">{formatDate(publishedAt)}</p>
          <p className="news-card__title">{title}</p>
          <p className="news-card__description">{description}</p>
          <p className="news-card__source">{source.name}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
