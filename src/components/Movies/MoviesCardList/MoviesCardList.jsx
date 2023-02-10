import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
  return (
    <section className="moviecardlist">
      <div className="moviecardlist-container">
        <ul className="moviecardlist__items">
          <MoviesCard />
        </ul>
        <div className="moviecardlist__more">
          <button type="butoon" className="moviecardlist__btn">
            Еще
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoviesCardList;
