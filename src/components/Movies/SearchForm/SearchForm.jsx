import "./SearchForm.css";

const SearchForm = () => {
  return (
    <section className="seachform">
      <div className="seachform-container">
        <form action="" className="seachform-form" noValidate>
          <fieldset className="seachform-stroke">
            <input
              type="text"
              className="seachform-stroke__input"
              placeholder="Фильм"
            />
            <button className="seachform-stroke__btn" type="submit"></button>
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
export default SearchForm;
