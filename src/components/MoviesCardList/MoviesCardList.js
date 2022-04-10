import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, saveMovie, deleteMovie, isSearchMovies }) {
  const windowInnerWidth = window.innerWidth;

  return (
    <section className='gallery'>
      <ul className='gallery__list'>{movies.length ? movies.map((movie) => {
        return (
          <MoviesCard
            saved={false}
            active={movie.saved}
            key={movie.id}
            movie={movie}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
          />
        )
      }) : `${isSearchMovies ? 'К сожалению, ничего не найдено' : ''}`}</ul>
      {movies.length > 3 ?<button className='gallery__button link'>Ещё</button> : ''}
    </section>
  );
}

export default MoviesCardList;
