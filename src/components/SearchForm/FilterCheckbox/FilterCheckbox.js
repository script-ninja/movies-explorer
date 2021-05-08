import './FilterCheckbox.css';

export default function FilterCheckbox({ name }) {
  return (
    <label className='checkbox-label'>
      <input className='checkbox' type='checkbox' />
      { name }
    </label>
  );
}
