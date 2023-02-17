import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";

export const MoviesCardList = () => {
  return (
    <section className="moviecardlist">
      <div className="moviecardlist-container">
        <ul className="moviecardlist__items">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          {/* <MoviesCard />
          <MoviesCard />
          <MoviesCard /> */}
          {/* <MoviesCard />
          <MoviesCard /> */}
          {/* <MoviesCard />
          <MoviesCard /> */}
        </ul>
        <div className="moviecardlist__more">
          <button
            type="button"
            className="moviecardlist__more-btn btn btn_effect"
          >
            Еще
          </button>
        </div>
      </div>
    </section>
  );
};
