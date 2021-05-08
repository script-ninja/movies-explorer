import './Page404.css';
import { useHistory } from 'react-router-dom';
import Main from '../Main/Main';

export default function Page404() {
  const history = useHistory();

  return (
    <Main className='page404'>
      <h2 className='page404__title'>404</h2>
      <p className='page404__text'>Страница не найдена</p>
      <button className='page404__button' onClick={() => history.goBack()} type='button'>Назад</button>
    </Main>
  );
}