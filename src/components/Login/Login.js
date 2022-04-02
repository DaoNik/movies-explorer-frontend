import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import '../Register/Register.css';
import { NavLink } from 'react-router-dom';

function Login({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(email, password);
  }

  return (
    <>
      <main className='register'>
        <h1 className='register__title'>Рады видеть!</h1>
        <img className='register__logo' src={logo} alt='Логотип' />
        <form className='register__form' onSubmit={handleSubmit}>
          <label htmlFor='register-email' className='register__label'>
            E-mail
          </label>
          <input
            className='register__input'
            name='register-email'
            id='register-email'
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor='register-pass' className='register__label'>
            Пароль
          </label>
          <input
            className='register__input'
            name='register-pass'
            id='register-pass'
            type='password'
            value={password}
            onChange={handleChangePassword}
          />
          <button
            className='register__submit register__submit_login'
            type='submit'
          >
            Войти
          </button>
          <p className='register__question'>
            Ещё не зарегистрированы?{' '}
            <NavLink to='/signup' className='link register__link'>
              Регистрация
            </NavLink>
          </p>
        </form>
      </main>
    </>
  );
}

export default Login;
