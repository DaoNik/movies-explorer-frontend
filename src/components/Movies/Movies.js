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
  const [isSavedMovies, setIsSavedMovies] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

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
      .then((res) => setMovies([...res]))
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  console.log(movies);

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        {saved ? (
          <SavedMovies movies={savedMovies} isSavedMovies={isSavedMovies} />
        ) : (
          <MoviesCardList movies={movies} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
