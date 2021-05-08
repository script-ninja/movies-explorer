import './Login.css';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';
import Logo from '../Logo/Logo';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';

export default function Login() {
  return (
    <Main className='login'>
      <Logo />
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form'>
        <FormInput label='E-mail' type='email' placeholder='Введите e-mail' required />
        <FormInput label='Пароль' type='password' placeholder='Введите пароль' required />
        <FormButton name='Войти' />
      </form>
      <p className='login__text'>Ещё не зарегистрированы? <Link className='login__link' to='/signup'>Регистрация</Link></p>
    </Main>
  );
}