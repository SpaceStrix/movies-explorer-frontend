import "./Movies.css";

import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";

export const Movies = () => {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  );
};
