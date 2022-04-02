import React, { useState } from 'react';
import './PopupUpdateUser.css';

function PopupUpdateUser({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('');

  function handleChangeName(e) {
    setName(e.target.name);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(name);
  }

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <form className='popup__form' onSubmit={handleSubmit}>
          <h2 className='popup__title'>Введите новое имя</h2>
          <input
            className='popup__input'
            id='name'
            name='name'
            type='text'
            placeholder='Никнейм'
            minLength='2'
            maxLength='40'
            value={name}
            onChange={handleChangeName}
            required
          />
          <span className='popup__error' id='name-error'></span>
          <button type='submit' className='popup__btn'>
            Изменить имя
          </button>
        </form>
        <button
          onClick={onClose}
          type='button'
          className='popup__btn-closed'
          aria-label='Кнопка закрытия всплывающего окна'
        ></button>
      </div>
    </div>
  );
}

export default PopupUpdateUser;
