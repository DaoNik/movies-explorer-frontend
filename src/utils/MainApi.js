class MainApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _getToken() {
    return `Bearer ${localStorage.getItem('token')}`;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject('Произошла ошибка');
  }

  register = (name, email, password) => {
    console.log(name, email, password);
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then((response) => {
      return this._checkRequest(response);
    });
  };

  login = (email, password) => {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      return this._checkRequest(response);
    });
  };

  updateUser = (name) => {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._getToken(),
        ...this.headers,
      },
      body: JSON.stringify({ name }),
    }).then((res) => this._checkRequest(res));
  };
}

export default new MainApi({
  url: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});
