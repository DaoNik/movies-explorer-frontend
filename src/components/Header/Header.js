import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';

function Header() {
  return (
    <header className='header'>
      <a href='/' className='header__logo link'>
        <img src={logo} alt='логотип проекта' />
      </a>
      <nav className='header__nav'>
        <a href='/movies' className='header__link link'>
          Фильмы
        </a>
        <a href='/saved-movies' className='header__link link'>
          Сохранённые фильмы
        </a>
        <a href='/profile' className='header__link header__link_value-acc link'>
          Аккаунт{' '}
          <img
            className='header__img-profile'
            src={profile}
            alt='изображение фигуры человека'
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;
