import React from 'react';
import './MovieCard.css';
import CurrentUserContext from '../../contexts/CurrentUser';
import preview from '../../images/preview.jpg';

import { BASE_URL } from '../../utils/constants';

export default function MovieCard({ movie, hiddenDeleteButton }) {
  const currentUser = React.useContext(CurrentUserContext);

  function toString(duration) {
    const hours = (duration - duration % 60) / 60;
    const minutes = duration % 60;

    let result = hours ? hours.toString() + 'ч ' : '';
    result = result + minutes.toString() + 'м';
    return result;
  }

  return (
    <figure className='moviecard'>
      <a className='moviecard__link' href={ movie.trailerLink || 'https://youtube.com' } target='_blank' rel="noreferrer">
        <img className='moviecard__image' src={ movie.image && movie.image.url ? `${BASE_URL + movie.image.url}` : preview } alt={ movie.nameRU }/>
      </a>
      <figcaption className='moviecard__caption'>
        <h2 className='moviecard__title' title={ movie.nameRU }>{ movie.nameRU }</h2>
        <p className='moviecard__duration'>{ toString(movie.duration) }</p>
      </figcaption>
      {
        (movie.owner === currentUser._id)
          ? <button className={`moviecard__deletebutton ${hiddenDeleteButton ? 'moviecard__deletebutton_hidden' : 'moviecard__deletebutton_checked'}`} type='button'></button>
          : <button className='moviecard__savebutton' type='button'>Сохранить</button>
      }
    </figure>
  );
}
