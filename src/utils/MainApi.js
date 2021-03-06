class MainApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _handleError(status) {
    switch (status) {
      case 400:
        return 'Неверные данные';
      case 401:
        return 'Ошибка авторизации';
      case 403:
        return 'Вы не можете изменить эти данные';
      case 404:
        return 'Страница не найдена';
      case 409:
        return 'Эта почта уже используется';
      default:
        return 'Произошла ошибка сервера';
    }
  }

  _getToken() {
    return `Bearer ${localStorage.getItem('token')}`;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(this._handleError(res.status));
  }

  getSavedMovies = () => {
    return fetch(`${this._url}/movies/`, {
      method: 'GET',
      headers: {
        authorization: this._getToken(),
        ...this._headers,
      },
    }).then((response) => {
      return this._checkRequest(response);
    });
  };

  saveMovie = (movie) => {
    return fetch(`${this._url}/movies/`, {
      method: 'POST',
      headers: {
        authorization: this._getToken(),
        ...this._headers,
      },
      body: JSON.stringify(movie),
    }).then((response) => {
      return this._checkRequest(response);
    });
  };

  deleteMovie = (movieId) => {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._getToken(),
        ...this._headers,
      },
    }).then((res) => {
      return this._checkRequest(res);
    });
  };

  register = (name, email, password) => {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(
        name ? { name, email, password } : { email, password }
      ),
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

  updateUser = (name, email) => {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._getToken(),
        ...this._headers,
      },
      body: JSON.stringify({ name, email }),
    }).then((res) => this._checkRequest(res));
  };
}

export default new MainApi({
  url: 'https://api.daonik.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json',
  },
});
