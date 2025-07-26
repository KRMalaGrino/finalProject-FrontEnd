function NewsCard() {
  return (
    <div className="news-card">
      <div className="news-card__container">
        <div className="news-card__img-container">
          <img className="news-card__image" src="" alt="" />
          <img className="news-card__bookmark" src="" alt="" />
          <img className="news-card__sign-in" src="" alt="" />
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
