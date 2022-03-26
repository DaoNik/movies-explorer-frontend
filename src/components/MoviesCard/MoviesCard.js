import React from 'react';
import './MoviesCard.css';
import filmPreview from '../../images/film-preview.png';

function MoviesCard({ saved, active }) {
  return (
    <li className='gallery__list-item'>
      <h3 className='gallery__list-title'>33 слова о дизайне</h3>
      <p className='gallery__list-subtitle'>1ч 47м</p>
      <button
        className={`gallery__list-item-button ${
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
        src={filmPreview}
        alt='Картинка карточки'
      ></img>
    </li>
  );
}

export default MoviesCard;
