import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import './Hamburger.css';
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
      >
        Регистрация
      </NavLink>

      <NavLink
        className="header__link header__link_space-between_big header__link_style_button"
        to='/signin'
      >
        Войти
      </NavLink>
    </>);
  }

  function getAuthorizedLinks() {
    return (<>
      <div className='header__links'>
        <NavLink
          className='header__link header__link_space-between_small'
          activeClassName='header__link_active'
          to='/movies'
        >
          Фильмы
        </NavLink>
        <NavLink
          className='header__link header__link_space-between_small'
          activeClassName='header__link_active'
          to='/saved-movies'
        >
          Сохраненные фильмы
        </NavLink>
        <NavLink
          className='header__link header__link_space-between_small header__link_style_profile header__link_align_right'
          activeClassName='header__link_active-profile'
          to='/profile'
        >
          Аккаунт
        </NavLink>
      </div>

      <div className='hamburger'>
        <label className="hamburger__burger" onChange={(event) => {
          event.currentTarget.classList.toggle('hamburger__burger_rotate_45deg');
          event.currentTarget.nextSibling.classList.toggle('hamburger__overlay_visible');
          event.currentTarget.nextSibling.firstChild.classList.toggle('hamburger__menu_visible');
        }}>
          <input className='hamburger__checkbox' type="checkbox" />
        </label>

        <div className='hamburger__overlay'>
          <div className='hamburger__menu'>
            <NavLink
              className='hamburger__link'
              activeClassName='hamburger__link_active'
              exact to='/'
            >
              Главная
            </NavLink>
            <NavLink
              className='hamburger__link'
              activeClassName='hamburger__link_active'
              to='/movies'
            >
              Фильмы
            </NavLink>
            <NavLink
              className='hamburger__link'
              activeClassName='hamburger__link_active'
              to='/saved-movies'
            >
              Сохраненные фильмы
            </NavLink>
            <NavLink
              className='hamburger__link hamburger__link_style_profile hamburger__link_align_bottom'
              activeClassName='hamburger__profile-link_active'
              to='/profile'
            >
              Аккаунт
            </NavLink>
          </div>
        </div>
      </div>
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
};
