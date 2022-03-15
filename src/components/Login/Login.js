import React from 'react';
import logo from '../../images/logo.svg';
import '../Register/Register.css';

function Login() {
  return (
    <>
      <main className='register'>
        <h1 className='register__title'>Рады видеть!</h1>
        <img className='register__logo' src={logo} alt='Логотип' />
        <form className='register__form'>
          <label for='register-email' className='register__label'>
            E-mail
          </label>
          <input
            className='register__input'
            name='register-email'
            id='register-email'
          />
          <label for='register-pass' className='register__label'>
            Пароль
          </label>
          <input
            className='register__input'
            name='register-pass'
            id='register-pass'
          />
          <button
            className='register__submit register__submit_login'
            type='submit'
          >
            Войти
          </button>
          <p className='register__question'>
            Ещё не зарегистрированы?{' '}
            <a href='/signup' className='link register__link'>
              Регистрация
            </a>
          </p>
        </form>
      </main>
    </>
  );
}

export default Login;
