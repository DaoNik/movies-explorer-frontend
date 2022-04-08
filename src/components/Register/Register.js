import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register({ onSubmit, errorRegister, setErrorRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleRegister(e) {
    e.preventDefault();

    onSubmit(name, email, password);
  }

  return (
    <>
      <main className='register'>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <NavLink to='/' className='link'>
          <img className='register__logo' src={logo} alt='Логотип' />
        </NavLink>
        <form className='register__form' onSubmit={handleRegister}>
          <label htmlFor='register-name' className='register__label'>
            Имя
          </label>
          <input
            className='register__input'
            name='register-name'
            id='register-name'
            minLength='2'
            maxLength='30'
            value={name}
            onChange={handleChangeName}
          />
          <label htmlFor='register-email' className='register__label'>
            E-mail
          </label>
          <input
            className='register__input'
            name='register-email'
            id='register-email'
            required
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor='register-pass' className='register__label'>
            Пароль
          </label>
          <input
            className='register__input'
            name='register-pass'
            type='password'
            id='register-pass'
            required
            value={password}
            onChange={handleChangePassword}
          />
          <p className='register__error'>{errorRegister}</p>
          <button className='register__submit' type='submit'>
            Зарегистрироваться
          </button>
          <p className='register__question'>
            Уже зарегистрированы?{' '}
            <NavLink to='/signin' className='link register__link'>
              Войти
            </NavLink>
          </p>
        </form>
      </main>
    </>
  );
}

export default Register;
