import "./SavedMovies.css";

import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCard } from "../Movies/MoviesCard/MoviesCard";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const SavedMovies = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <section className="savedmovies">
          <SearchForm />
          <div className="savedmovies-container">
            <ul className="savedmovies__items movie_list">
              <MoviesCard />
              <MoviesCard />
              {/* <MoviesCard />
              <MoviesCard />
              <MoviesCard /> */}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
