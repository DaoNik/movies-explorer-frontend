import React, { useEffect, useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ saved, active, movie, saveMovie, deleteMovie }) {
  const [isSaved, setIsSaved] = useState(saved);
  const [isActive, setIsActive] = useState(active);
  const { nameRU: title } = movie;

  const {
    country = 'Страна неизвестна',
    director = 'Директор неизвестен',
    duration = 60,
    year = 'Год неизвестен',
    description = 'Нет описания',
    image,
    trailerLink,
    id: movieId,
    nameRU,
    nameEN,
  } = movie;
  const imageUrl = isSaved
    ? movie.image
    : `https://api.nomoreparties.co/${image.url}`;
  const thumbnail = movie.thumbnail
    ? movie.thumbnail
    : `https://api.nomoreparties.co/${image.formats.thumbnail.hash}`;
  function newDuration(duration) {
    let newDuration;
    if (duration > 60) {
      newDuration = `${Math.floor(duration / 60)}ч ${duration % 60}м`;
      return newDuration;
    }
    newDuration = `${duration % 60}м`;
    return newDuration;
  }

  function handleSaved() {
    if (!isActive && !isSaved) {
      saveMovie({
        country,
        director,
        duration,
        year,
        description,
        image: imageUrl,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      });
      setIsActive(true);
    } else if (isActive) {
      deleteMovie(movie._id);
      setIsActive(false);
    } else if (isSaved) {
      deleteMovie(movie._id);
      setIsSaved(false);
    }
  }

  return (
    <li className='gallery__list-item'>
      <h3 className='gallery__list-title'>{title}</h3>
      <p className='gallery__list-subtitle'>{newDuration(duration)}</p>
      <button
        onClick={handleSaved}
        className={`gallery__list-item-button link ${
          isSaved ? 'gallery__delete-button' : ''
        } ${
          isActive
            ? 'gallery__list-item-button_active'
            : 'gallery__list-item-button_saved'
        }
        }`}
        type='button'
      ></button>
      <img
        className='gallery__item-image'
        src={imageUrl}
        alt='Картинка карточки'
      ></img>
    </li>
  );
}

export default MoviesCard;
