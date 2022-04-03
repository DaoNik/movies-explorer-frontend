import React, { useState } from 'react';
import './PopupUpdateUser.css';

function PopupUpdateUser({
  isOpen,
  onClose,
  onSubmit,
  errorPopup,
  setErrorPopup,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(localStorage.getItem('email'));

  function handleChangeName(e) {
    setName(e.target.value);
    setErrorPopup('');
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    setErrorPopup('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(name, email);
    setName('');
  }

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <form className='popup__form' onSubmit={handleSubmit}>
          <h2 className='popup__title'>Введите новые данные пользователя</h2>
          <input
            className='popup__input'
            type='text'
            placeholder='Никнейм'
            minLength='2'
            maxLength='40'
            value={name}
            onChange={handleChangeName}
            required
          />
          <span className='popup__error' id='name-error'></span>
          <input
            className='popup__input'
            type='email'
            placeholder='Email'
            minLength='2'
            maxLength='200'
            value={email}
            onChange={handleChangeEmail}
            required
          />
          <span className='popup__error' id='name-error'>
            {errorPopup}
          </span>
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
