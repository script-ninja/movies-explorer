import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardsList from '../MovieCardsList/MovieCardsList';
import MoreButton from '../MoreButton/MoreButton';

export default function Movies() {
  return (
    <Main className='main_sideindent_big'>
      <SearchForm />
      <MovieCardsList />
      <MoreButton />
    </Main>
  );
}