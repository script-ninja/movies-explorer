import React from 'react';

import './FilterCheckbox.css';

export default function FilterCheckbox({ name, label, onChange }) {
  React.useEffect(() => {
    const checkbox = document.querySelector(`input[name="${name}"]`);
    checkbox.checked = localStorage.getItem(`${name}`) === 'true';
    checkbox.addEventListener('change', (event) => localStorage.setItem(`${name}`, String(event.target.checked)))
  }, [name]);

  return (
    <label className='checkbox-label'>
      <input name={name} className='checkbox' type='checkbox' onChange={onChange} />
      { label }
    </label>
  );
}
