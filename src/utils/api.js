import { API_URL } from './constants';

class API {
  constructor(options) {
    this._url = options.url;
  }

  _parseResponse(res) {
    return res.json()
      .then(data => res.ok ? data : Promise.reject(data.message));
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
}

export default new API({ url: API_URL });