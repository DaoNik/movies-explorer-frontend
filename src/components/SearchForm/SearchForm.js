import React, {useEffect} from 'react';
import './SearchForm.css';

function SearchForm({
  saved,
  searchValue,
  setSearchValue,
  searchMovies,
  isShortMovie,
  setIsShortMovie,
  searchSavedMovies,
  isSearchSavedMovies,
  isSearchMovies
}) {
  function handleChangeSearch(e) {
    setSearchValue(e.target.value);
  }

  function onSubmitMovies(e) {
    e.preventDefault();
    localStorage.setItem('searchMovies', searchValue);
    searchMovies();
  }

  function onSubmitSavedMovies(e) {
    e.preventDefault();

    searchSavedMovies();
  }

  function handleClickCheckbox() {
    setIsShortMovie(!isShortMovie);
    if (saved) {
      searchSavedMovies()
    } else if (!saved) {
      localStorage.setItem('checkbox', (!isShortMovie).toString());
      searchMovies()
    }
  }

  useEffect(() => {
    if (localStorage.getItem('searchMovies') && !saved) {
      setSearchValue(localStorage.getItem('searchMovies'))
    }
    if (localStorage.getItem('checkbox') &&
        localStorage.getItem('checkbox') === 'true' &&
        !saved) {
      setIsShortMovie(true);
    } else if (localStorage.getItem('checkbox') &&
      localStorage.getItem('checkbox') === 'false' &&
      !saved) {
      setIsShortMovie(false);
    }
  }, [])

  return (
    <section className='search'>
      <form
        className='search__form'
        onSubmit={saved ? onSubmitSavedMovies : onSubmitMovies}
      >
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
