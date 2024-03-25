import React from 'react';
import styles from './ProjectDetail.module.css';
import { useNavigate } from 'react-router-dom';

const ProjectDetail = ({ data }) => {
  const navigate = useNavigate();

  function handlerOnClick() {
    navigate(data.link);
  }
  return (
    <div className={`${styles.container} animeDown`}>
      <div className={styles.img}>
        <img src={data.img.src} alt={data.img.alt} />
      </div>
      <div className={styles.tittle}>
        <h2>{data.name}</h2>
      </div>
      <div className={styles.tags}>
        <p>Tecnologias : </p>
        <ul>
          {data.tags.map((tag, index) => (
            <li key={index}>
              <p>{tag}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.description}>
        <p>{data.description}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handlerOnClick} className={styles.button}>
          Detalhes
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
