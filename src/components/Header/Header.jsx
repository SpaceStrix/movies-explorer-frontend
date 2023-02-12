import "./Header.css";

import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="header__logo"></NavLink>
        <nav className="navbar">
          <NavLink to="/signup" className="navbar__link link_effect">
            Регистрация
          </NavLink>
          <NavLink to="/signin" className="navbar__link active_link">
            Войти
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
