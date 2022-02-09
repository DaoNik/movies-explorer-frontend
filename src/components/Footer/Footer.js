import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__menu'>
        <span>&copy; {new Date().getFullYear()}</span>
        <ul className='footer__nav'>
          <li>
            <a className='footer__link' href='https://practicum.yandex.ru/'>
              Яндекс Практикум
            </a>
          </li>
          <li>
            <a className='footer__link' href='#'>
              Github
            </a>
          </li>
          <li>
            <a className='footer__link' href='#'>
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
