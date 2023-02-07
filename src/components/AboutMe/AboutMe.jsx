import "./AboutMe.css";

import photo from "../../images/photo.png";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <div className="aboutme-container">
        <h2 className="aboutme__title">Студент</h2>
        <div className="aboutme-info">
          <div className="aboutme-text">
            <h3 className="aboutme-text__name">Дмитрий</h3>
            <p className="aboutme-text__proff">Фронтенд-разработчик, 28 лет</p>
            <p className="aboutme-text__descr">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              href="https://github.com/SpaceStrix"
              className="aboutme-text__git"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img src={photo} alt="Моя фотография" className="aboutme-photo" />
        </div>

        <div className="aboutme-portfolio">
          <h3 className="aboutme-portfolio__title">Портфолио</h3>
          <ul className="aboutme-list">
            <li className="aboutme-list__item">
              <a
                href="https://spacestrix.github.io/how-to-learn/"
                className="aboutme-list__link"
                target={"_blank"}
                rel="noreferrer"
              >
                Статичный сайт <span className="aboutme-list__simbol">↗</span>
              </a>
            </li>
            <li className="aboutme-list__item">
              <a
                href="https://spacestrix.github.io/russian-travel/"
                className="aboutme-list__link"
                target={"_blank"}
                rel="noreferrer"
              >
                Адаптивный сайт <span className="aboutme-list__simbol">↗</span>
              </a>
            </li>
            <li className="aboutme-list__item">
              <a
                href="https://spacestrix.github.io/mesto-react/"
                className="aboutme-list__link"
                target={"_blank"}
                rel="noreferrer"
              >
                Одностраничное приложение
                <span className="aboutme-list__simbol">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
