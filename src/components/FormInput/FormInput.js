import './FormInput.css';

export default function FormInput({ label, ...props }) {
  return (
    <label className='forminput'>
      { label }
      <input className='forminput__field' { ...props } />
    </label>
  );
}
