import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies({ movies }) {
  function createCards(n) {
    const arrCards = [];
    if (!movies || movies.length === 0) {
      return arrCards;
    }
    for (let i = 0; i < n; i++) {
      arrCards[i] = (
        <MoviesCard
          saved={true}
          active={false}
          key={movies[i].id}
          movie={movies[i]}
        />
      );
    }
    return arrCards;
  }

  return (
    <section className='gallery gallery_saved'>
      <ul className='gallery__list'>{createCards(3)}</ul>
    </section>
  );
}

export default SavedMovies;
