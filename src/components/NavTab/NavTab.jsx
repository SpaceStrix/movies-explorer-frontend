import "./NavTab.css";

const NavTab = () => {
  return (
    <ul className="promo-list">
      <li className="promo-list__item">
        <a href="#about-project" className="promo-list__link link_effectbrg">
          О проекте
        </a>
      </li>
      <li className="promo-list__item">
        <a href="#techs" className="promo-list__link link_effectbrg">
          Технологии
        </a>
      </li>
      <li className="promo-list__item">
        <a href="#aboutme" className="promo-list__link link_effectbrg">
          Студент
        </a>
      </li>
    </ul>
  );
};

export default NavTab;
