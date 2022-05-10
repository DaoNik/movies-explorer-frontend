import React, {useEffect, useState} from 'react';
import logo from '../../images/logo.svg';
import '../Register/Register.css';
import { NavLink } from 'react-router-dom';

function Login({ onSubmit, errorLogin, setErrorLogin }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    const regexp = /[a-zA-Z0-9]+@[a-z]+\.[a-z]+/;
    regexp.test(e.target.value) ? setEmailError('') : setEmailError('Неверно введена почта');
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    e.target.value.length > 0 ? setPasswordError('') : setPasswordError('Не введен пароль')
  }

  useEffect(() => {
    if (email.length > 0 && password.length > 0 && emailError === '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setErrorLogin('');
  }, [email, password])

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(email, password);
  }

  return (
    <>
      <main className='register'>
        <h1 className='register__title'>Рады видеть!</h1>
        <NavLink to='/' className='link register__link-logo'>
          <img className='register__logo' src={logo} alt='Логотип' />
        </NavLink>
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
          <p className='register__error'>{emailError}</p>
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
          <p className='register__error'>{passwordError}</p>
          <p className='register__error'>{errorLogin}</p>
          <button
            className={`register__submit register__submit_login ${isValid ? '' : 'register__submit_invalid'}`}
            type='submit'
            disabled={!isValid}
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
