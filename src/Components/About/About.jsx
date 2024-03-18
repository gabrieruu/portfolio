import React from 'react';
import styles from './About.module.css';
import Dropdown from '../dropdown/Dropdown';
import { NavLink, Route, Routes } from 'react-router-dom';
import AboutResume from './AboutResume';
import AboutCertification from './AboutCertification';
import AboutEducation from './AboutEducation';
import AboutWorkExperience from './AboutWorkExperience';
import JavaScript from '../../assets/JavaScriptIcon';

const About = () => {
  return (
    <>
      <aside className={styles.aside}>
        <Dropdown custom={true} text={'Informações'}>
          <li>
            <JavaScript />
            <NavLink to="" end>
              sobre.js
            </NavLink>
          </li>
          <li>
            <JavaScript />
            <NavLink to="workexperience">experiencia.js</NavLink>
          </li>
          <li>
            <JavaScript />
            <NavLink to="education">educacao.js</NavLink>
          </li>
          <li>
            <JavaScript />
            <NavLink to="certifications">certificados.js</NavLink>
          </li>
        </Dropdown>
      </aside>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<AboutResume />} />
          <Route path="/workexperience" element={<AboutWorkExperience />} />
          <Route path="/education" element={<AboutEducation />} />
          <Route path="/certifications" element={<AboutCertification />} />
        </Routes>
      </div>
    </>
  );
};

export default About;
