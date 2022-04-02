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
import CurrentUserContext from '../../contexts/CurrentUserContext';
import PopupUpdateUser from '../PopupUpdateUser/PopupUpdateUser';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: 'Аноним',
  });
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  function handleClosePopup() {
    setIsOpenPopup(false);
  }

  function handleUpdateUser(name) {
    mainApi
      .updateUser(name)
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, []);

  function handleRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then((res) => {
        setCurrentUser(res);
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
    <CurrentUserContext.Provider value={currentUser}>
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
                  return (
                    <Profile
                      onLogout={handleLogout}
                      setIsOpenPopup={setIsOpenPopup}
                    />
                  );
                } else {
                  return <Page404 />;
                }
              }}
              isLoggedIn={isLoggedIn}
            />
          }
        />
      </Routes>

      <PopupUpdateUser
        isOpen={isOpenPopup}
        onClose={handleClosePopup}
        onSubmit={handleUpdateUser}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
