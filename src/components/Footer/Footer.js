import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__group">
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__link" href="https://praktikum.yandex.ru">Яндекс.Практикум</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href="https://github.com">Github</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href="https://facebook.com">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}