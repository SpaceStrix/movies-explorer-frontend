import "./SavedMovies.css";
import { useState, useEffect } from "react";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";
import { filtersMovies, filtersMoviesDuration } from "../../utils/utils";
import { Preloader } from "../Preloader/Preloader";

export const SavedMovies = ({ savedMovies, onCardLike, onRemoveMovie }) => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery")
  );
  const [notFoundMovie, setNotFoundMovie] = useState(false); // Если нет резульатов поиска
  const [checkedShort, setCheckBox] = useState(
    localStorage.getItem("checked") === "true"
  );
  const [savedMov, setSavedMov] = useState([]);

  useEffect(() => {
    setSavedMov(savedMovies);
  }, [savedMovies]);

  //b Сабмит формы
  const onHandleSearchForm = (searchQuery, checkedShort) => {
    const allFilteredMovie = filtersMovies(
      searchQuery,
      savedMovies,
      setNotFoundMovie
    );

    const durationFilteredMovies = filtersMoviesDuration(
      searchQuery,
      checkedShort,
      savedMovies,
      setNotFoundMovie
    );
    const filtered = checkedShort ? durationFilteredMovies : allFilteredMovie;

    setSavedMov(filtered);

    // localStorage.setItem("searchQuery", searchQuery); //* сохраням строку поиска в стор
    // localStorage.setItem("checked", checkedShort); //* сохраням строку поиска в стор
  };

  return (
    <main className="main">
      <section className="savedmovies">
        <SearchForm
          onHandleSearchForm={onHandleSearchForm}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          checkedShort={checkedShort}
          setCheckBox={setCheckBox}
        />

        <MoviesCardList
          setNotFoundMovie={setNotFoundMovie}
          checkedShort={checkedShort}
          filterMovies={savedMov}
          notFoundMovie={notFoundMovie}
          onCardLike={onCardLike}
          onRemoveMovie={onRemoveMovie}
        />
      </section>
    </main>
  );
};
