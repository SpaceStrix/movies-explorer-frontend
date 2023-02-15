import "./Register.css";

import logo from "../../images/logo.svg";

import { NavLink } from "react-router-dom";

const handleSubmit = e => {
  e.preventDefault();
};

export const Register = () => {
  return (
    <div className="main">
      <section className="signup">
        <NavLink to="/" className="signup__logo">
          <img src={logo} alt="Логотип" />
        </NavLink>
        <form action="" className="signup-form" onSubmit={handleSubmit}>
          <fieldset className="signup__group">
            <legend className="signup__title">Добро пожаловать!</legend>
            <label htmlFor="name" className="signup__input-lable">
              Имя
            </label>
            <input
              name="name"
              type="name"
              placeholder="Имя"
              className="signup__input"
              required
            />

            <label htmlFor="email" className="signup__input-lable">
              E-mail
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="signup__input"
              required
            />
            <label htmlFor="password" className="signup__input-lable">
              Пароль
            </label>
            <input
              name="password"
              type="password"
              placeholder="Пароль"
              className="signup__input"
              required
            />
          </fieldset>
          <button className="signup__btn-auth" type="submit">
            Зарегистрироваться
          </button>
          <p className="signup__log-in">
            Уже зарегистрированы?&nbsp;
            <NavLink to="/signin" className="signup__log-in-link">
              Войти
            </NavLink>
          </p>
        </form>
      </section>
    </div>
  );
};
