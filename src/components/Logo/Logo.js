import { NavLink } from 'react-router-dom';
import './Logo.css';
import logo from '../../images/logo.svg';

export default function Logo() {
  return (
    <NavLink to='/' title='На главную' replace>
      <img className="logo" src={ logo } alt="Logo" />
    </NavLink>
  );
}