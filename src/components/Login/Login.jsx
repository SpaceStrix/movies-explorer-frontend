import "./Login.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

export const Login = () => {
  return (
    <section className="signin">
      <NavLink to="/" className="signin__logo">
        <img src={logo} alt="Логотип" />
      </NavLink>
      <form action="" className="signin-form">
        <fieldset className="signin__group">
          <legend className="signin__title">Рады видеть!</legend>{" "}
          <label htmlFor="email" className="signin__input-lable">
            E-mail
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="signin__input"
            required
          />
          <label htmlFor="password" className="signin__input-lable">
            Пароль
          </label>
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            className="signin__input"
            required
          />
        </fieldset>
        <button className="signin__btn-auth" type="submit">
          Войти
        </button>
        <p className="signin__log-in">
          Уже зарегистрированы?&nbsp;
          <NavLink to="/signin" className="signin__log-in-link">
            Регистрация
          </NavLink>
        </p>
      </form>
    </section>
  );
};
