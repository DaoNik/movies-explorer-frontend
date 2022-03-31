import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link link'
            href='https://github.com/DaoNik/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <span className='portfolio__link-arrow'>↗</span>
          </a>
        </li>
        <hr className='portfolio__hr' />
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link link'
            href='https://github.com/DaoNik/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <span className='portfolio__link-arrow'>↗</span>
          </a>
        </li>
        <hr className='portfolio__hr' />
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link link'
            href='https://github.com/DaoNik/react-mesto-api-full'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <span className='portfolio__link-arrow'>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
