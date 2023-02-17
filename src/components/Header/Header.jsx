import "./Header.css";
import { Navigation } from "../Navigation/Navigation";
import logotype from "../../images/logo.svg";
import { Link } from "react-router-dom";

// state burger
export const Header = ({ loggedIn }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header__logo">
          <img src={logotype} alt="" />
        </Link>

        <Navigation loggedIn={loggedIn} />
      </div>
    </header>
  );
};
