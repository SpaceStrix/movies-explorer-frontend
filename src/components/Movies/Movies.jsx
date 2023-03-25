import "./Movies.css";

import { useState, useEffect } from "react";

import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";

import { filtersMovies, filtersMoviesDuration } from "../../utils/utils";

import { Preloader } from "../Preloader/Preloader";

export const Movies = ({ moviesAll, onCardLike, onRemoveMovie }) => {
  //b useState
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery")
  );
  const [filterMovies, setFilterMovies] = useState(
    JSON.parse(localStorage.getItem("filteredMovies")) || []
  );
  const [notFoundMovie, setNotFoundMovie] = useState(false); // Если нет резульатов поиска
  const [checkedShort, setCheckBox] = useState(
    localStorage.getItem("checked") === "true"
  );

  useEffect(() => {
    localStorage.setItem("allMovies", JSON.stringify(moviesAll));
  }, [moviesAll]);
  useEffect(() => {
    setLoading(true);
    if (JSON.parse(localStorage.getItem("filteredMovies")) === null) {
      setNotFoundMovie(false);
    } else {
      if (filterMovies.length === 0) {
        setNotFoundMovie(true);
      } else {
        setNotFoundMovie(false);
      }
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [filterMovies]);

  //b Сабмит формы
  const onHandleSearchForm = (searchQuery, checkedShort) => {
    const dataMovies = JSON.parse(localStorage.getItem("allMovies")); // Все фильмы из LS

    const allFilteredMovie = filtersMovies(
      searchQuery,
      dataMovies,
      setNotFoundMovie
    );

    const durationFilteredMovies = filtersMoviesDuration(
      searchQuery,
      checkedShort,
      dataMovies,
      setNotFoundMovie
    );
    const filtered = checkedShort ? durationFilteredMovies : allFilteredMovie;

    setFilterMovies(filtered);

    localStorage.setItem("filteredMovies", JSON.stringify(filtered));
    localStorage.setItem("searchQuery", searchQuery); //* сохраням строку поиска в стор
    localStorage.setItem("checked", checkedShort); //* сохраням строку поиска в стор
  };

  return (
    <>
      <main className="main">
        <SearchForm
          onHandleSearchForm={onHandleSearchForm}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          checkedShort={checkedShort}
          setCheckBox={setCheckBox}
        />
        {loading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            onCardLike={onCardLike}
            onRemoveMovie={onRemoveMovie}
            setNotFoundMovie={setNotFoundMovie}
            checkedShort={checkedShort}
            filterMovies={filterMovies}
            notFoundMovie={notFoundMovie}
          />
        )}
      </main>
    </>
  );
};
