import React from 'react';

import './Movies.css';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MovieCard from '../MovieCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/api';
import beatfilmApi from '../../utils/beatfilmAPI';
import { filter } from '../../utils/movies';

export default function Movies() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [profileMovies, setProfileMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState(JSON.parse(localStorage.getItem('filteredMovies')) || []);
  const [displayedMovies, setDisplayedMovies] = React.useState([]);
  const [statusMessage, setStatusMessage] = React.useState('Начните поиск');

  function searchMovies(filters) {
    setIsLoading(true);
    setFilteredMovies([]);

    return beatfilmApi.getMovies()
      .then(movies => {
        const requestedMovies = filter(movies, { request: filters.request });
        const filteredMovies = filter(requestedMovies, { short: filters.short });

        localStorage.setItem('movies', JSON.stringify(requestedMovies));
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
        setFilteredMovies(filteredMovies);
        if (filteredMovies.length <= 0) setStatusMessage('Ничего не найдено');
      })
      .catch(err => {
        console.log(err);
        setStatusMessage('Во время запроса произошла ошибка');
      })
      .finally(() => setIsLoading(false));
  }

  function toggleShort(event) {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const filteredMovies = event.target.checked
      ? filter(movies, { short: true })
      : movies;

    if (filteredMovies.length <= 0) setStatusMessage('Ничего не найдено');
    setFilteredMovies(filteredMovies);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  }

  function showMore() {
    if (document.documentElement.clientWidth > 1056) {
      setDisplayedMovies(filteredMovies.slice(0, displayedMovies.length + 3));
    }
    else {
      setDisplayedMovies(filteredMovies.slice(0, displayedMovies.length + 2));
    }
  }

  React.useEffect(() => {
    setIsLoading(true);

    api.getMovies()
      .then(movies => setProfileMovies(movies))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    if (document.documentElement.clientWidth > 1056) {
      setDisplayedMovies(filteredMovies.slice(0, 12));
    }
    else if (document.documentElement.clientWidth > 666) {
      setDisplayedMovies(filteredMovies.slice(0, 8));
    }
    else {
      setDisplayedMovies(filteredMovies.slice(0, 5));
    }
  }, [filteredMovies]);

  return (
    <Main className='main_sideindent_big'>
      <SearchForm onSubmit={searchMovies} shortCheckboxName='mainCheckbox' onChangeShortFilter={toggleShort} />
      <MovieCardsList>
        {
          (isLoading)
            ? <Preloader />
            :
              (displayedMovies.length)
                ?
                  displayedMovies.map(movie => {
                    const profileMovie = profileMovies.find(profileMovie => profileMovie.movieId === movie.id);
                    return (<MovieCard key={(profileMovie && profileMovie._id) || movie.id} movie={profileMovie || movie} />);
                  })
                : <p className='movies-message'>{statusMessage}</p>
        }
      </MovieCardsList>
      {
        (displayedMovies.length < filteredMovies.length) && <MoreButton onClick={showMore} />
      }
    </Main>
  );
}