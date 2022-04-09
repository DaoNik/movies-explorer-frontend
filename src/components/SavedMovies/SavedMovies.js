import React, { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies({ movies, isSavedMovies, deleteMovie }) {
  return (
    <section className='gallery gallery_saved'>
      <ul className='gallery__list'>
        {movies.length
          ? movies.map((movie) => {
              return (
                <MoviesCard
                  saved={true}
                  active={false}
                  key={movie._id}
                  movie={movie}
                  deleteMovie={deleteMovie}
                />
              );
            })
          : 'К сожалению, ничего не найдено'}
      </ul>
    </section>
  );
}

export default SavedMovies;
