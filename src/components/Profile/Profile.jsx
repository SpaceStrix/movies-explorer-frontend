import "./Profile.css";

import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../utils/constants";

export const Profile = ({ logOut, onUpdateUserInfo, errAuth }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [btnEditClose, setBtnEditClose] = useState(false);
  const [dataDone, setDataDone] = useState(false);

  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const handleChangeName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  // Обновляем данные пользователя
  const onSubmit = e => {
    onUpdateUserInfo({
      name,
      email,
    });
    setDataDone(true);
  };

  useEffect(() => {
    if (
      (name.trim() === currentUser.name && email === currentUser.email) ||
      name.trim().length < 2 ||
      email.length <= 2
    ) {
      setBtnEditClose(true);
    } else {
      setBtnEditClose(false);
    }

    !name ? setEmptyName(true) : setEmptyName(false);
    !email ? setEmptyEmail(true) : setEmptyEmail(false);
  }, [name, currentUser.name, email, currentUser.email]);

  return (
    <>
      <section className="profile">
        <div className="profile-container">
          <form
            action=""
            className="profile-form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
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
                  className="profile__input"
                  value={name || ""}
                  {...register("name", {
                    minLength: {
                      value: 2,
                      message: `Минимальная длина имени 2 символа`,
                    },
                    onChange: e => handleChangeName(e),
                  })}
                />
                <span className="input-error-message input-error-message-profile">
                  {emptyName ? "Обязательное поле" : ""}
                  {errors?.name?.message}
                </span>
              </label>
              <label htmlFor="profile__email" className="profile__lable">
                <span className="profile__input-title">Email</span>
                <input
                  id="profile__email"
                  name="email"
                  type="email"
                  className="profile__input"
                  value={email || ""}
                  {...register("email", {
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "Невалидный email",
                    },
                    onChange: e => handleChangeEmail(e),
                  })}
                />
                <span className="input-error-message input-error-message-profile">
                  {emptyEmail ? "Обязательное поле" : ""}
                  {errors?.email?.message}
                </span>
              </label>
            </fieldset>
            {dataDone ? <p className="dataDone">Данные обновлены</p> : null}
            <button
              className="profile__btn-edit"
              type="submit"
              disabled={btnEditClose || !isValid}
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
