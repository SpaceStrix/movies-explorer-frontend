import "./Header.css";
import acc from "../../images/acc-icon.svg";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// active link
const setActiveLink = ({ isActive }) =>
  isActive ? "header-active_link" : "header-logged__link";

export const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const burgerClick = () => {
    setBurgerOpen(!burgerOpen);
  };

  const stateBurger = `${burgerOpen ? "header-logged_open" : "header-logged"}`;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header__logo"></Link>
        <button className="header__burger-icon" onClick={burgerClick}></button>

        {/* <nav className="navbar">
          <NavLink to="/signup" className="navbar__link link_effect">
            Регистрация
          </NavLink>
          <NavLink to="/signin" className="navbar__link active_link">
            Войти
          </NavLink>
        </nav> */}

        <div className={stateBurger}>
          <ul className="header-logged__list">
            <li className="header-logged__item">
              <NavLink to={"/"} className={setActiveLink}>
                Главная
              </NavLink>
            </li>
            <li className="header-logged__item">
              <NavLink to={"/movies"} className={setActiveLink}>
                Фильмы
              </NavLink>
            </li>
            <li className="header-logged__item">
              <NavLink to={"/saved-movies"} className={setActiveLink}>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <Link to={"/profile"} className="header-logged__acc">
            <img src={acc} alt="" /> Аккаунт
          </Link>
        </div>
      </div>
    </header>
  );
};
