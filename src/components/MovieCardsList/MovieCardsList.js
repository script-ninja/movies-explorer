import './MovieCardsList.css';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieCardsList() {
  return (
    <section className='moviecardslist'>
      <MovieCard movie={{
        nameRU: '33 слова о дизайне',
        duration: '1980',
        image: 'https://img.youtube.com/vi/__2oZSM1l1Q/hqdefault.jpg',
        trailer: 'https://www.youtube.com/watch?v=__2oZSM1l1Q',
        owner: 0
      }} />
      <MovieCard movie={{
        nameRU: 'Киноальманах "100 лет дизайна"',
        duration: '6480',
        image: 'https://img.youtube.com/vi/clVPhymVdD8/hqdefault.jpg',
        trailer: 'https://www.youtube.com/watch?v=eW8Noh_pLSQ',
        owner: null
      }} />
      <MovieCard movie={{
        nameRU: '33 слова о дизайне',
        duration: '1980',
        image: 'https://img.youtube.com/vi/__2oZSM1l1Q/hqdefault.jpg',
        trailer: 'https://www.youtube.com/watch?v=__2oZSM1l1Q',
        owner: 0
      }} />
      <MovieCard movie={{
        nameRU: 'Gimme Danger: История Игги и The Stooges',
        duration: '1980',
        image: 'https://img.youtube.com/vi/__2oZSM1l1Q/hqdefault.jpg',
        trailer: 'https://www.youtube.com/watch?v=__2oZSM1l1Q',
        owner: null
      }} />
      <MovieCard movie={{
        nameRU: 'Киноальманах "100 лет дизайна"',
        duration: '6480',
        image: 'https://img.youtube.com/vi/clVPhymVdD8/hqdefault.jpg',
        trailer: 'https://www.youtube.com/watch?v=eW8Noh_pLSQ',
        owner: 0
      }} />
      <MovieCard movie={{
        nameRU: '33 слова о дизайне',
        duration: '1980',
        image: 'https://img.youtube.com/vi/__2oZSM1l1Q/hqdefault.jpg',
        trailer: 'https://www.youtube.com/watch?v=__2oZSM1l1Q',
        owner: null
      }} />
    </section>
  );
}
