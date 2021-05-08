import './FormButton.css'

export default function FormButton({ name, ...props }) {
  return (
    <button className='formbutton' { ...props }>{ name }</button>
  );
}