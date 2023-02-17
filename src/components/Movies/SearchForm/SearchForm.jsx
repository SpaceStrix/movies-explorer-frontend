import "./SearchForm.css";
import { useForm } from "react-hook-form";

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });
  const onSubmit = data => {
    JSON.stringify(data);
    reset();
  };

  return (
    <section className="seachform">
      <div className="seachform-container">
        <form
          action=""
          className="seachform-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="seachform-stroke">
            <label htmlFor="search" className="seachform-stroke__label">
              <input
                type="text"
                name="search"
                className="seachform-stroke__input"
                placeholder="Фильм"
                {...register("search", { required: "Введите ключевое слово" })}
              />
              <span className="search-error-message">
                {errors?.search?.message}
              </span>
            </label>
            <button
              className="seachform-stroke__btn btn btn_effect"
              type="submit"
            ></button>
          </fieldset>
          <fieldset className="seachform-check">
            <input type="checkbox" className="seachform-check__checkbox" />
            <p className="seachform-check__text">Короткометражки</p>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
