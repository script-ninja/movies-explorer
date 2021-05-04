import './Movies.css';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MovieCard from '../MovieCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';

// fake movies
import moviesArray from '../../data/movies';

export default function Movies() {
  return (
    <Main className='main_sideindent_big'>
      <SearchForm />
      <MovieCardsList>
        {
          (moviesArray.length)
            ? moviesArray.map(movie => (<MovieCard key={movie._id} movie={movie} />))
            : <h2 className='movies-message'>Фильмов не найдено</h2>
        }
      </MovieCardsList>
      {
        (moviesArray.length > 3 && <MoreButton />)
      }
    </Main>
  );
}