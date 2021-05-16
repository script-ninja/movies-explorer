import './MoreButton.css';

export default function MoreButton({ onClick }) {
  return (
    <button onClick={onClick} className='morebutton morebutton_indent_big' type='button'>Ещё</button>
  );
}