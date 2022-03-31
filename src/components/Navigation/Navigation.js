import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import profile from '../../images/profile.svg';

function Navigation({ isOpen, closeSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar_opened' : ''}`}>
      <section className='sidebar__container'>
        <NavLink to='/' className='sidebar__link link'>
          Главная
        </NavLink>
        <NavLink
          to='/movies'
          className='sidebar__link sidebar__link_active link'
        >
          Фильмы
        </NavLink>
        <NavLink to='/saved-movies' className='sidebar__link link'>
          Сохранённые фильмы
        </NavLink>
        <NavLink
          to='/profile'
          className='sidebar__link sidebar__link_value-acc link'
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
