import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

export default function SearchForm() {
  return (
    <form className='search'>
      <div className='search__field'>
        <label className='search__label' htmlFor='search-input'></label>
        <input id='search-input' className='search__input' type='text' placeholder='Фильм' />
        <button className='search__button' type='submit'></button>
      </div>
      <div className='search__filters'>
        <FilterCheckbox name='Короткометражки' />
      </div>
    </form>
  );
}
