import React, { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies({ movies, isSavedMovies }) {
  function createCards(movies) {
    const arrCards = [];
    if (!movies || movies.length === 0) {
      return arrCards;
    }
    for (let i = 0; i < movies.length; i++) {
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
      <ul className='gallery__list'>
        {isSavedMovies ? createCards(movies) : 'К сожалению, ничего не найдено'}
      </ul>
    </section>
  );
}

export default SavedMovies;
