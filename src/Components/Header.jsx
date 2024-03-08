import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <p> Bem vindo!</p>
        <NavLink to="/">_home</NavLink>
        <NavLink to="/about">_sobre</NavLink>
        <NavLink to="/projects">_projetos</NavLink>
        <NavLink to="/contact">_contato</NavLink>
      </nav>
    </>
  );
};

export default Header;
