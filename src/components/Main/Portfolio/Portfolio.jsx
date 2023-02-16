import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://spacestrix.github.io/how-to-learn/"
            className="portfolio__link hover_effect"
            target={"_blank"}
            rel="noreferrer"
          >
            Статичный сайт
            <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://spacestrix.github.io/russian-travel/"
            className="portfolio__link hover_effect"
            target={"_blank"}
            rel="noreferrer"
          >
            Адаптивный сайт
            <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://spacestrix.github.io/mesto-react/"
            className="portfolio__link hover_effect"
            target={"_blank"}
            rel="noreferrer"
          >
            Одностраничное приложение
            <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
