import { Promo } from "./Promo/Promo";
import { AboutProject } from "./AboutProject/AboutProject";
import { Techs } from "./Techs/Techs";
import { AboutMe } from "./AboutMe/AboutMe";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Main = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
};
