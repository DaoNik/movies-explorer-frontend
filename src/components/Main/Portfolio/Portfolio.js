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
