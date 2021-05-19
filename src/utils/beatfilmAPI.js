import { BEATFILM_URL } from './constants';

class BeatfilmAPI {
  constructor(options) {
    this._url = options.url;
  }

  _parseResponse(res, err) {
    return res.json()
      .then(data => res.ok ? data : Promise.reject(err));
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
      })
      .then(res => this._parseResponse(res, 'BeatfilmAPI: Ошибка получения фильмов.'));
  }
}

export default new BeatfilmAPI({ url: BEATFILM_URL });