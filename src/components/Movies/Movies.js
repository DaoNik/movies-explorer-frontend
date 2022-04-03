import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function Movies({ saved }) {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isSavedMovies, setIsSavedMovies] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isShortMovie, setIsShortMovie] = useState(true);

  function saveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function deleteMovie(id) {
    mainApi
      .deleteMovie(id)
      .then((res) => {
        setSavedMovies((state) => state.filter((c) => c._id !== id));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        res.length ? setIsSavedMovies(true) : setIsSavedMovies(false);
        setSavedMovies(res);
      })
      .catch((err) => setIsSavedMovies(false));
  }, []);

  useEffect(() => {
    moviesApi
      .addMovies()
      .then((res) => setAllMovies([...res]))
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  function searchMovies() {
    const result = allMovies.filter((movie) => {
      console.log(movie);
      return (
        (movie.nameRU?.includes(searchValue) ||
          movie.nameEN?.includes(searchValue) ||
          movie.description?.includes(searchValue)) &&
        (isShortMovie ? true : movie.duration > 40)
      );
    });
    result.map((movie) => {
      movie.saved = false;
      savedMovies.forEach((saveMovie) => {
        if (saveMovie.movieId === movie.id) {
          movie.saved = true;
        }
      });
      return movie;
    });
    console.log(result, allMovies);
    localStorage.setItem('movies', JSON.stringify(result));
    setMovies([...result]);
  }

  console.log(movies);

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchMovies={searchMovies}
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
        />
        {saved ? (
          <SavedMovies
            movies={savedMovies}
            isSavedMovies={isSavedMovies}
            deleteMovie={deleteMovie}
          />
        ) : (
          <MoviesCardList
            movies={JSON.parse(localStorage.getItem('movies'))}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
