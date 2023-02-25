export const MAIN_BACK_URL = "http://localhost:3005"; //МОЙ БЭК
// export const MAIN_BACK_URL = "https://api.moviespace.nomoredomainsclub.ru/"; //МОЙ БЭК Сервера
// export const MOVIE_BACK_URL = "https://api.nomoreparties.co/beatfilm-movies"; // БЭК ФИЛЬМОВ

//  Первоночальный ответ сервера, вернет либо json, либо Promise
const checkResponse = res =>
  res.ok ? res.json() : Promise.reject(`что-то не так ${res.statusText}`); // ответ сервера

// РЕГИСТРАЦИЯ ПОЛЬЗОВАТЕЛЯ
export const register = (name, email, password) => {
  return fetch(`${MAIN_BACK_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name, email, password),
  }).then(checkResponse);
};

// АВТОРИЗАЦИЯ ПОЛЬЗОВАТЕЛЯ
export const login = (name, email, password) => {
  return fetch(`${MAIN_BACK_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name, email, password),
  }).then(checkResponse);
};

export const checkToken = token => {
  return fetch(`${MAIN_BACK_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
