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
import RequireLogout from "../RequireLogout/RequireLogout";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import PopupUpdateUser from '../PopupUpdateUser/PopupUpdateUser';
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: 'Аноним',
    email: '',
  });
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [errorPopup, setErrorPopup] = useState('');
  const [errorLogin, setErrorLogin] = useState('');
  const [errorRegister, setErrorRegister] = useState('');

  function handleClosePopup() {
    setIsOpenPopup(false);
  }

  function handleCloseInfoPopup() {
    setIsOpenInfo(false);
  }

  function handleUpdateUser(name, email) {
    mainApi
      .updateUser(name, email)
      .then((res) => {
        const {name, email} = res;
        setErrorPopup('');
        setCurrentUser(res);
        setIsOpenPopup(false);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        setIsOpenInfo(true);
      })
      .catch((err) => {
        setErrorPopup(err);
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
      })
      .then(() => {
        mainApi.login(email, password).then((res) => {
          const { token, name } = res;
          localStorage.setItem('email', email);
          localStorage.setItem('name', name);
          localStorage.setItem('token', token);

          setIsLoggedIn(true);
          navigate('/movies');
        }).catch((err) => {
          setErrorLogin(err);
          navigate('/signin');
        })
      })
      .catch((err) => {
        setErrorRegister(err);
      });
  }

  function handleLogin(email, password) {
    mainApi
      .login(email, password)
      .then((res) => {
        const { token, name } = res;
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
        setCurrentUser({ name, email });
        localStorage.setItem('token', token);

        setIsLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        setErrorLogin(err);
      });
  }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('movies');
    setIsLoggedIn(false);
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route exact path='/' element={<Main isLoggedIn={isLoggedIn} />} />
        <Route
          path='/signin'
          element={
            <RequireLogout
              component={Login}
              onSubmit={handleLogin}
              errorLogin={errorLogin}
              setErrorLogin={setErrorLogin}
            />
          }
        />
        <Route
          path='/signup'
          element={
            <RequireLogout
                component={Register}
                onSubmit={handleRegister}
                errorRegister={errorRegister}
                setErrorRegister={setErrorRegister}
            />
          }
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

      <InfoTooltip isOpen={isOpenInfo} onClose={handleCloseInfoPopup} />

      <PopupUpdateUser
        isOpen={isOpenPopup}
        onClose={handleClosePopup}
        onSubmit={handleUpdateUser}
        errorPopup={errorPopup}
        setErrorPopup={setErrorPopup}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
