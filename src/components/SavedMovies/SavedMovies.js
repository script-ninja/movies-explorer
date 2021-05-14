import React from 'react';
import './SavedMovies.css';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/api';

export default function SavedMovies() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

  function deleteSavedMovie(id) {
    return api.deleteMovie(id)
      .then(deletedMovie => setSavedMovies(savedMovies.filter(movie => movie._id !== deletedMovie._id)))
      .catch(err => err);
  }

  React.useEffect(() => {
    setIsLoading(true);

    api.getMovies()
      .then(movies => setSavedMovies(movies))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Main className='main_sideindent_big'>
      <SearchForm />
      <MovieCardsList>
        {
          (isLoading)
            ? <Preloader />
            :
              (savedMovies.length)
                ? savedMovies.map(movie => (<MovieCard key={movie._id} movie={movie} onDelete={deleteSavedMovie} hiddenDeleteButton />))
                : <p className='saved-movies-message'>Нет сохраненных фильмов</p>
        }
      </MovieCardsList>
    </Main>
  );
}