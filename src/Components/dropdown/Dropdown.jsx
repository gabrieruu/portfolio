import React from 'react';
import styles from './Dropdown.module.css';

const Dropdown = () => {
  const [active, setActive] = React.useState(true);
  return (
    <aside className={`${styles.container}`}>
      <h3 onClick={() => setActive(!active)}>Suco</h3>
      <ul className={`${active ? styles.showMenu : styles.hideMenu}`}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </aside>
  );
};

export default Dropdown;
