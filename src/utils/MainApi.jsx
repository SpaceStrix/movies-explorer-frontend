class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  #onResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject({ message: "Возникла ошибка", response });
  }

  //b массив карточек
  getAllCard() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(response => {
      return this.#onResponse(response);
    });
  }
  //b добавление новой карточки
  addNewCardToServer({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(response => {
      return this.#onResponse(response);
    });
  }
  //b удаление карточки
  removeCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(response => {
      return this.#onResponse(response);
    });
  }
  //b информация о пользователе
  getUserInfoFromServer() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(response => {
      return this.#onResponse(response);
    });
  }
  //b редактирование профиля
  setNewUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(response => {
      return this.#onResponse(response);
    });
  }

  //b удаляем либо ставим лайк
  toggleLike(idCard, liked) {
    return fetch(`${this._url}/cards/${idCard}/likes `, {
      method: liked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(response => {
      return this.#onResponse(response);
    });
  }

  getInitialData() {
    return Promise.all([this.getUserInfoFromServer()]);
  }
}

export const configApi = {
  url: "http://localhost:3005",
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
};

export const mainApi = new MainApi(configApi);
