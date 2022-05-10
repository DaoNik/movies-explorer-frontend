import React, { useEffect, useState } from 'react';
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
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      emailError === '' &&
      nameError === '' &&
      name.length > 0 &&
      (localStorage.getItem('name') !== name ||
        localStorage.getItem('email') !== email)
    ) {
      setIsValid(true);
    } else if (
      localStorage.getItem('name') === name &&
      localStorage.getItem('email') === email
    ) {
      setErrorPopup('Значения не должны быть одинаковыми');
      setIsValid(false);
    } else {
      setIsValid(false);
    }
  }, [name, email]);

  function handleChangeName(e) {
    setName(e.target.value);
    if (e.target.value.length >= 2 && e.target.value.length <= 30) {
      setNameError('');
    } else {
      setNameError('Имя должно быть от 2 до 30 символов');
    }
    setErrorPopup('');
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    const regexp = /[a-zA-Z0-9]+@[a-z]+\.[a-z]+/;
    if (regexp.test(e.target.value)) {
      setEmailError('');
    } else {
      setEmailError('Неверно введена почта');
    }
    setErrorPopup('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(name, email);
    setName('');
  }

  function handleClosePopup() {
    setName('');
    setEmail(localStorage.getItem('email'));
    setErrorPopup('');
    setNameError('');
    setEmailError('');
    onClose();
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
          <span className='popup__error'>{nameError}</span>
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
          <span className='popup__error'>{emailError}</span>
          <span className='popup__error'>{errorPopup}</span>
          <button
            type='submit'
            className={`popup__btn ${isValid ? '' : 'popup__btn_disabled'}`}
            disabled={!isValid}
          >
            Изменить имя
          </button>
        </form>
        <button
          onClick={handleClosePopup}
          type='button'
          className='popup__btn-closed'
          aria-label='Кнопка закрытия всплывающего окна'
        ></button>
      </div>
    </div>
  );
}

export default PopupUpdateUser;
