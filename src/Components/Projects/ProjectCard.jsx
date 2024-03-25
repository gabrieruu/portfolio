import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ data, setModalProject }) => {
  function handleClick() {
    setModalProject(data);
  }
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.img}>
        <h2>{data.name}</h2>
        <img src={data.img.src} alt={data.img.alt} />
      </div>
      <div className={styles.description}>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
