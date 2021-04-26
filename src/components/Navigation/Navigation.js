import './Navigation.css';

export default function Navigation(props) {
  return (
    <nav className={`navigation ${props.className || ''}`}>
      { props.children }
    </nav>
  );
}