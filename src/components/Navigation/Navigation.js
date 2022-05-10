import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';
import profile from '../../images/profile.svg';

function Navigation({ isOpen, closeSidebar }) {
  const location = useLocation();

  return (
    <div className={`sidebar ${isOpen ? 'sidebar_opened' : ''}`}>
      <section className='sidebar__container'>
        <NavLink
          to='/'
          className={`sidebar__link ${
            location.pathname === '/' ? 'sidebar__link_active' : ''
          } link`}
        >
          Главная
        </NavLink>
        <NavLink
          to='/movies'
          className={`sidebar__link ${
            location.pathname === '/movies' ? 'sidebar__link_active' : ''
          } link`}
        >
          Фильмы
        </NavLink>
        <NavLink
          to='/saved-movies'
          className={`sidebar__link ${
            location.pathname === '/saved-movies' ? 'sidebar__link_active' : ''
          } link`}
        >
          Сохранённые фильмы
        </NavLink>
        <NavLink
          to='/profile'
          className={`sidebar__link ${
            location.pathname === '/profile'
              ? 'sidebar__link-profile_active'
              : ''
          } sidebar__link_value-acc link`}
        >
          Аккаунт
          <img
            className='sidebar__img-profile'
            src={profile}
            alt='изображение фигуры человека'
          />
        </NavLink>
        <button
          onClick={closeSidebar}
          className='sidebar__btn'
          type='button'
        ></button>
      </section>
    </div>
  );
}

export default Navigation;
