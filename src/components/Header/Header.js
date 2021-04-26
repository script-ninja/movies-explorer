import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import CurrentUserContext from '../../contexts/CurrentUser';

export default function Header() {
  const currentUser = React.useContext(CurrentUserContext);

  function getUnauthorizedLinks() {
    return (<>
      <NavLink
        className="header__link header__link_space-between_big"
        to='/signup'
        replace
      >
        Регистрация
      </NavLink>

      <NavLink
        className="header__link header__link_space-between_big header__link_style_button"
        to='/signin'
        replace
      >
        Войти
      </NavLink>
    </>);
  }

  function getAuthorizedLinks() {
    return (<>
      <NavLink
        className='header__link header__link_space-between_small'
        activeClassName='header__link_active'
        to='/movies'
        replace
      >
        Фильмы
      </NavLink>

      <NavLink
        className='header__link header__link_space-between_small'
        activeClassName='header__link_active'
        to='/saved-movies'
        replace
      >
        Сохраненные фильмы
      </NavLink>

      <NavLink
        className='header__link header__link_space-between_small header__link_style_profile'
        activeClassName='header__link_active-profile'
        to='/profile'
        replace
      >
        Аккаунт
      </NavLink>
    </>);
  }

  return (
    <header className="header">
      <Logo />
      <Navigation className='header__navigation'>
        { !currentUser.authorized ? getUnauthorizedLinks() : getAuthorizedLinks() }
      </Navigation>
    </header>
  );
}
