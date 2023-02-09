import "./Promo.css";

import React from "react";
const Promo = () => {
  return (
    <section className="promo">
      <div className="promo-container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <ul className="promo-list">
          <li className="promo-list__item">
            <a
              href="#about-project"
              className="promo-list__link link_effectbrg"
            >
              О проекте
            </a>
          </li>
          <li className="promo-list__item">
            <a href="#techs" className="promo-list__link link_effectbrg">
              Технологии
            </a>
          </li>
          <li className="promo-list__item">
            <a href="#aboutme" className="promo-list__link link_effectbrg">
              Студент
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Promo;
