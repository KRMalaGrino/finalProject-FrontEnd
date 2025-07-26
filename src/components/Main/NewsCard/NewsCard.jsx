import bookmarkNormal from "../../../images/bookmark-normal.png";

function NewsCard() {
  return (
    <div className="news-card">
      <div className="news-card__container">
        <div className="news-card__img-container">
          <img
            className="news-card__image"
            src="https://www.channelhouse.com/wp-content/uploads/sites/31/2021/11/Ben-Jones-Bridge-1024x768-1.jpeg"
            alt="news-picture"
          />
          <div className="news-card__bookmark-container">
            <img
              className="news-card__bookmark"
              src={bookmarkNormal}
              alt="bookmark-normal"
            />
          </div>
          <p className="news-card__sign-in">Sign in to save articles</p>
        </div>
        <div className="news-card__text-container">
          <p className="news-card__date"></p>
          <p className="news-card__title"></p>
          <p className="news-card__description"></p>
          <p className="news-card__source"></p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
