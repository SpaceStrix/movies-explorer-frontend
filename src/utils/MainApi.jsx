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
}

const configApi = "http://localhost:3005";
export const mainApi = new MainApi(configApi);
