import React from 'react';
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {
  return (
    <>
      <main className='register'>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <img className='register__logo' src={logo} alt='Логотип' />
        <form className='register__form'>
          <label htmlFor='register-name' className='register__label'>
            Имя
          </label>
          <input
            className='register__input'
            name='register-name'
            id='register-name'
          />
          <label htmlFor='register-email' className='register__label'>
            E-mail
          </label>
          <input
            className='register__input'
            name='register-email'
            id='register-email'
          />
          <label htmlFor='register-pass' className='register__label'>
            Пароль
          </label>
          <input
            className='register__input'
            name='register-pass'
            type='password'
            id='register-pass'
          />
          <p className='register__error'>Что-то пошло не так...</p>
          <button className='register__submit' type='submit'>
            Зарегистрироваться
          </button>
          <p className='register__question'>
            Уже зарегистрированы?{' '}
            <a href='/signin' className='link register__link'>
              Войти
            </a>
          </p>
        </form>
      </main>
    </>
  );
}

export default Register;
