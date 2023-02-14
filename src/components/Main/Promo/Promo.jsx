import "./Promo.css";

import NavTab from "../NavTab/NavTab";

export const Promo = () => {
  return (
    <section className="promo">
      <div className="promo-container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <NavTab />
      </div>
    </section>
  );
};
