import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';

function Movies({ saved }) {
  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        {saved ? <SavedMovies /> : <MoviesCardList />}
      </main>
    </>
  );
}

export default Movies;
