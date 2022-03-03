import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTab.css';
import logo from '../../../images/logo.svg';

function NavTab() {
  return (
    <header className='navtab'>
      <a href='/' className='navtab__logo'>
        <img src={logo} alt='логотип проекта' />
      </a>
      <nav className='navtab__nav'>
        <a href='/signup' className='navtab__link'>
          Регистрация
        </a>
        <a href='/signin' className='navtab__link navtab__link_value-login'>
          Войти
        </a>
      </nav>
    </header>
  );
}

export default NavTab;
