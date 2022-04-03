import React from 'react';
import './SearchForm.css';

function SearchForm({
  searchValue,
  setSearchValue,
  searchMovies,
  isShortMovie,
  setIsShortMovie,
}) {
  function handleChangeSearch(e) {
    setSearchValue(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    searchMovies();
    setSearchValue('');
  }

  function handleClickCheckbox() {
    setIsShortMovie(!isShortMovie);
  }

  return (
    <section className='search'>
      <form className='search__form' onSubmit={onSubmit}>
        <div className='search__search-container'>
          <input
            placeholder='Фильм'
            className='search__input-search'
            type='text'
            required
            value={searchValue}
            onChange={handleChangeSearch}
          />
          <button type='submit' className='search__btn-submit link'></button>
        </div>
        <label className='search__label-check'>
          Короткометражки
          <input
            onClick={handleClickCheckbox}
            type='checkbox'
            className='search__input-check'
          />
          <div
            className={`search__div-check ${
              isShortMovie ? '' : 'search__div-check_uncheck'
            } link`}
          >
            <div className='search__tumb-check ' />
          </div>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
