import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";

export const MoviesCardList = () => {
  return (
    <section className="moviecardlist">
      <div className="moviecardlist-container">
        <ul className="moviecardlist__items movie_list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
        <div className="moviecardlist__more">
          <button type="button" className="movie__more-btn">
            Еще
          </button>
        </div>
      </div>
    </section>
  );
};
