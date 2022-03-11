import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
      </main>
    </>
  );
}

export default Movies;
