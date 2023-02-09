import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header__logo" target="_blank"></a>
        <div className="navbar">
          <a href="/signup" className="navbar__link link_effect">
            Регистрация
          </a>
          <a href="/signin" className="navbar__link active_link">
            Войти
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
