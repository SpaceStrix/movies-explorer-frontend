import "./MoviesCard.css";

import { useLocation } from "react-router-dom";
import { numbetToTime } from "../../../utils/utils";

export const MoviesCard = ({
  card,
  filterMovies,
  onCardLike,
  onRemoveMovie,
}) => {
  const location = useLocation();

  const isLiked = filterMovies.some(item => item);
  // console.log(card.movieId);

  const cardLikeButtonClassName = `card__like ${
    isLiked ? "card__like_active" : " "
  }`;

  const toggleStateLike = () => {
    if (!isLiked) {
      handleRemoveCard();
    } else {
      handleLikeCard(card);
    }
  };

  const handleLikeCard = () => onCardLike(card);
  const handleRemoveCard = () => onRemoveMovie(card._id);

  const locationImage =
    location.pathname === "/saved-movies"
      ? `${card.image}`
      : `https://api.nomoreparties.co/${card.image.url}`;

  return (
    <>
      <li className="card">
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img src={locationImage} alt={card.nameRU} className="card__img" />
        </a>
        <div className="card__content">
          <div className="card__info">
            <h2 className="card__title">{card.nameRU}</h2>
            <p className="card__duration">{numbetToTime(card.duration)}</p>
          </div>
          <button
            className={cardLikeButtonClassName}
            aria-label="Кнопка лайка"
            type="button"
            onClick={toggleStateLike}
          ></button>
        </div>
      </li>
    </>
  );
};

// export default MoviesCard;
