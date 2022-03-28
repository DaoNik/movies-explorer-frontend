import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  function createCards(n) {
    const arrCards = [];
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        arrCards[i] = <MoviesCard saved={false} active={true} key={i} />;
      } else {
        arrCards[i] = <MoviesCard saved={false} active={false} key={i} />;
      }
    }
    return arrCards;
  }

  return (
    <section className='gallery'>
      <ul className='gallery__list'>{createCards(21)}</ul>
      <button className='gallery__button link'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
