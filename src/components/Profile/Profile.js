import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUser';
import './Profile.css';
import Main from '../Main/Main';

export default function Profile() {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function onFocus(event) {
    event.currentTarget.querySelector('.profile__label_border-bottom_gray').classList.add('profile__label_border-bottom_green');
  }

  function onBlur(event) {
    event.currentTarget.querySelector('.profile__label_border-bottom_gray').classList.remove('profile__label_border-bottom_green');
  }

  return (
    <Main className='profile'>
      <h2 className='profile__caption'>Привет, {currentUser.name}!</h2>
      <form className='profile__form' onFocus={onFocus} onBlur={onBlur}>
        <label className='profile__label profile__label_border-bottom_gray'>
          <p className='profile__label-text'>Имя</p>
          <input className='profile__input' type='text' value={name} onChange={handleNameChange} placeholder='Ваше имя' />
        </label>
        <label className='profile__label'>
        <p className='profile__label-text'>E-mail</p>
          <input className='profile__input' type='email' value={email} onChange={handleEmailChange} placeholder='E-mail адрес' />
        </label>
        <button className='profile__button profile__button_type_submit' type='submit'>Редактировать</button>
      </form>
      <button className='profile__button profile__button_type_signout' type='button'>Выйти из аккаунта</button>
    </Main>
  );
}
