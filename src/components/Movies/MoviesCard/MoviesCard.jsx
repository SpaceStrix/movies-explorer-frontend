import "./MoviesCard.css";

import { useLocation } from "react-router-dom";
import { numbetToTime } from "../../../utils/utils";

export const MoviesCard = ({
  movie,
  onCardLike,
  onRemoveMovie,
  savedMovies,
}) => {
  const location = useLocation();

  const likedMovie = movie =>
    savedMovies.some(item => item.movieId === movie.id);

  const toggleStateLike = () =>
    likedMovie(movie) ? onRemoveMovie(movie) : onCardLike(movie);

  const onDeleteClickHandler = () => onRemoveMovie(movie);

  return (
    <>
      {location.pathname === "/saved-movies" ? (
        <li className="card">
          <a href={movie.trailerLink} target="_blank" rel="noreferrer">
            <img src={movie.image} alt={movie.nameRU} className="card__img" />
          </a>
          <div className="card__content">
            <div className="card__info">
              <h2 className="card__title">{movie.nameRU}</h2>
              <p className="card__duration">{numbetToTime(movie.duration)}</p>
            </div>
            <button
              className="card__remove"
              aria-label="Кнопка дизлайка"
              type="button"
              onClick={onDeleteClickHandler}
            ></button>
          </div>
        </li>
      ) : (
        <li className="card">
          <a href={movie.trailerLink} target="_blank" rel="noreferrer">
            <img
              src={`https://api.nomoreparties.co/${movie.image.url}`}
              alt={movie.nameRU}
              className="card__img"
            />
          </a>
          <div className="card__content">
            <div className="card__info">
              <h2 className="card__title">{movie.nameRU}</h2>
              <p className="card__duration">{numbetToTime(movie.duration)}</p>
            </div>

            <button
              className={likedMovie(movie) ? "card__like_active" : "card__like"}
              aria-label="Кнопка лайка"
              type="button"
              onClick={toggleStateLike}
            ></button>
          </div>
        </li>
      )}
    </>
  );
};
