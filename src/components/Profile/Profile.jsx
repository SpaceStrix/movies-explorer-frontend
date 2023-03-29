import "./Profile.css";

import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "react-hook-form";

export const Profile = ({ logOut, onUpdateUserInfo, errAuth }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChangeName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  // Обновляем данные пользователя
  const handleSubmit = e => {
    e.preventDefault();

    onUpdateUserInfo({
      name,
      email,
    });
  };

  // const messageErr = isValid ? "" : errAuth;

  return (
    <>
      <section className="profile">
        <div className="profile-container">
          <form
            action=""
            className="profile-form"
            noValidate
            onSubmit={handleSubmit}
          >
            <fieldset className="profile__group">
              <legend className="profile__title">
                Привет, {currentUser.name}
              </legend>
              <label htmlFor="profile__name" className="profile__lable">
                <span className="profile__input-title">Имя</span>
                <input
                  id="profile__name"
                  name="name"
                  type="name"
                  placeholder={currentUser.name}
                  className="profile__input"
                  required
                  value={name || ""}
                  onChange={handleChangeName}
                />
              </label>
              <label htmlFor="profile__email" className="profile__lable">
                <span className="profile__input-title">Email</span>
                <input
                  id="profile__email"
                  name="email"
                  type="email"
                  placeholder={currentUser.email}
                  className="profile__input"
                  required
                  value={email || ""}
                  onChange={handleChangeEmail}
                />
              </label>
            </fieldset>
            <button
              className="profile__btn-edit"
              type="submit"
              // disabled={isValid}
            >
              Редактировать
            </button>
          </form>
          <button
            className="profile__btn-logout"
            type="submit"
            onClick={logOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
};
