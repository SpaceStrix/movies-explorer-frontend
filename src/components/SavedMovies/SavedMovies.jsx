import "./SavedMovies.css";

import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCard } from "../Movies/MoviesCard/MoviesCard";

export const SavedMovies = () => {
  return (
    <section className="savedmovies">
      <SearchForm />
      <div className="savedmovies-container">
        <ul className="savedmovies__items movie_list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      </div>
    </section>
  );
};
