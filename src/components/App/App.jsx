import "./App.css";

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";

import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { Preloader } from "../Preloader/Preloader";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/Auth";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";

export const App = () => {
  // Состояния
  const [loggedIn, setLoggedIn] = useState(false); // Состояние авторизации
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [currentUser, setCurrentUser] = useState({}); // Контекст текущего пользователя
  const [errAuth, setErrAuth] = useState("");

  // STATE для Movies
  const [moviesAll, setMoviesAll] = useState([]); //
  const [savedMovies, setSevedMovies] = useState([]);

  const navigate = useNavigate();
  const { pathname } = useLocation(); // Забираем из объекта локации
  const locationPath = pathname => {
    return (
      pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  //b Проверка токена
  const tokenCheck = useCallback(async () => {
    try {
      setLoading(true);

      const jwt = localStorage.getItem("jwt");
      if (!jwt) {
        throw new Error("no token");
      }
      const user = await auth.checkToken(jwt);
      if (!user) {
        throw new Error("invalid user");
      }
      if (user) {
        setLoggedIn(true);
        setCurrentUser(user);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  }, []);

  //b Запросы
  useEffect(() => {
    if (loggedIn) {
      // mainApi
      //   .getUserInfoFromServer()
      //   .then(userData => {
      //     setLoggedIn(true);
      //     setCurrentUser(userData);
      //   })
      //   .catch(err => {
      //     console.error(err);
      //   });
      // // Сохраненные фильмы
      // mainApi
      //   .getSavedMovies()
      //   .then(data => {
      //     setSevedMovies(data);
      //   })
      //   .catch(err => {
      //     console.error(err);
      //   });

      mainApi
        .getInitialData()
        .then(([getSavedMovies, getUserInfoFromServer]) => {
          setSevedMovies(getSavedMovies);
          setCurrentUser(getUserInfoFromServer);
        })
        .catch(err => {
          console.error(err);
        });
      moviesApi
        .getAllMovies()
        .then(dataMovies => {
          setMoviesAll(dataMovies);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [loggedIn]);

  const onAuth = useCallback(data => {
    localStorage.setItem("jwt", data.token);
    setLoggedIn(true);
    navigate("/");
  }, []);

  //b Регистрация
  const onRegistration = ({ name, email, password }) => {
    auth
      .register({ name, email, password })
      .then(data => {
        setLoading(true);
        navigate("/signin");
        return data;
      })
      .catch(err => {
        setErrAuth(err);
      })
      .finally(() => setLoading(false));
  };
  //b Авторизация
  const onLogin = ({ password, email }) => {
    auth
      .login({ password, email })
      .then(data => {
        setLoading(true);
        if (!data) {
          throw new Error("Неверный пароль или почта");
        }
        if (data.token) {
          onAuth(data);
        }
        navigate("/movies");
        return data;
      })
      .catch(err => {
        setErrAuth(err);
      })
      .finally(() => setLoading(false));
  };
  //b Обновление профиля
  const handleUpdateUser = newData => {
    mainApi
      .setNewUserInfo(newData)
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => {
        setErrAuth(err);
      });
  };
  //b Сохранение фильма
  const handleCardLike = movie => {
    mainApi
      .likeMovie(movie)
      .then(newMovie => {
        setSevedMovies([newMovie, ...savedMovies]);
      })
      .catch(err => {
        console.error(err);
      });
  };
  //b Удаление фильма
  const handleCardRemove = movie => {
    const returnMovie = movie._id
      ? movie
      : savedMovies.find(i => i.movieId === movie.id);
    mainApi
      .removeCard(returnMovie._id)
      .then(() => {
        setSevedMovies(
          savedMovies.filter(item => item._id !== returnMovie._id)
        );
      })
      .catch(err => {
        console.error(err);
      });
  };
  //b Выход
  const logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("checked");
    localStorage.removeItem("searchQuery");
    localStorage.removeItem("filteredMovies");
    setLoggedIn(false);
    setCurrentUser({});
    navigate("signin");
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Header loggedIn={loggedIn} locationPath={locationPath(pathname)} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    moviesAll={moviesAll}
                    onCardLike={handleCardLike}
                    onRemoveMovie={handleCardRemove}
                    savedMovies={savedMovies}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies
                    savedMovies={savedMovies}
                    onRemoveMovie={handleCardRemove}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile
                    logOut={logOut}
                    onUpdateUserInfo={handleUpdateUser}
                    errAuth={errAuth}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  onRegistration={onRegistration}
                  loggedIn={loggedIn}
                  errAuth={errAuth}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  onLogin={onLogin}
                  loggedIn={loggedIn}
                  errAuth={errAuth}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer locationPath={locationPath(pathname)} />
        </CurrentUserContext.Provider>
      )}
    </>
  );
};
