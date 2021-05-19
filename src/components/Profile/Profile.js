import './Profile.css';
import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUser';
import Main from '../Main/Main';

import FormValidator from '../../utils/FormValidator';
import { MESSAGES } from '../../utils/constants';

export default function Profile({ onUpdate, onLogout }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  function sameData(name, email) {
    return name === currentUser.name && email === currentUser.email;
  }

  function onNameChange(event) {
    setName(event.target.value);
    if (sameData(event.target.value, email)) {
      const submitButton = document.forms.profile.querySelector('.profile__button_type_submit');
      submitButton.classList.add('profile__button_disabled');
      submitButton.disabled = true;
    }
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
    if (sameData(name, event.target.value)) {
      const submitButton = document.forms.profile.querySelector('.profile__button_type_submit');
      submitButton.classList.add('profile__button_disabled');
      submitButton.disabled = true;
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    const messageElement = document.forms.profile.querySelector('.profile__message');
    const submitButton = event.target.querySelector('.profile__button_type_submit');
    submitButton.classList.add('profile__button_disabled');
    submitButton.disabled = true;

    onUpdate({ name, email })
      .then(() => {
        messageElement.classList.add('profile__message_type_success');
        messageElement.textContent = MESSAGES.PROFILE.UPDATED;
        setTimeout(() => {
          messageElement.classList.remove('profile__message_type_success');
          messageElement.textContent = '';
        }, 1500);
      })
      .catch(err => {
        messageElement.textContent = err;
      });
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

  React.useEffect(() => {
    const validator = new FormValidator({
      inputSelector: '.profile__input',
      invalidInputClass: 'profile__input_invalid',
      submitSelector: '.profile__button_type_submit',
      submitDisabledClass: 'profile__button_disabled',
      errorMessageSelector: '.profile__message'
    }, document.forms.profile);

    validator.enable();
    validator.clearStatus();
  }, []);

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
            minLength='2' maxLength='30' required
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
            required
          />
        </label>
        <p name='profileMessage' className='profile__message'></p>
        <button name='profileSubmitButton' className='profile__button profile__button_type_submit' type='submit'>Редактировать</button>
      </form>
      <button className='profile__button profile__button_type_signout'
        onClick={onLogout} type='button'>
          Выйти из аккаунта
      </button>
    </Main>
  );
}
