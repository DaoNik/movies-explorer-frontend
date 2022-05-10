import React from 'react';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ onLogout, setIsOpenPopup }) {
  function handleUpdate() {
    setIsOpenPopup(true);
  }

  function handleLogout() {
    onLogout();
  }

  return (
    <>
      <Header />
      <main className='profile'>
        <h2 className='profile__title'>
          Привет, {localStorage.getItem('name')}!
        </h2>
        <p className='profile__user-data'>
          <span>Имя</span>
          <span>{localStorage.getItem('name')}</span>
        </p>
        <hr className='profile__hr' />
        <p className='profile__user-data'>
          <span>E-mail</span>
          <span>{localStorage.getItem('email')}</span>
        </p>
        <button
          className='profile__button profile__button_margin'
          type='button'
          onClick={handleUpdate}
        >
          Редактировать
        </button>
        <button
          onClick={handleLogout}
          className='profile__button link profile__button_red'
          type='button'
        >
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;
