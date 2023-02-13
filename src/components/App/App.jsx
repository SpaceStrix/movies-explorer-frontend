import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { Footer } from "../Footer/Footer";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Хук useLocation возвращает объект текущего местоположения
  const location = useLocation();

  useEffect(() => {
    console.log("Current location is ", location.pathname);
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register loggedIn={loggedIn} />} />
        <Route path="/signin" element={<Login loggedIn={loggedIn} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
