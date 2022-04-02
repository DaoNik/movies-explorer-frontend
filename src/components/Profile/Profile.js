import React from 'react';
import Header from '../Header/Header';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onLogout, setIsOpenPopup }) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleUpdate() {
    setIsOpenPopup(true);
  }

  function handleLogout() {
    console.log(onLogout);
    onLogout();
  }

  return (
    <>
      <Header />
      <main className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <p className='profile__user-data'>
          <span>Имя</span>
          <span>{currentUser.name}</span>
        </p>
        <hr className='profile__hr' />
        <p className='profile__user-data'>
          <span>E-mail</span>
          <span>{currentUser.email}</span>
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
