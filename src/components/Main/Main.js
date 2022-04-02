import React from 'react';
import NavTab from './NavTab/NavTab';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Main({ isLoggedIn }) {
  const currentUser = React.useContext(CurrentUserContext);
  console.log(currentUser);
  return (
    <>
      {isLoggedIn ? <Header isMain={true} /> : <NavTab />}
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
