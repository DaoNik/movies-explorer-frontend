import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  function createCards(n) {
    const arrCards = [];
    for (let i = 0; i < n; i++) {
      arrCards[i] = <MoviesCard key={i} />;
    }
    return arrCards;
  }

  return (
    <section className='gallery'>
      <ul className='gallery__list'>{createCards(21)}</ul>
      <button className='gallery__button'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
