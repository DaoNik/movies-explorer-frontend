import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__menu'>
        <span className='footer__date'>&copy; {new Date().getFullYear()}</span>
        <ul className='footer__nav'>
          <li>
            <a
              className='footer__link link'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс Практикум
            </a>
          </li>
          <li>
            <a
              className='footer__link link'
              href='https://github.com/DaoNik'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
          <li>
            <a
              className='footer__link link'
              href='https://vk.com/daonik'
              target='_blank'
              rel='noreferrer'
            >
              VK
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
