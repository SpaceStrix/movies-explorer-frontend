import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__content">
          <p className="footer__copy">© 2023</p>
          <ul className="footer-list">
            <li className="footer-list__item">
              <a
                href="https://practicum.yandex.ru/"
                target={"_blank"}
                className="footer-list__link"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer-list__item">
              <a
                href="https://github.com/"
                target={"_blank"}
                className="footer-list__link"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
