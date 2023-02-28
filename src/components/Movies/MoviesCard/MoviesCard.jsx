import pic from "../../../images/pic.jpg";
import "./MoviesCard.css";

import { numbetToTime } from "../../../utils/utils";

export const MoviesCard = ({ card }) => {
  return (
    <>
      <li className="card">
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img
            src={`https://api.nomoreparties.co/${card.image.url}`}
            alt={card.nameRU}
            className="card__img"
          />
        </a>

        <div className="card__content">
          <div className="card__info">
            <h2 className="card__title">{card.nameRU}</h2>
            <p className="card__duration">{numbetToTime(card.duration)}</p>
          </div>
          <button
            className="card__like"
            aria-label="Кнопка лайка"
            type="button"
          ></button>
        </div>
      </li>
    </>
  );
};

// export default MoviesCard;
