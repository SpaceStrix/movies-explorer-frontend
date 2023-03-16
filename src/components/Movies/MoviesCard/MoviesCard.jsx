import "./MoviesCard.css";
import React, { useContext } from "react";

import { numbetToTime } from "../../../utils/utils";

export const MoviesCard = ({ card, onCardLike }) => {
  const handleLikeCard = () => onCardLike(card);
  // const isLiked = card.some(i => i._id === currentUser._id);
  // const cardLikeButtonClassName = `element__like ${
  //   isLiked ? "element__like_active" : " "
  // }`;

  return (
    <>
      <li className="card">
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img
            // src={`https://api.nomoreparties.co/${card.image.url}`}
            src={`${card.image}`}
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
            onClick={handleLikeCard}
          ></button>
        </div>
      </li>
    </>
  );
};

// export default MoviesCard;
