import './Promo.css';
import Navigation from '../../Navigation/Navigation';

export default function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <Navigation className='promo__nav'>
        <a className='promo__link' href='#project'>О проекте</a>
        <a className='promo__link' href='#techs'>Технологии</a>
        <a className='promo__link' href='#aboutme'>Студент</a>
      </Navigation>
    </section>
  );
}
