import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <div className="techs-container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs-content">
          <p className="techs-content__title">7 технологий</p>
          <p className="techs-content__descr">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs-content-list">
            <li className="techs-content-list__item">HTML</li>
            <li className="techs-content-list__item">CSS</li>
            <li className="techs-content-list__item">JS</li>
            <li className="techs-content-list__item">React</li>
            <li className="techs-content-list__item">Git</li>
            <li className="techs-content-list__item">Express.js</li>
            <li className="techs-content-list__item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Techs;
