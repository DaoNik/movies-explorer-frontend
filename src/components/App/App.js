import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/movies' element={<Movies saved={false} />} />
        <Route path='/saved-movies' element={<Movies saved={true} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
