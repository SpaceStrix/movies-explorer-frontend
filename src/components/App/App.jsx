import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";
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

export const App = () => {
  // Состояния
  const [loggedIn, setLoggedIn] = useState(false); // Состояние авторизации
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [userData, setUserData] = useState(null); // Данные пользователя
  const [currentUser, setCurrentUser] = useState({}); // Контекст текущего пользователя
  const navigate = useNavigate(); //

  const handleUpdateUser = newData => {
    console.log(newData);
    mainApi
      .setNewUserInfo(newData)
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getInitialData()
        .then(([getDataUserInfo]) => {
          setCurrentUser(getDataUserInfo);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [loggedIn]);

  const onAuth = useCallback(data => {
    localStorage.setItem("jwt", data.token);
    setLoggedIn(true);
    // setUserData(data.user);
    navigate("/");
  }, []);

  const logOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setUserData("");
    navigate("signin");
  };

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
        setUserData(user);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  }, []);

  const onRegistration = useCallback(
    async ({ name, email, password }) => {
      try {
        setLoading(true);
        const data = await auth.register({ name, email, password });
        onLogin({ name, email, password });
        onAuth(data);
        return data;
      } catch {
      } finally {
        setLoading(false);
      }
    },
    [onAuth]
  );

  const onLogin = useCallback(async ({ email, password }) => {
    try {
      setLoading(true);
      const data = await auth.login({ email, password });
      if (!data) {
        throw new Error("Неверный пароль или почта");
      }
      if (data.token) {
        onAuth(data);
      }
      // setUserData(email);
      return data;
    } catch {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Header loggedIn={loggedIn} />
        {loading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies />
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
        )}
        <Footer />
      </>
    </CurrentUserContext.Provider>
  );
};
