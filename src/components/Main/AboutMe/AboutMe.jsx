import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import mePhoto from "../../../images/photo.png";

export const AboutMe = () => {
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
        <Portfolio />
      </div>
    </section>
  );
};
