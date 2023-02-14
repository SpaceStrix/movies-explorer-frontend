import "./AboutProject.css";

export const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project-section">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project-stage">
          <div className="about-project-item">
            <h3 className="about-project-item__title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project-item__descr">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project-item">
            <h3 className="about-project-item__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project-item__descr">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-times">
          <div className="about-times-backend">
            <p className="about-times-backend__week">1 неделя</p>
            <p className="about-times-backend__name">Back-end</p>
          </div>
          <div className="about-times-frontend">
            <p className="about-times-frontend__week">4 недели</p>
            <p className="about-times-frontend__name">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};
