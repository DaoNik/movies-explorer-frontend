import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, saveMovie, deleteMovie }) {
  const windowInnerWidth = window.innerWidth;
  console.log(windowInnerWidth);

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
      }) : 'К сожалению, ничего не найдено'}</ul>
      {movies.length > 3 ?<button className='gallery__button link'>Ещё</button> : ''}
    </section>
  );
}

export default MoviesCardList;
