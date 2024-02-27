import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navLink}>
          <p>Gabriel Majeski</p>
          <Link to="/">_home</Link>
          <Link to="/about">_sobre</Link>
          <Link to="/projects">_projetos</Link>
        </div>
        <Link to="/">_contatos</Link>
      </nav>
    </>
  );
};

export default Header;
