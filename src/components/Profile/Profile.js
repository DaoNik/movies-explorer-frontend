import React from 'react';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  return (
    <>
      <Header />
      <main className='profile'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <p className='profile__user-data'>
          <span>Имя</span>
          <span>Виталий</span>
        </p>
        <hr className='profile__hr' />
        <p className='profile__user-data'>
          <span>E-mail</span>
          <span>pochta@yandex.ru</span>
        </p>
        <button
          className='profile__button profile__button_margin'
          type='button'
        >
          Редактировать
        </button>
        <button className='profile__button profile__button_red' type='button'>
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;
