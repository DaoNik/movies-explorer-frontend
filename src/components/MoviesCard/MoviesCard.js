import React from 'react';
import './MoviesCard.css';

function MoviesCard({ saved, active, movie }) {
  console.log(movie);
  const { nameRU: title, duration, image } = movie;

  function newDuration(duration) {
    let newDuration;
    if (duration > 60) {
      newDuration = `${Math.floor(duration / 60)}ч ${duration % 60}м`;
      return newDuration;
    }
    newDuration = `${duration % 60}м`;
    return newDuration;
  }

  return (
    <li className='gallery__list-item'>
      <h3 className='gallery__list-title'>{title}</h3>
      <p className='gallery__list-subtitle'>{newDuration(duration)}</p>
      <button
        className={`gallery__list-item-button link ${
          saved ? 'gallery__delete-button' : ''
        } ${
          active
            ? 'gallery__list-item-button_active'
            : 'gallery__list-item-button_saved'
        }
        }`}
        type='button'
      ></button>
      <img
        className='gallery__item-image'
        src={`https://api.nomoreparties.co/${image.url}`}
        alt='Картинка карточки'
      ></img>
    </li>
  );
}

export default MoviesCard;
