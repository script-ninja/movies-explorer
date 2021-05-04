import './FormButton.css'

export default function FormButton({ name }) {
  return (
    <button className='formbutton' type='submit'>{ name }</button>
  );
}