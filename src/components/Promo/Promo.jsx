import "./Promo.css";

import React from "react";
import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo-container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <nav className="promo__nav">
          <ul className="list">
            <li className="list__item">
              <a href="/" className="list__link">
                О проекте
              </a>
            </li>
            <li className="list__item">
              <a href="/" className="list__link">
                Технологии
              </a>
            </li>
            <li className="list__item">
              <a href="/" className="list__link">
                Студент
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Promo;
