import "./Register.css";
import logo from "../../images/logo.svg";

import { NavLink, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Register = ({ loggedIn, onRegistration, errAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });
  const onSubmit = data => {
    onRegistration(data);
    reset();
  };

  const messageErr = isValid ? "" : errAuth;

  if (loggedIn) return <Navigate to={"/"} />;

  return (
    <div className="main">
      <section className="signup">
        <NavLink to="/" className="signup__logo">
          <img src={logo} alt="Логотип" />
        </NavLink>
        <form
          action=""
          className="signup-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="signup__group">
            <legend className="signup__title">Добро пожаловать!</legend>
            <label htmlFor="name" className="signup__input-lable">
              Имя
              <input
                autoComplete="off"
                name="name"
                type="name"
                placeholder="Имя"
                className="signup__input"
                {...register("name", { required: "Поле Name обязательное" })}
              />
              <span className="input-error-message">
                {errors?.name?.message}
              </span>
            </label>

            <label htmlFor="email" className="signup__input-lable">
              E-mail
              <input
                autoComplete="off"
                name="email"
                type="text"
                placeholder="Email"
                className="signup__input"
                {...register("email", {
                  required: "Поле email обязательное",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Невалидный email",
                  },
                })}
              />
              <span className="input-error-message">
                {errors?.email?.message}
              </span>
            </label>
            <label htmlFor="password" className="signup__input-lable">
              Пароль
              <input
                autoComplete="off"
                name="password"
                type="password"
                placeholder="Пароль"
                className="signup__input"
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
            className="signup__btn-auth signup__btn-auth-disabled btn btn_effect"
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="signup__log-in">
          Уже зарегистрированы?&nbsp;
          <NavLink
            to="/signin"
            className="signup__log-in-link link link_effect"
          >
            Войти
          </NavLink>
        </p>
      </section>
    </div>
  );
};
