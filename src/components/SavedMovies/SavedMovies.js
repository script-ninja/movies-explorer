import React from 'react';
import './SavedMovies.css';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/api';
import { filter } from '../../utils/movies';

export default function SavedMovies() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [profileFilteredMovies, setProfileFilteredMovies] = React.useState([]);
  const [statusMessage, setStatusMessage] = React.useState('Нет сохраненных фильмов');

  function deleteSavedMovie(id) {
    return api.deleteMovie(id)
      .then(deletedMovie => {
        setSavedMovies(savedMovies.filter(movie => movie._id !== deletedMovie._id));
        setProfileFilteredMovies(profileFilteredMovies.filter(movie => movie._id !== deletedMovie._id));
      })
      .catch(err => err);
  }

  function searchMovies(filters) {
    setIsLoading(true);

    const filtered = filter(savedMovies, filters);

    if (filtered.length <= 0) setStatusMessage('Ничего не найдено');
    setProfileFilteredMovies(filtered);
    localStorage.setItem('profileFilteredMovies', JSON.stringify(filtered));

    setIsLoading(false);
  }

  function toggleShort(event) {
    const movies = JSON.parse(localStorage.getItem('profileFilteredMovies')) || [];
    const filteredMovies = event.target.checked
      ? filter(movies, { short: true })
      : movies;

    if (filteredMovies.length <= 0) setStatusMessage('Ничего не найдено');
    setProfileFilteredMovies(filteredMovies);
  }

  React.useEffect(() => {
    setIsLoading(true);

    api.getMovies()
      .then(movies => {
        setSavedMovies(movies);
        setProfileFilteredMovies(movies);
        localStorage.setItem('profileFilteredMovies', JSON.stringify(movies));
      })
      .catch(err => {
        console.log(err);
        setStatusMessage('При загрузке фильмов произошла ошибка');
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Main className='main_sideindent_big'>
      <SearchForm onSubmit={searchMovies} noRequestLimit={true} shortCheckboxName='profileCheckbox' onChangeShortFilter={toggleShort} />
      <MovieCardsList>
        {
          (isLoading)
            ? <Preloader />
            :
              (profileFilteredMovies.length)
                ? profileFilteredMovies.map(movie => (<MovieCard key={movie._id} movie={movie} onDelete={deleteSavedMovie} hiddenDeleteButton />))
                : <p className='saved-movies-message'>{statusMessage}</p>
        }
      </MovieCardsList>
    </Main>
  );
}