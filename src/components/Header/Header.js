import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
import sidebar_icon from '../../images/sidebar_icon.svg';

function Header() {
  return (
    <header className='header'>
      <a href='/' className='header__logo link'>
        <img src={logo} alt='логотип проекта' />
      </a>
      <nav className='header__nav'>
        <NavLink to='/movies' className='header__link link'>
          Фильмы
        </NavLink>
        <NavLink to='/saved-movies' className='header__link link'>
          Сохранённые фильмы
        </NavLink>
        <NavLink
          to='/profile'
          className='header__link header__link_value-acc link'
        >
          Аккаунт
          <img
            className='header__img-profile'
            src={profile}
            alt='изображение фигуры человека'
          />
        </NavLink>
        <button className='header__btn' type='button'>
          <img src={sidebar_icon} alt='кнопка открытия бокового меню' />
        </button>
      </nav>
    </header>
  );
}

export default Header;
