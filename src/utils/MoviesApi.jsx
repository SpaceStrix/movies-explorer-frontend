class MoviesApi {
  constructor() {
    this._url = "https://api.nomoreparties.co/beatfilm-movies";
  }
  #onResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject({ message: "Возникла ошибка", response });
  }

  getAllMovies() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then(response => {
      return this.#onResponse(response);
    });
  }
}

export const moviesApi = new MoviesApi();
