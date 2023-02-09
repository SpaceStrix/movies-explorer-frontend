import "./AboutMe.css";

import mePhoto from "../../images/photo.png";

const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme-container">
        <h2 className="aboutme__title">Студент</h2>
        <div className="aboutme-info">
          <div className="aboutme-info-bio">
            <p className="aboutme-info-bio__name">Dmitriy</p>
            <p className="aboutme-info-bio__proff">
              Фронтенд-разработчик, 28 лет
            </p>
            <p className="aboutme-info-bio__descr">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              href="https://github.com/SpaceStrix"
              className="aboutme-info-bio__git link_effect"
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img
            src={mePhoto}
            alt="Моя фотография"
            className="aboutme-info__photo"
          />
        </div>
        <div className="portfolio">
          <h3 className="portfolio__title">Портфолио</h3>
          <ul className="portfolio__list">
            <li className="portfolio__item">
              <a
                href="https://spacestrix.github.io/how-to-learn/"
                className="portfolio__link link_effect"
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
                className="portfolio__link link_effect"
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
                className="portfolio__link link_effect"
                target={"_blank"}
                rel="noreferrer"
              >
                Одностраничное приложение
                <span className="portfolio__link-arrow">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
