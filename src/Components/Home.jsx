import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.container}>
      <div>
        <p>Suco de caju gelado</p> <h1>Gabriel Majeski</h1>
        <p> {'>'} Frontend Developer</p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          imperdiet lobortis nisl, nec ullamcorper diam. Nam quam leo, rutrum et
          accumsan ut, imperdiet in ipsum. Nulla semper mauris mattis, aliquet
          velit a, fermentum est. Donec nec posuere enim. Donec sed lobortis
          dui.
        </p>
      </div>
    </section>
  );
};

export default Home;
