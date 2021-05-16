import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

export default function SearchForm({ onSubmit, shortCheckboxName, onChangeShortFilter }) {
  function submit(event) {
    event.preventDefault();
    onSubmit({
      request: event.target.elements.request.elements.text.value,
      short: event.target.elements.filters.elements[shortCheckboxName].checked
    });
  }

  return (
    <form name='search' className='search' onSubmit={submit}>
      <fieldset name='request' className='search__field'>
        <label className='search__label' htmlFor='search-input'></label>
        <input name='text' id='search-input' className='search__input' type='text' placeholder='Фильм' required minLength='2' />
        <button className='search__button' type='submit'></button>
      </fieldset>
      <fieldset name='filters' className='search__filters'>
        <FilterCheckbox name={shortCheckboxName} label='Короткометражки' onChange={onChangeShortFilter} />
      </fieldset>
    </form>
  );
}
