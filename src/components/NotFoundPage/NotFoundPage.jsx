import "./NotFoundPage.css";

// import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section className="notfoundpage">
      <div className="notfoundpage__section">
        <h1 className="notfoundpage__title">404</h1>
        <p className="notfoundpage__descr">Страница не найдена</p>
        {/* <Link to={"/"} className="notfoundpage__back">
          Назад
        </Link> */}
        <button className="notfoundpage__back" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </section>
  );
};
