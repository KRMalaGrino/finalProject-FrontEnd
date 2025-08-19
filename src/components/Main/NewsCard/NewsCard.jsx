import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import { formatDate } from "../../../utils/apiUtils";

import bookmarkUnmarked from "../../../images/bookmark-unmarked.svg";
import bookmarkMarked from "../../../images/bookmark-marked.svg";
import trashIcon from "../../../images/trash.svg";

function NewsCard({ article, handleArticleBookmark, onDelete }) {
  const {
    _id,
    urlToImage,
    title,
    description,
    publishedAt,
    source,
    isBookmarked,
    keyword,
  } = article;
  const [showTooltip, setShowTooltip] = useState(false);
  const { isSignedIn } = useContext(CurrentUserContext);
  const location = useLocation();
  const isSavedArticlesPage = location.pathname === "/saved-articles";

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
    <section className="news-card">
      <div className="news-card__container">
        <div className="news-card__img-container">
          <img
            className="news-card__image"
            src={urlToImage || null}
            alt={title}
          />

          {keyword && <div className="news-card__keyword">{keyword}</div>}

          <div
            className="news-card__bookmark-container"
            onMouseEnter={() => !isSignedIn && setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button
              className="news-card__bookmark-button"
              onClick={() => {
                if (isSavedArticlesPage && onDelete) {
                  onDelete(article._id);
                } else {
                  handleBookmarkClick();
                }
              }}
              type="button"
              disabled={!isSignedIn}
            >
              <img
                className="news-card__bookmark-icon"
                src={
                  isSavedArticlesPage
                    ? trashIcon
                    : isBookmarked
                    ? bookmarkMarked
                    : bookmarkUnmarked
                }
                alt={
                  isSavedArticlesPage
                    ? "Delete"
                    : isBookmarked
                    ? "Saved"
                    : "Save"
                }
              />
            </button>
            {!isSignedIn && showTooltip && (
              <div className="news-card__tooltip">Sign in to save articles</div>
            )}
          </div>
        </div>
        <div className="news-card__text-container">
          <p className="news-card__date">{formatDate(publishedAt)}</p>
          <h1 className="news-card__title">{title}</h1>
          <p className="news-card__description">{description}</p>
          <p className="news-card__source">{source.name}</p>
        </div>
      </div>
    </section>
  );
}

export default NewsCard;
