import React from 'react';
import './MovieCard.css';
import CurrentUserContext from '../../contexts/CurrentUser';
import preview from '../../images/preview.jpg';

import { BASE_URL } from '../../utils/constants';
import api from '../../utils/api';

export default function MovieCard({ movie, onDelete, hiddenDeleteButton }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [currentMovie, setCurrentMovie] = React.useState(movie.owner ? movie : {
    country: movie.country || 'No country',
    director: movie.director || 'No director',
    duration: movie.duration || 0,
    year: movie.year || 'No year',
    description: movie.description || 'No description',
    image: `${movie.image && movie.image.url ? BASE_URL + movie.image.url : preview}`,
    trailer: movie.trailer || movie.trailerLink || 'https://youtube.com',
    thumbnail: movie.thumbnail || `${movie.image && movie.image.formats && movie.image.formats.thumbnail && movie.image.formats.thumbnail ? BASE_URL + movie.image.formats.thumbnail.url : preview}`,
    movieId: movie.movieId || movie.id || null,
    nameRU: movie.nameRU || 'Без названия',
    nameEN: movie.nameEN || 'No title'
  });

  function toString(duration) {
    const hours = (duration - duration % 60) / 60;
    const minutes = duration % 60;

    let result = hours ? hours.toString() + 'ч ' : '';
    result = result + minutes.toString() + 'м';
    return result;
  }

  function saveMovie(event) {
    event.target.disabled = true;

    return api.saveMovie(currentMovie)
      .then(movie => setCurrentMovie(movie))
      .catch(err => console.log(err))
      .finally(() => event.target.disabled = false);
  }

  function deleteMovie(event) {
    event.target.disabled = true;

    (onDelete
      ?
        onDelete(currentMovie._id)
      :
        api.deleteMovie(currentMovie._id)
          .then(deletedMovie => setCurrentMovie({ ...deletedMovie, owner: undefined, _id: undefined  }))
    )
    .catch(err => console.log(err))
    .finally(() => event.target.disabled = false);
  }

  return (
    <figure className='moviecard'>
      <a className='moviecard__link' href={ currentMovie.trailer } target='_blank' rel="noreferrer">
        <img className='moviecard__image' src={ currentMovie.image } alt={ currentMovie.nameRU }/>
      </a>
      <figcaption className='moviecard__caption'>
        <h2 className='moviecard__title' title={ currentMovie.nameRU }>{ currentMovie.nameRU }</h2>
        <p className='moviecard__duration'>{ toString(currentMovie.duration) }</p>
      </figcaption>
      {
        (currentMovie.owner === currentUser._id)
          ? <button onClick={deleteMovie} className={`moviecard__deletebutton ${hiddenDeleteButton ? 'moviecard__deletebutton_hidden' : 'moviecard__deletebutton_checked'}`} type='button'></button>
          : <button onClick={saveMovie} className='moviecard__savebutton' type='button'>Сохранить</button>
      }
    </figure>
  );
}
