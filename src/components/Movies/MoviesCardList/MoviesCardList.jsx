import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";

import {
  LARGE_SCREEN,
  MEDIUM_SCREEN,
  SMALL_SCREEN,
} from "../../../utils/constants";

export const MoviesCardList = ({
  filterMovies,
  notFoundMovie,
  onCardLike,
  onRemoveMovie,
  isSaved,
  savedMovies,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [addMore, setAddMore] = useState(0);
  const [sliceData, setSliceData] = useState([]);
  const [hiddenButton, setHiddenButton] = useState(false);

  useEffect(() => {
    const handleResize = e => {
      setWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const len = filterMovies.length;
  useEffect(() => {
    if (width >= LARGE_SCREEN.MIN_WIDTH) {
      setSliceData(filterMovies.slice(0, LARGE_SCREEN.START_CARD));
      setAddMore(LARGE_SCREEN.ADD_CARD);
      if (filterMovies.length > LARGE_SCREEN.START_CARD) {
        setHiddenButton(true);
      }
    }
    if (width >= MEDIUM_SCREEN.MIN_WIDTH && width <= MEDIUM_SCREEN.MAX_WIDTH) {
      setSliceData(filterMovies.slice(0, MEDIUM_SCREEN.START_CARD));
      setAddMore(MEDIUM_SCREEN.ADD_CARD);
      if (filterMovies.length > MEDIUM_SCREEN.START_CARD) {
        setHiddenButton(true);
      }
    }
    if (width >= SMALL_SCREEN.MIN_WIDTH && width <= SMALL_SCREEN.MAX_WIDTH) {
      setSliceData(filterMovies.slice(0, SMALL_SCREEN.START_CARD));
      setAddMore(SMALL_SCREEN.ADD_CARD);
      if (filterMovies.length > SMALL_SCREEN.START_CARD) {
        setHiddenButton(true);
      }
    }
  }, [filterMovies, width]);

  return (
    <section className="moviecardlist">
      <div className="moviecardlist-container">
        {notFoundMovie ? (
          <p className="moviecardlist-notfound">«Ничего не найдено»</p>
        ) : (
          <ul className="moviecardlist__items">
            {sliceData.map(movie => {
              return (
                <MoviesCard
                  movie={movie}
                  sliceData={filterMovies}
                  key={movie._id || movie.id}
                  onCardLike={onCardLike}
                  onRemoveMovie={onRemoveMovie}
                  isSaved={isSaved}
                  savedMovies={savedMovies}
                />
              );
            })}
          </ul>
        )}
        {/* moviecardlist__more */}
        <div className="moviecardlist__more">
          {hiddenButton ? (
            <button
              type="button"
              className="moviecardlist__more-btn btn btn_effect"
              onClick={() => {
                setSliceData(filterMovies.slice(0, sliceData.length + addMore));
                if (sliceData.length === len) {
                  // alert("Конец списка");
                  setHiddenButton(false);
                }
              }}
            >
              Еще
            </button>
          ) : (
            true
          )}
        </div>
      </div>
    </section>
  );
};

// const [checked, setCheckBox] = useState(
//   localStorage.getItem("checked") === "true"
// ); // Состояние чекбокса
