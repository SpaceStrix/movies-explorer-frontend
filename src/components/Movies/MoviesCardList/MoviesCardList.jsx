import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";

import { useEffect, useState } from "react";

export const MoviesCardList = ({ filterMovies, notFoundMovie }) => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    setGetData(JSON.parse(localStorage.getItem("filterMovie")) || filterMovies);
  }, [filterMovies]);

  return (
    <section className="moviecardlist">
      <div className="moviecardlist-container">
        {notFoundMovie ? (
          <p className="moviecardlist-notfound">«Ничего не найдено»</p>
        ) : (
          <ul className="moviecardlist__items">
            {getData.map(card => {
              return <MoviesCard card={card} key={card.id} />;
            })}
          </ul>
        )}

        {/* <ul className="moviecardlist__items">
          {getData.map(card => {
            return <MoviesCard card={card} key={card.id} />;
          })}
        </ul>
        <p className="notFoundMovie">{notFoundMovie}</p> */}
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
