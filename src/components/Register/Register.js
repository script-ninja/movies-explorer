import './Register.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';
import Logo from '../Logo/Logo';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';

export default function Register({ onRegister }) {
  const [credentials, setCredentials] = React.useState({ name: '', email: '', password: '' });

  function onChange(event) {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  }

  function register(event) {
    event.preventDefault();
    onRegister(credentials);
  }

  return (
    <Main className='register'>
      <Logo />
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form name='register' className='register__form' onSubmit={ register }>
        <FormInput onChange={onChange} name='name' label='Имя' type='text' placeholder='Укажите ваше имя' minLength='2' maxLength='30' required autoComplete='username' />
        <FormInput onChange={onChange} name='email' label='E-mail' type='email' placeholder='Укажите ваш e-mail' required autoComplete='email' />
        <FormInput onChange={onChange} name='password' label='Пароль' type='password' placeholder='Придумайте пароль' required autoComplete='new-password' />
        <p className='register__message'>Что-то пошло не так ...</p>
        <FormButton name='Зарегистрироваться' type='submit' />
      </form>
      <p className='register__text'>Уже зарегистрированы? <Link className='register__link' to='/signin'>Войти</Link></p>
    </Main>
  );
}