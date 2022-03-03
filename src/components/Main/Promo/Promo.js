import React from 'react';
import webPlanet from '../../../images/web-planet.svg';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__about'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className='promo__caption'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a className='promo__link' href='#about'>
          Узнать&nbsp;больше
        </a>
      </div>
      <img src={webPlanet} alt='Планета из надписей WEB' />
    </section>
  );
}

export default Promo;
