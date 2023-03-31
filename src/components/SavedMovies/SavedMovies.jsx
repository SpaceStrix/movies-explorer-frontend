import "./SavedMovies.css";
import { useState, useEffect } from "react";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";
import { filtersMovies, filtersMoviesDuration } from "../../utils/utils";
import { Preloader } from "../Preloader/Preloader";

export const SavedMovies = ({ savedMovies, onRemoveMovie }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notFoundMovie, setNotFoundMovie] = useState(false); // Если нет резульатов поиска
  const [checkedShort, setCheckBox] = useState(false);
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [savedMov, setSavedMov] = useState([]);
  const [emptyQuery, setEmptyQuery] = useState(false);

  useEffect(() => {
    setSavedMov(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("filteredMovies")) === null) {
      setNotFoundMovie(false);
    } else {
      if (savedMov.length === 0) {
        setNotFoundMovie(true);
      } else {
        setNotFoundMovie(false);
      }
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [savedMov]);

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

    if (searchQuery === "" || searchQuery === null) {
      searchQuery = "";
      setEmptyQuery(true);
    } else {
      setEmptyQuery(false);
      setSavedMov(filtered);
    }

    // setSavedMov(filtered);
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
          emptyQuery={emptyQuery}
        />

        {loading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            // setNotFoundMovie={setNotFoundMovie}
            // checkedShort={checkedShort}
            notFoundMovie={notFoundMovie}
            filterMovies={savedMov}
            savedMov={savedMov}
            onRemoveMovie={onRemoveMovie}
          />
        )}
      </section>
    </main>
  );
};
