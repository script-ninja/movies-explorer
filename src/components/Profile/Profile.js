import './Profile.css';
import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUser';
import Main from '../Main/Main';

export default function Profile({ onUpdate, onLogout }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    onUpdate({ name, email });
  }

  function onFocus(event) {
    event.currentTarget
      .querySelector('.profile__label_border-bottom_gray')
      .classList.add('profile__label_border-bottom_green');
  }

  function onBlur(event) {
    event.currentTarget
      .querySelector('.profile__label_border-bottom_gray')
      .classList.remove('profile__label_border-bottom_green');
  }

  return (
    <Main className='profile'>
      <h2 className='profile__caption'>Привет, {currentUser.name}!</h2>
      <form name='profile' className='profile__form' onSubmit={onSubmit} onFocus={onFocus} onBlur={onBlur}>
        <label className='profile__label profile__label_border-bottom_gray'>
          <p className='profile__label-text'>Имя</p>
          <input className='profile__input'
            type='text'
            value={name}
            onChange={onNameChange}
            placeholder='Ваше имя'
            autoComplete='username'
          />
        </label>
        <label className='profile__label'>
        <p className='profile__label-text'>E-mail</p>
          <input className='profile__input'
            type='email'
            value={email}
            onChange={onEmailChange}
            placeholder='E-mail адрес'
            autoComplete='email'
          />
        </label>
        <button className='profile__button profile__button_type_submit' type='submit'>Редактировать</button>
      </form>
      <button className='profile__button profile__button_type_signout'
        onClick={onLogout} type='button'>
          Выйти из аккаунта
      </button>
    </Main>
  );
}
