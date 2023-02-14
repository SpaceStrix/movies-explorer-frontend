import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";

function App() {
  // Состояние авторизации
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/movies" element={<Movies loggedIn={loggedIn} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies loggedIn={loggedIn} />}
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
      </Routes>
    </>
  );
}

export default App;
