import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

export default function Header({ authorized }) {
  authorized = true;

  function setActiveLink(path) {
    const pathname = window.location.pathname
    if (pathname === '/profile' && pathname === path) return 'header__link_active-profile';
    if (pathname !== '/profile' && pathname === path) return 'header__link_active';
    return '';
  }

  function getUnauthorizedLinks() {
    return (<>
      <Link
        className="header__link header__link_space-between_big"
        to='/signup'
      >
        Регистрация
      </Link>

      <Link
        className="header__link header__link_space-between_big header__link_style_button"
        to='/signin'
      >
        Войти
      </Link>
    </>);
  }

  function getAuthorizedLinks() {
    return (<>
      <Link
        className={`header__link header__link_space-between_small ${setActiveLink('/movies')}`}
        to='/movies'
      >
        Фильмы
      </Link>

      <Link
        className={`header__link header__link_space-between_small ${setActiveLink('/saved-movies')}`}
        to='/saved-movies'
      >
        Сохраненные фильмы
      </Link>

      <Link
        className={`header__link header__link_space-between_small header__link_style_profile ${setActiveLink('/profile')}`}
        to='/profile'
      >
        Аккаунт
      </Link>
    </>);
  }

  return (
    <header className="header">
      <Logo />
      <Navigation>
        { !authorized ? getUnauthorizedLinks() : getAuthorizedLinks() }
      </Navigation>
    </header>
  );
}
