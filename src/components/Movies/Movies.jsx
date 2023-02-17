import "./Movies.css";

import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Movies = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
};
