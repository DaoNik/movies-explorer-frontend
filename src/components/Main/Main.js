import React from 'react';
import NavTab from './NavTab/NavTab';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

function Main() {
  return (
    <>
      <NavTab />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
    </>
  );
}

export default Main;