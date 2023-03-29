import "./SearchForm.css";

export const SearchForm = ({
  onHandleSearchForm,
  setSearchQuery,
  checkedShort,
  searchQuery,
  setCheckBox,
  emptyQuery,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    onHandleSearchForm(searchQuery, checkedShort);
  };

  const handleChange = e => {
    localStorage.setItem("checked", `${e.target.checked}`);
    setCheckBox(e.target.checked);

    onHandleSearchForm(searchQuery, !checkedShort);
    setCheckBox(!checkedShort);
  };

  const queryErr = emptyQuery ? "emptyQuery" : "emptyQuery_hidden";

  return (
    <section className="seachform">
      <div className="seachform-container">
        <form
          action=""
          className="seachform-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset className="seachform-stroke">
            <label htmlFor="search" className="seachform-stroke__label">
              <input
                autoComplete="off"
                type="text"
                name="search"
                value={searchQuery || ""}
                onChange={e => setSearchQuery(e.target.value)}
                className="seachform-stroke__input"
                placeholder="Фильм"
              />
            </label>
            <button
              className="seachform-stroke__btn btn btn_effect"
              type="submit"
            ></button>
          </fieldset>
          <fieldset className="seachform-check">
            <input
              type="checkbox"
              checked={checkedShort}
              onChange={handleChange}
              name="shortDuration"
              className="seachform-check__checkbox"
            />
            <p className="seachform-check__text">Короткометражки</p>
          </fieldset>
          <span className={queryErr}>«Нужно ввести ключевое слово»</span>
        </form>
      </div>
    </section>
  );
};
