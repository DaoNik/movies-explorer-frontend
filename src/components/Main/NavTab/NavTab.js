import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTab.css';
import logo from '../../../images/logo.svg';

function NavTab() {
  return (
    <header className='navtab'>
      <NavLink to='/' className='navtab__logo link'>
        <img src={logo} alt='логотип проекта' />
      </NavLink>
      <nav className='navtab__nav'>
        <NavLink to='/signup' className='navtab__link link'>
          Регистрация
        </NavLink>
        <NavLink
          to='/signin'
          className='navtab__link navtab__link_value-login link'
        >
          Войти
        </NavLink>
      </nav>
    </header>
  );
}

export default NavTab;
