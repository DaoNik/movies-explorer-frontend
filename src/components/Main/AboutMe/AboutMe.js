import React from 'react';
import './AboutMe.css';
import myPhoto from '../../../images/Nikita_T.jpeg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <section className='about-me__info'>
        <div className='about-me__info-container'>
          <h3 className='about-me__info-title'>Никита</h3>
          <p className='about-me__info-job'>Фронтенд-разработчик, 21 год</p>
          <p className='about-me__info-about'>
            Я родился в Воронеже, а сейчас живу в Москве, надеюсь однажды перебраться в Калининград. Учусь на факультете
            информационных технологий в университете Синергия. Я люблю слушать
            музыку и увлекаюсь путешествиями. Недавно начал кодить. С
            ноября 2019 года по ноябрь 2021 года работал в компании ВС РФ».
            После того, как прошёл курс по веб-разработке, начал
            работать в IT-компании.
          </p>
          <ul className='about-me__links'>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                className='about-me__link link'
                href='https://vk.com/daonik'
              >
                VK
              </a>
            </li>
            <li>
              <a
                className='about-me__link link'
                href='https://github.com/DaoNik'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img
          className='about-me__photo'
          src={myPhoto}
          alt='Фото Никита Таранин'
        ></img>
      </section>
    </section>
  );
}

export default AboutMe;
