import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';
import Logo from '../Logo/Logo';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';

import FormValidator from '../../utils/FormValidator';

export default function Login({ onLogin }) {
  const [credentials, setCredentials] = React.useState({ email: '', password: '' });

  function onChange(event) {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  }

  function login(event) {
    event.preventDefault();
    onLogin(credentials)
      .catch(err => {
        const message = document.forms.login.querySelector('.login__message');
        message.textContent = err;
      });
  }

  React.useEffect(() => {
    const validator = new FormValidator({
      inputSelector: '.forminput__field',
      invalidInputClass: 'forminput__field_invalid',
      submitSelector: '.formbutton',
      submitDisabledClass: 'formbutton_disabled',
      errorMessageSelector: '.login__message'
    }, document.forms.login);

    validator.enable();
  }, []);

  return (
    <Main className='login'>
      <Logo />
      <h2 className='login__title'>Рады видеть!</h2>
      <form name='login' className='login__form' onSubmit={ login }>
        <FormInput onChange={onChange} name='email' label='E-mail' type='email' placeholder='Введите e-mail' required autoComplete='email' />
        <FormInput onChange={onChange} name='password' label='Пароль' type='password' placeholder='Введите пароль' required autoComplete='current-password'/>
        <p className='login__message'></p>
        <FormButton name='Войти' type='submit' />
      </form>
      <p className='login__text'>Ещё не зарегистрированы? <Link className='login__link' to='/signup'>Регистрация</Link></p>
    </Main>
  );
}