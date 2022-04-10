import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import Preloader from "./Preloader/Preloader";

function Movies({ saved }) {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isSavedMovies, setIsSavedMovies] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [allSavedMovies, setAllSavedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isShortMovie, setIsShortMovie] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchMovies, setIsSearchMovies] = useState(false);
  const [isSearchSavedMovies, setIsSearchSavedMovies] = useState(false);

  function saveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        setAllMovies((state) =>
          state.map((c) => {
            if (c.id === res.movieId) {
              c._id = res._id;
              c.saved = true;
            }
            return c;
          })
        );
        setMovies((state) =>
          state.map((c) => {
            if (c.id === res.movieId) {
              c._id = res._id;
              c.saved = true;
            }
            return c;
          })
        );
        localStorage.setItem('movies', JSON.stringify(movies));
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function deleteMovie(id) {
    mainApi
      .deleteMovie(id)
      .then((res) => {
        setAllMovies((state) =>
          state.map((c) => {
            if (c.id === res.movieId) {
              delete c._id;
              c.saved = false;
            }
            return c;
          })
        );
        setMovies((state) =>
          state.map((c) => {
            if (c.id === res.movieId) {
              delete c._id;
              c.saved = false;
            }
            return c;
          })
        );
        localStorage.setItem('movies', JSON.stringify(movies));
        setSavedMovies((state) => state.filter((c) => c._id !== id));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .getSavedMovies()
      .then((res) => {
        res.length ? setIsSavedMovies(true) : setIsSavedMovies(false);
        setAllSavedMovies(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsSavedMovies(false);
        setIsLoading(false);
      });
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
    setIsLoading(true);
    setIsSearchMovies(true);
    const result = allMovies.filter((movie) => {
      return (
        (movie.nameRU?.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN?.toLowerCase().includes(searchValue.toLowerCase())) &&
        (isShortMovie ? true : movie.duration > 40)
      );
    });
    result.map((movie) => {
      movie.saved = false;
      allSavedMovies.forEach((saveMovie) => {
        if (saveMovie.movieId === movie.id) {
          movie.saved = true;
        }
      });
      return movie;
    });
    localStorage.setItem('movies', JSON.stringify(result));
    setMovies([...result]);
    setIsLoading(false);
  }

  function searchSavedMovies() {
    setIsLoading(true);
    setIsSearchSavedMovies(true);
    const result = allSavedMovies.filter((movie) => {
      return (
        (movie.nameRU?.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN?.toLowerCase().includes(searchValue.toLowerCase())) &&
        (isShortMovie ? true : movie.duration > 40)
      );
    });
    localStorage.setItem('saveMovies', JSON.stringify(result));
    setSavedMovies([...result]);
    setIsLoading(false);
  }

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm
          saved={saved}
          isSearchSavedMovies={isSearchSavedMovies}
          isSearchMovies={isSearchMovies}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchMovies={searchMovies}
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
          searchSavedMovies={searchSavedMovies}
        />
        {saved ? (
          <SavedMovies
            movies={savedMovies}
            allSavedMovies={allSavedMovies}
            isSavedMovies={isSavedMovies}
            deleteMovie={deleteMovie}
            isSearchSavedMovies={isSearchSavedMovies}
          />
        ) : (
          <MoviesCardList
            movies={movies}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            isSearchMovies={isSearchMovies}
          />
        )}
        <Preloader isLoading={isLoading} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
