import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

import acc from "../../images/acc-icon.svg";

// Автивный роут
const setActiveLink = ({ isActive }) =>
  isActive ? "header_link-active" : "header__list-link";

export const Navigation = ({ loggedIn }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const burgerClick = () => setBurgerOpen(!burgerOpen);

  //   Иконка бургера в зависимости от состояния
  const iconBurger = `${
    !burgerOpen ? "header__burger" : "header__burger-close"
  }`;

  const stateBurger = `${burgerOpen ? "header-logged" : "testburger"}`;

  return (
    <>
      {loggedIn && (
        <button className={iconBurger} onClick={burgerClick}></button>
      )}

      {loggedIn && (
        <div className={stateBurger}>
          <div className="brg"></div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list-item">
                <NavLink to={"/"} className={setActiveLink}>
                  Главная
                </NavLink>
              </li>
              <li className="header__list-item">
                <NavLink to={"/movies"} className={setActiveLink}>
                  Фильмы
                </NavLink>
              </li>
              <li className="header__list-item">
                <NavLink to={"/saved-movies"} className={setActiveLink}>
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </nav>
          <Link to={"/profile"} className="header__auth-account">
            <img src={acc} alt="" /> Аккаунт
          </Link>
        </div>
      )}

      {!loggedIn && (
        <ul className="header__auth-list">
          <li className="header__auth-list-item">
            <Link to={"/signup"} className="header__auth-list-link">
              Регистрация
            </Link>
          </li>
          <li className="header__auth-list-item">
            <Link
              to={"/signin"}
              className="header__auth-list-link link_highlight"
            >
              Войти
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};
