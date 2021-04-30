import React from 'react';
import './MovieCard.css';
import CurrentUserContext from '../../contexts/CurrentUser';

export default function MovieCard({ movie }) {
  const currentUser = React.useContext(CurrentUserContext);

  function stringifyDuration(duration) {
    let minutes = (duration - duration % 60) / 60;
    const hours = (minutes - minutes % 60) / 60;
    minutes = minutes % 60;

    let result = hours ? hours.toString() + 'ч ' : '';
    result = result + minutes.toString() + 'м';
    return result;
  }

  return (
    <figure className='moviecard'>
      <a className='moviecard__link' href={ movie.trailer } target='_blank' rel="noreferrer">
        <img className='moviecard__image' src={ movie.image } alt={ movie.nameRU }/>
      </a>
      <figcaption className='moviecard__caption'>
        <h2 className='moviecard__title'>{ movie.nameRU }</h2>
        <p className='moviecard__duration'>{ stringifyDuration(movie.duration) }</p>
      </figcaption>
      {
        (movie.owner === currentUser._id)
          ? <button className='moviecard__deletebutton' type='button'></button>
          : <button className='moviecard__savebutton' type='button'>Сохранить</button>
      }
    </figure>
  );
}
