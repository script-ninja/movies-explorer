import { API_URL } from './constants';

class API {
  constructor(options) {
    this._url = options.url;
  }

  _parseResponse(res) {
    return res.json()
      .then(data => res.ok ? data : Promise.reject(data.message));
  }

  register({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    .then(res => this._parseResponse(res));
  }

  authorize({ email, password }) {
    return fetch(`${this._url}/signin`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      .then(res => this._parseResponse(res));
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      })
      .then(res => this._parseResponse(res));
  }

  updateProfile({ name, email }) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(res => this._parseResponse(res));
  }

  getMovies() {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    })
    .then(res => this._parseResponse(res));
  }

  saveMovie(movie) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(movie)
    })
    .then(res => this._parseResponse(res));
  }

  deleteMovie(id) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    })
    .then(res => this._parseResponse(res));
  }
}

export default new API({ url: API_URL });