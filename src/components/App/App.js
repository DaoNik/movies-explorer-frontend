import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import mainApi from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();

  function handleRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        navigate('/signin');
      })
      .catch((err) => {
        if (err.statusCode === '400') {
          console.log('некорректно заполнено одно из полей');
        } else {
          console.log(`Ошибка: ${err}`);
        }
      });
  }

  function handleLogin(email, password) {
    mainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.token));
        navigate('/');
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/movies' element={<Movies saved={false} />} />
        <Route path='/saved-movies' element={<Movies saved={true} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login onSubmit={handleLogin} />} />
        <Route
          path='/signup'
          element={<Register onSubmit={handleRegister} />}
        />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
