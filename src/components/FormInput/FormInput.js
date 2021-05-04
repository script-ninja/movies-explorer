import './FormInput.css';

export default function FormInput({ label, ...rest }) {
  return (
    <label className='forminput'>
      { label }
      <input className='forminput__field' { ...rest } />
    </label>
  );
}
