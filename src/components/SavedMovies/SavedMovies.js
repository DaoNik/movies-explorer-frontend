import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  function createCards(n) {
    const arrCards = [];
    for (let i = 0; i < n; i++) {
      arrCards[i] = <MoviesCard saved={true} key={i} />;
    }
    return arrCards;
  }

  return (
    <section className='gallery'>
      <ul className='gallery__list'>{createCards(3)}</ul>
      <button className='gallery__button'>Ещё</button>
    </section>
  );
}

export default SavedMovies;
