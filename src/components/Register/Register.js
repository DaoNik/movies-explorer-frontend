import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register({ onSubmit, errorRegister, setErrorRegister }) {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (email.length > 0 &&
        password.length > 0 &&
        emailError === '' &&
        nameError === '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setErrorRegister('');
  }, [name, email, password])

  function handleChangeName(e) {
    setName(e.target.value);
    e.target.value.length >= 2 && e.target.value.length <= 30 ?
      setNameError('') :
      setNameError('Имя должно быть от 2 до 30 символов');
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    const regexp = /[a-zA-Z0-9]+@[a-z]+\.[a-z]+/;
    regexp.test(e.target.value) ? setEmailError('') : setEmailError('Неверно введена почта');
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    e.target.value.length > 0 ? setPasswordError('') : setPasswordError('Не введен пароль');
  }

  function handleRegister(e) {
    e.preventDefault();

    onSubmit(name, email, password);
  }

  return (
    <>
      <main className='register'>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <NavLink to='/' className='link register__link-logo'>
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
          <p className='register__error'>{nameError}</p>
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
          <p className='register__error'>{emailError}</p>
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
          <p className='register__error'>{passwordError}</p>
          <p className='register__error'>{errorRegister}</p>
          <button className={`register__submit ${isValid ? '' : 'register__submit_invalid'}`} type='submit' disabled={!isValid}>
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
