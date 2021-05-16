import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

export default function SearchForm({ onSubmit, noRequestLimit, shortCheckboxName, onChangeShortFilter }) {
  async function submit(event) {
    event.preventDefault();

    event.target.elements.request.disabled = true;
    event.target.elements.filters.disabled = true;

    await onSubmit({
      request: event.target.elements.request.elements.text.value,
      short: event.target.elements.filters.elements[shortCheckboxName].checked
    });

    event.target.elements.request.disabled = false;
    event.target.elements.filters.disabled = false;
  }

  return (
    <form name='search' className='search' onSubmit={submit}>
      <fieldset name='request' className='search__field'>
        <label className='search__label' htmlFor='search-input'></label>
        {
          noRequestLimit
            ? <input name='text' id='search-input' className='search__input' type='text' placeholder='Фильм' />
            : <input name='text' id='search-input' className='search__input' type='text' placeholder='Фильм' minLength='2' required />
        }
        <button className='search__button' type='submit'></button>
      </fieldset>
      <fieldset name='filters' className='search__filters'>
        <FilterCheckbox name={shortCheckboxName} label='Короткометражки' onChange={onChangeShortFilter} />
      </fieldset>
    </form>
  );
}
