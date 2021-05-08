import './SavedMovies.css';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MovieCard from '../MovieCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';

// fake saved movies
import savedMoviesArray from '../../data/savedMovies';

export default function SavedMovies() {
  return (
    <Main className='main_sideindent_big'>
      <SearchForm />
      <MovieCardsList>
        {
          (savedMoviesArray.length)
            ? savedMoviesArray.map(movie => (<MovieCard key={movie._id} movie={movie} hiddenDeleteButton />))
            : <h2 className='saved-movies-message'>Нет сохраненных фильмов</h2>
        }
      </MovieCardsList>
      {
        (savedMoviesArray.length > 3 && <MoreButton />)
      }
    </Main>
  );
}