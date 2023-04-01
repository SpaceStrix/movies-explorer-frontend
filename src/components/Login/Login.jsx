import "./Login.css";
import logo from "../../images/logo.svg";

import { NavLink, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { EMAIL_REGEX } from "../../utils/constants";

export const Login = ({ onLogin, loggedIn, errAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });
  const onSubmit = data => {
    onLogin(data);
    reset();
  };

  if (loggedIn) return <Navigate to={"/"} />;

  const messageErr = isValid ? "" : errAuth;

  return (
    <div className="main">
      <section className="signin">
        <NavLink to="/" className="signin__logo">
          <img src={logo} alt="Логотип" />
        </NavLink>
        <form
          action=""
          className="signin-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <fieldset className="signin__group">
            <legend className="signin__title">Рады видеть!</legend>{" "}
            <label htmlFor="email" className="signin__input-lable">
              E-mail
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="signin__input"
                {...register("email", {
                  required: "Поле email обязательное",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Невалидный email",
                  },
                })}
              />
              <span className="input-error-message">
                {errors?.email?.message}
              </span>
            </label>
            <label htmlFor="password" className="signin__input-lable">
              Пароль
              <input
                name="password"
                type="password"
                placeholder="Пароль"
                className="signin__input"
                {...register("password", {
                  required: "Поле password обязательное",
                  minLength: {
                    value: 4,
                    message: `Минимальная длина пароля 4 символа`,
                  },
                })}
              />
              <span className="input-error-message">
                {errors?.password?.message}
              </span>
            </label>
            <span className="message-back">{messageErr}</span>
          </fieldset>
          <button
            className="signin__btn-auth signin__btn-auth-disabled btn btn_effect"
            type="submit"
            disabled={!isValid}
          >
            Войти
          </button>
          <p className="signin__log-in">
            Ещё не зарегистрированы?&nbsp;
            <NavLink
              to="/signup"
              className="signin__log-in-link link link_effect"
            >
              Регистрация
            </NavLink>
          </p>
        </form>
      </section>
    </div>
  );
};
