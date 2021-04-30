import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardsList from '../MovieCardsList/MovieCardsList';

export default function Movies() {
  return (
    <Main>
      <SearchForm />
      <MovieCardsList />
    </Main>
  );
}