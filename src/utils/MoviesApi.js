class MoviesApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject('Произошла ошибка');
  }

  addMovies() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => this._checkRequest(res));
  }
}

export default new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});
