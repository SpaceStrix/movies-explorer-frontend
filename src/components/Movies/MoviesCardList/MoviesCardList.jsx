import "./MoviesCardList.css";

import { useState } from "react";

import { MoviesCard } from "../MoviesCard/MoviesCard";
import { Preloader } from "../../Preloader/Preloader";

export const MoviesCardList = ({ moviesAll }) => {
  const [loading, setLoading] = useState(true); // Состояние загрузки

  return (
    <section className="moviecardlist">
      <div className="moviecardlist-container">
        <ul className="moviecardlist__items">
          {moviesAll.map(card => {
            return <MoviesCard card={card} key={card.id} />;
          })}
        </ul>
        <div className="moviecardlist__more">
          <button
            type="button"
            className="moviecardlist__more-btn btn btn_effect"
          >
            Еще
          </button>
        </div>
      </div>
    </section>
  );
};
