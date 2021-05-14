import React from 'react';

import './Movies.css';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MovieCard from '../MovieCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';
import Preloader from '../Preloader/Preloader';

// import CurrentUserContext from '../../contexts/CurrentUser';
import api from '../../utils/api';
import beatfilmApi from '../../utils/beatfilmAPI';

export default function Movies() {
  // const currentUser = React.useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [beatfilmMovies, setBeatfilmMovies] = React.useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [profileMovies, setProfileMovies] = React.useState([]);

  function searchMovies(filters) {
    setIsLoading(true);
    setBeatfilmMovies([]);

    return beatfilmApi.getMovies()
      .then(movies => {
        const filteredMovies = movies.filter(movie => {
          return (
            (movie.nameRU + movie.nameEN + movie.description).toLowerCase().includes(filters.request.toLowerCase(), 0)
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

  React.useEffect(() => {
    api.getMovies()
      .then(movies => setProfileMovies(movies))
      .catch(err => console.log(err));
  }, []);

  return (
    <Main className='main_sideindent_big'>
      <SearchForm onSubmit={searchMovies} />
      <MovieCardsList>
        {
          (isLoading)
            ? <Preloader />
            :
              (beatfilmMovies.length)
                ?
                  beatfilmMovies.map(movie => {
                    const profileMovie = profileMovies.find(profileMovie => profileMovie.movieId === movie.id);
                    return (<MovieCard key={(profileMovie && profileMovie._id) || movie.id} movie={profileMovie || movie} />)
                  })
                : <p className='movies-message'>Фильмов не найдено</p>
        }
      </MovieCardsList>
      {
        (beatfilmMovies.length > 3 && <MoreButton />)
      }
    </Main>
  );
}