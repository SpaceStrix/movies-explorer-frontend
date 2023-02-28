import "./Movies.css";

import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";

export const Movies = ({ moviesAll }) => {
  return (
    <>
      <main className="main">
        <SearchForm />
        <MoviesCardList moviesAll={moviesAll} />
      </main>
    </>
  );
};
