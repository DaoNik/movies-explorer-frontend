import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__info-container'>
        <section className='about-project__info'>
          <h3 className='about-project__info-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__info-content'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </section>
        <section className='about-project__info about-project__info_margin'>
          <h3 className='about-project__info-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__info-content'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </section>
      </div>
      <section className='about-project__stages'>
        <div className='about-project__back'>
          <p className='about-project__time about-project__time_front'>
            1 неделя
          </p>
          <p className='about-project__profession'>Back-end</p>
        </div>
        <div className='about-project__front'>
          <p className='about-project__time about-project__time_back'>
            4 недели
          </p>
          <p className='about-project__profession'>Front-end</p>
        </div>
      </section>
    </section>
  );
}

export default AboutProject;
