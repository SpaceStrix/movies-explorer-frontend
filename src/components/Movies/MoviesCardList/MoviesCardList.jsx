import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";

export const MoviesCardList = ({ filterMovies, notFoundMovie }) => {
  return (
    <section className="moviecardlist">
      <div className="moviecardlist-container">
        {notFoundMovie ? (
          <p className="moviecardlist-notfound">«Ничего не найдено»</p>
        ) : (
          <ul className="moviecardlist__items">
            {filterMovies.map(card => {
              return <MoviesCard card={card} key={card.id} />;
            })}
          </ul>
        )}
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

// const [checked, setCheckBox] = useState(
//   localStorage.getItem("checked") === "true"
// ); // Состояние чекбокса
