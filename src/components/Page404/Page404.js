import React from 'react';
import { NavLink } from 'react-router-dom';

import './Page404.css';

function Page404() {
  return (
    <main className='page404'>
      <h1 className='page404__title'>404</h1>
      <p className='page404__subtitle'>Страница не найдена</p>
      <NavLink className='page404__link link' to='/'>
        Назад
      </NavLink>
    </main>
  );
}

export default Page404;
