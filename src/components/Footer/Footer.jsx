import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

export const Footer = ({ locationPath }) => {
  const { pathname } = useLocation(); // Забираем из объекта локации pathname

  if (pathname === "/profile") {
    locationPath = !locationPath;
  }

  return (
    <>
      {locationPath && (
        <footer className="footer">
          <div className="footer-container">
            <p className="footer__text">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__content">
              <p className="footer__copy">© 2023</p>
              <ul className="footer-list">
                <li className="footer-list__item">
                  <Link
                    to="https://practicum.yandex.ru/"
                    target={"_blank"}
                    className="footer-list__link link link_effect"
                    rel="noreferrer"
                  >
                    Яндекс.Практикум
                  </Link>
                </li>
                <li className="footer-list__item">
                  <Link
                    to="https://github.com/"
                    target={"_blank"}
                    className="footer-list__link link link_effect"
                    rel="noreferrer"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
