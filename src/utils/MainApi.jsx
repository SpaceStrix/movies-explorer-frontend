class MainApi {
  constructor(config) {
    this._url = config;
  }
  #onResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject({ message: "Возникла ошибка", response });
  }

  //b # возвращает информацию о пользователе (email и имя)
  getUserInfoFromServer() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(response => {
      return this.#onResponse(response);
    });
  }
  //b # обновляет информацию о пользователе (email и имя)
  setNewUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(response => {
      return this.#onResponse(response);
    });
  }

  //b # возвращает все сохранённые текущим  пользователем фильмы
  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(response => {
      return this.#onResponse(response);
    });
  }

  //b # создаёт фильм с переданными в теле # country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
  likeMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      }),
    }).then(response => {
      return this.#onResponse(response);
    });
  }

  //b # удаляет сохранённый фильм по id
  removeCard(idMovie) {
    return fetch(`${this._url}/movies/${idMovie}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(response => {
      return this.#onResponse(response);
    });
  }

  getInitialData() {
    return Promise.all([this.getSavedMovies(), this.getUserInfoFromServer()]);
  }
}

// const configApi = "http://localhost:3005";
const configApi = "https://api.moviespace.nomoredomainsclub.ru";
export const mainApi = new MainApi(configApi);
