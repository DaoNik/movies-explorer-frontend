import React, {useEffect, useState} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, setMovies, saveMovie, deleteMovie, isSearchMovies }) {
  const windowInnerWidth = window.innerWidth;
  const [arrMovies, setArrMovies] = useState([]);
  const [addMovie, setAddMovie] = useState(0);

  function handleAddMovies() {
    const result = [];
    if ( movies.length - arrMovies.length < addMovie ) {
      for (let i = arrMovies.length; i < movies.length; i++) {
        result.push(movies[i])
      }
    } else {
      for (let i = arrMovies.length; i < arrMovies.length + addMovie; i++) {
        result.push(movies[i])
      }
    }
    if (arrMovies.length + result.length === movies.length) {
      setAddMovie(0);
    }
    setArrMovies([...arrMovies, ...result]);
  }

  useEffect(() => {
    if (localStorage.getItem('movies') ) {
      setMovies(JSON.parse(localStorage.getItem('movies')))
    }
  }, [])

  useEffect(() => {
    const result = [];
    if (movies.length > 12 && windowInnerWidth >= 1280) {
      for (let i = 0; i < 12; i++) {
        result.push(movies[i])
      }
      setAddMovie(3);
    } else if (movies.length > 8 && windowInnerWidth >= 768) {
      for (let i = 0; i < 8; i++) {
        result.push(movies[i])
      }
      setAddMovie(2)
    } else if (movies.length > 5 && windowInnerWidth >= 320 && windowInnerWidth < 768) {
      for (let i = 0; i < 5; i++) {
        result.push(movies[i])
      }
      setAddMovie(1);
    } else if (movies.length) {
     result.push(...movies);
    } else {
      setAddMovie(0);
    }
    setArrMovies(result);
  }, [movies])

  return (
    <section className='gallery'>
      <ul className='gallery__list'>{arrMovies.length ? arrMovies.map((movie) => {
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
      }) : `${isSearchMovies ? '?? ??????????????????, ???????????? ???? ??????????????' : ''}`}</ul>
      {addMovie ?<button className='gallery__button link' onClick={handleAddMovies}>??????</button> : ''}
    </section>
  );
}

export default MoviesCardList;
