import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__search-container'>
          <input
            placeholder='Фильм'
            className='search__input-search'
            type='text'
          />
          <button type='submit' className='search__btn-submit'></button>
        </div>
        <label className='search__label-check'>
          Короткометражки
          <input type='checkbox' className='search__input-check' />
          <div className='search__div-check'>
            <div className='search__tumb-check ' />
          </div>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
