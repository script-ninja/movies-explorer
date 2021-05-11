import React from 'react';

import './Movies.css';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MovieCard from '../MovieCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';
import Preloader from '../Preloader/Preloader';

import beatfilmApi from '../../utils/beatfilmAPI';

export default function Movies() {
  const [beatfilmMovies, setBeatfilmMovies] = React.useState(JSON.parse(localStorage.getItem('movies') || '[]'));
  const [isLoading, setIsLoading] = React.useState(false);

  function getMovies(filters) {
    setIsLoading(true);
    setBeatfilmMovies([]);

    return beatfilmApi.getMovies()
      .then(movies => {
        const filteredMovies = movies.filter(movie => {
          return (
            String(movie.nameRU + movie.nameEN + movie.description).toLowerCase().includes(filters.request.toLowerCase(), 0)
            &&
            (filters.short ? movie.duration <= 40 : true)
          );
        });
        setBeatfilmMovies(filteredMovies);
        localStorage.setItem('movies', JSON.stringify(filteredMovies))
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  return (
    <Main className='main_sideindent_big'>
      <SearchForm onSubmit={getMovies} />
      <MovieCardsList>
        {
          (isLoading)
            ? <Preloader />
            :
              (beatfilmMovies.length)
                ? beatfilmMovies.map(movie => (<MovieCard key={movie.id} movie={movie} />))
                : <h2 className='movies-message'>Фильмов не найдено</h2>
        }
      </MovieCardsList>
      {
        (beatfilmMovies.length > 3 && <MoreButton />)
      }
    </Main>
  );
}