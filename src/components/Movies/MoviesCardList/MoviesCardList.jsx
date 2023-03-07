import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";

import { useEffect, useState } from "react";

export const MoviesCardList = ({ filterMovies, notFoundMovie, checked }) => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    const enterData = JSON.parse(localStorage.getItem("filterMovie"));
    const propFilter = JSON.parse(localStorage.getItem("checkBoxLS"));
    console.log(propFilter);

    // фильтр по продолжительности
    // const shortData = enterData.filter(card => {
    //   return card.duration <= 40 ? card.duration <= 40 : null;
    // });

    // Чекбокс он\офф
    // propFilter
    //   ? setGetData(enterData || filterMovies)
    //   : setGetData(shortData || filterMovies);

    setGetData(enterData || filterMovies);
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
