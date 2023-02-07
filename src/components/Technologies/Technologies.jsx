import "./Technologies.css";

const Technologies = () => {
  return (
    <section className="technologies">
      <div className="technologies-container">
        <h3 className="technologies__title">Технологии</h3>

        <div className="technologies-info">
          <h2 className="technologies-info__title">7 технологий</h2>
          <p className="technologies-info__descr">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>

        <ul className="technologies-list">
          <li className="technologies-list__item">HTML</li>
          <li className="technologies-list__item">CSS</li>
          <li className="technologies-list__item">JS</li>
          <li className="technologies-list__item">React</li>
          <li className="technologies-list__item">Git</li>
          <li className="technologies-list__item">Express.js</li>
          <li className="technologies-list__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
