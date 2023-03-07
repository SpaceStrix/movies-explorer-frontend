import "./Movies.css";

import { useState, useEffect } from "react";

import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";
import { Preloader } from "../Preloader/Preloader";

export const Movies = ({ moviesAll }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Ключевое слово поиска
  const [filterMovies, setFilterMovies] = useState([]);
  const [loading, setLoading] = useState(false); // Состояние загрузки
  const [notFoundMovie, setNotFoundMovie] = useState(false); // Если нет резульатов поиска
  const [checked, setCheckBox] = useState(false); // Состояние чекбокса

  // Записываем изначальный массив в стор.
  const setDataToLS = () => {
    const allMovies = localStorage.setItem(
      "allMovies",
      JSON.stringify(moviesAll)
    );
    return allMovies;
  };

  // Фильтуем фильмы по ключевому слову и записываем в стор.
  const filteredMovies = searchQuery => {
    const filterMovie = JSON.parse(localStorage.getItem("allMovies")).filter(
      movie =>
        movie.nameRU.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

    if (filterMovie.length !== 0) {
      localStorage.setItem("filterMovie", JSON.stringify(filterMovie));

      if (localStorage.getItem("filterMovie")) {
        setNotFoundMovie(false);
        setFilterMovies(JSON.parse(localStorage.getItem("filterMovie")));
      }
    } else {
      localStorage.setItem("filterMovie", JSON.stringify([]));
      setNotFoundMovie(true);
    }
  };

  useEffect(() => {
    const queryFromLS = localStorage.getItem("searchQuery");
    setSearchQuery(queryFromLS);
  }, []);

  const handleChange = () => {
    setCheckBox(!checked);
    localStorage.setItem("checkBoxLS", checked);
  };

  // Передаем данные при сабмите
  const onHandleForm = () => {
    setDataToLS();
    filteredMovies(searchQuery);

    localStorage.setItem("searchQuery", searchQuery);
  };

  return (
    <>
      <main className="main">
        <SearchForm
          onHandleForm={onHandleForm}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          checked={checked}
          setCheckBox={setCheckBox}
          handleChange={handleChange}
        />
        {loading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            checked={checked}
            filterMovies={filterMovies}
            setLoading={setLoading}
            notFoundMovie={notFoundMovie}
          />
        )}
      </main>
    </>
  );
};
