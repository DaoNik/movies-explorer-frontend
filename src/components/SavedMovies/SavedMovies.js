import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies({
  movies,
  allSavedMovies,
  isSavedMovies,
  deleteMovie,
  isSearchSavedMovies,
}) {
  const [arrMovies, setArrMovies] = useState([]);

  useEffect(() => {
    isSearchSavedMovies ? setArrMovies(movies) : setArrMovies(allSavedMovies);
  }, [movies, allSavedMovies]);

  return (
    <section className='gallery gallery_saved'>
      <ul className='gallery__list'>
        {arrMovies.length
          ? arrMovies.map((movie) => {
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
          : `${isSearchSavedMovies ? 'К сожалению, ничего не найдено' : ''}`}
      </ul>
    </section>
  );
}

export default SavedMovies;
