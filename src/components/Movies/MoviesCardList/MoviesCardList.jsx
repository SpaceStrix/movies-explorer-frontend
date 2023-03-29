import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";

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
  // const [isEmpyArray, setIsEmptyArray] = useState(false);

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
    if (width >= 769) {
      setSliceData(filterMovies.slice(0, 12));
      setAddMore(3);
      if (filterMovies.length > 12) {
        setHiddenButton(true);
      }
    }
    if (width >= 469 && width <= 768) {
      setSliceData(filterMovies.slice(0, 8));
      setAddMore(2);
      if (filterMovies.length > 8) {
        setHiddenButton(true);
      }
    }
    if (width >= 320 && width <= 468) {
      setSliceData(filterMovies.slice(0, 5));
      setAddMore(1);
      if (filterMovies.length > 5) {
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
                  alert("Конец списка");
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
