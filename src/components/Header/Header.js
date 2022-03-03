import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <a href='/' className='header__logo'></a>
      <nav className='header__nav'>
        <a href='/signup' className='header__link'>
          Регистрация
        </a>
        <a href='/signin' className='header__link header__link_value-login'>
          Войти
        </a>
      </nav>
    </header>
  );
}

export default Header;
