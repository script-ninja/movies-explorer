import './Logo.css';
import logo from '../../images/logo.svg';

export default function Logo() {
  return (
    <a href="/" title="На главную">
      <img className="logo" src={ logo } alt="Logo" />
    </a>
  );
}