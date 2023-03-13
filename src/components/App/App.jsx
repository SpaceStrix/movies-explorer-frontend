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

  // STATE для Movies
  const [moviesAll, setMoviesAll] = useState([]); //

  // useNavigate
  const navigate = useNavigate();

  // useLocation
  const { pathname } = useLocation(); // Забираем из объекта локации pathname
  const locationPath = pathname => {
    return (
      pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  // Проверка токена
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

  // Запросы
  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfoFromServer()
        .then(userData => {
          setLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch(err => {
          console.error(err);
        });

      // Получаем все фильмы
      moviesApi
        .getAllMovies()
        .then(dataMovies => {
          // localStorage.setItem("allMovies", JSON.stringify(dataMovies));
          setMoviesAll(dataMovies);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);

  // Обвновление профиля
  const handleUpdateUser = newData => {
    mainApi
      .setNewUserInfo(newData)
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const onAuth = useCallback(data => {
    localStorage.setItem("jwt", data.token);
    setLoggedIn(true);
    navigate("/");
  }, []);

  // Регистрация
  const onRegistration = ({ name, email, password }) => {
    auth
      .register({ name, email, password })
      .then(data => {
        setLoading(true);
        navigate("/signin");
        return data;
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  // Авторизация
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
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  // Выход
  const logOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setCurrentUser({});
    navigate("signin");
    // localStorage.clear();
  };

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
                  <Movies moviesAll={moviesAll} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies />
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
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <Register onRegistration={onRegistration} loggedIn={loggedIn} />
              }
            />
            <Route
              path="/signin"
              element={<Login onLogin={onLogin} loggedIn={loggedIn} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer locationPath={locationPath(pathname)} />
        </CurrentUserContext.Provider>
      )}
    </>
  );
};
