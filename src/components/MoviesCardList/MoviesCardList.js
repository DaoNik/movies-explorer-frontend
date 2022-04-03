import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  const windowInnerWidth = window.innerWidth;
  console.log(windowInnerWidth);
  function createCards(n) {
    const arrCards = [];
    if (!movies || movies.length === 0) {
      return arrCards;
    }
    for (let i = 0; i < n; i++) {
      arrCards[i] = (
        <MoviesCard
          saved={false}
          active={false}
          key={movies[i].id}
          movie={movies[i]}
        />
      );
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
