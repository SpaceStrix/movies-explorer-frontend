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

  //b информация о пользователе
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
  //b редактирование профиля
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

  // getInitialData() {
  //   return Promise.all([this.getSavedMovies(), this.getUserInfoFromServer()]);
  // }
}

const configApi = "http://localhost:3005";
export const mainApi = new MainApi(configApi);
