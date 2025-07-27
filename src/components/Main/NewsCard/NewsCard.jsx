import bookmarkNormal from "../../../images/bookmark-normal.png";

function NewsCard({ article }) {
  const { urlToImage, title, description, publishedAt, source } = article;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="news-card">
      <div className="news-card__container">
        <div className="news-card__img-container">
          <img className="news-card__image" src={urlToImage} alt={title} />
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
