import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__group">
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__link" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href="https://github.com" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}