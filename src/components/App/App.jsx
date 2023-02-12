import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { Footer } from "../Footer/Footer";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
