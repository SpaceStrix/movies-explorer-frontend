import "./SearchForm.css";
import { useState } from "react";

export const SearchForm = ({ setSearchQuery, onHandleForm }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onHandleForm();
  };

  return (
    <section className="seachform">
      <div className="seachform-container">
        <form
          action=""
          className="seachform-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className="seachform-stroke">
            <label htmlFor="search" className="seachform-stroke__label">
              <input
                autoComplete="off"
                type="text"
                name="search"
                onChange={e => setSearchQuery(e.target.value)}
                className="seachform-stroke__input"
                placeholder="Фильм"
              />
            </label>
            <button
              className="seachform-stroke__btn btn btn_effect"
              type="submit"
            ></button>
          </fieldset>
          <fieldset className="seachform-check">
            <input
              type="checkbox"
              name="shortDuration"
              className="seachform-check__checkbox"
            />
            <p className="seachform-check__text">Короткометражки</p>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
