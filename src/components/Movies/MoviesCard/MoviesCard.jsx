import "./MoviesCard.css";

import pic from "../../../images/pic.jpg";

export const MoviesCard = () => {
  return (
    <>
      <li className="card">
        <img src={pic} alt="titleimg" className="card__img" />

        <div className="card__content">
          <div className="card__info">
            <h2 className="card__title">33 слова о дизайне</h2>
            <p className="card__duration">1ч 47м</p>
          </div>
          <button
            className="card__like"
            aria-label="Кнопка лайка"
            type="button"
          ></button>
        </div>
      </li>
    </>
  );
};

// export default MoviesCard;
