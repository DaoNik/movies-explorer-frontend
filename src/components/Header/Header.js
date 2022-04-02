import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
import sidebar_icon from '../../images/sidebar_icon.svg';
import Navigation from '../Navigation/Navigation';

function Header({ isMain }) {
  const [isOpen, setIsOpen] = React.useState(false);
  function openSidebar() {
    setIsOpen(true);
  }

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <header className={`header ${isMain ? 'header_main' : ''}`}>
      <NavLink to='/' className='header__logo link'>
        <img src={logo} alt='логотип проекта' />
      </NavLink>
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
        <button
          onClick={openSidebar}
          className='header__btn link'
          type='button'
        >
          <img src={sidebar_icon} alt='кнопка открытия бокового меню' />
        </button>
      </nav>
      <Navigation closeSidebar={closeSidebar} isOpen={isOpen} />
    </header>
  );
}

export default Header;
