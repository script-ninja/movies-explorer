import './AboutMe.css';
import photo from '../../../images/photo.jpg';

export default function AboutMe() {
  return (
    <section id='aboutme' className='aboutme'>
      <h2 className='aboutme__title'>Студент</h2>

      <img className='aboutme__photo' src={ photo } alt='Фотография'/>

      <h3 className='aboutme__name'>Виталий</h3>
      <p className='aboutme__status'>Фронтенд-разработчик, 30 лет</p>
      <p className='aboutme__story'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
      <ul className='aboutme__list'>
        <li>
          <a className='aboutme__list-link' href='https://facebook.com' target='_blank' rel='noreferrer'>Facebook</a>
        </li>
        <li>
          <a className='aboutme__list-link' href='https://github.com' target='_blank' rel='noreferrer'>Github</a>
        </li>
      </ul>
      <h3 className='aboutme__caption'>Портфолио</h3>
      <ul className='aboutme__portfolio'>
        <li>
          <a className='aboutme__portfolio-link' href='https://github.com/script-ninja/how-to-learn' target='_blank' rel='noreferrer'>Статичный сайт</a>
        </li>
        <li>
          <a className='aboutme__portfolio-link' href='https://github.com/script-ninja/russian-travel' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
        </li>
        <li>
          <a className='aboutme__portfolio-link' href='https://github.com/script-ninja/react-mesto-api-full' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}