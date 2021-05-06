import './Register.css';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';
import Logo from '../Logo/Logo';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';

export default function Register() {
  return (
    <Main className='register'>
      <Logo />
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form'>
        <FormInput label='Имя' type='text' placeholder='Укажите ваше имя' minLength='2' maxLength='30' required />
        <FormInput label='E-mail' type='email' placeholder='Укажите ваш e-mail' required />
        <FormInput label='Пароль' type='password' placeholder='Придумайте пароль' required />
        <p className='register__message'>Что-то пошло не так ...</p>
        <FormButton name='Зарегистрироваться' />
      </form>
      <p className='register__text'>Уже зарегистрированы? <Link className='register__link' to='/signin'>Войти</Link></p>
    </Main>
  );
}