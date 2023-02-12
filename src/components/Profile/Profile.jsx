import "./Profile.css";

export const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-container">
        <form action="" className="profile-form">
          <fieldset className="signup__group">
            <legend className="signup__title">Вход</legend>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="signup__input"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Пароль"
              className="signup__input"
              required
            />
          </fieldset>
          <button className="signup__btn-auth" type="submit">
            Войти
          </button>
        </form>
      </div>
    </section>
  );
};
