import React from 'react';

import './FilterCheckbox.css';

export default function FilterCheckbox({ name, label }) {
  React.useEffect(() => {
    document.querySelector(`input[name="${name}"]`).checked = localStorage.getItem(`${name}`) === 'true';
  }, [name]);

  function saveState(event) {
    localStorage.setItem(`${name}`, String(event.target.checked));
  }

  return (
    <label className='checkbox-label'>
      <input name={name} className='checkbox' type='checkbox' onChange={ saveState } />
      { label }
    </label>
  );
}
