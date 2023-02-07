import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project-container">
        <h2 className="about-project__title">О проекте</h2>
        <ul className="about-project-list">
          <li className="about-project-list__item">
            <h3 className="about-project-list__title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project-list__descr">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project-list__item">
            <h3 className="about-project-list__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project-list__descr">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <div className="about-project__duration">
          <div className="about-project__back">
            <span className="about-project__week about-project__week__color">
              1 неделя
            </span>
            <span className="about-project__type">Back-end</span>
          </div>
          <div className="about-project__front">
            <span className="about-project__week">4 недели</span>
            <span className="about-project__type">Front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
