import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import mainApi from '../../utils/MainApi';
import RequireAuth from '../RequireAuth/RequireAuth';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, []);

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
        setIsLoggedIn(true);
        navigate('/');
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  }

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path='/signin' element={<Login onSubmit={handleLogin} />} />
        <Route
          path='/signup'
          element={<Register onSubmit={handleRegister} />}
        />
        <Route
          path='*'
          element={
            <RequireAuth
              component={() => {
                if (location.pathname === '/movies') {
                  return <Movies saved={false} />;
                } else if (location.pathname === '/saved-movies') {
                  return <Movies saved={true} />;
                } else if (location.pathname === '/profile') {
                  return <Profile onLogout={handleLogout} />;
                } else {
                  return <Page404 />;
                }
              }}
              isLoggedIn={isLoggedIn}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
