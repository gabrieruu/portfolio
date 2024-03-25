import React from 'react';
import styles from './ProjectModal.module.css';
import ProjectDetail from './ProjectDetail';

const ProjectModal = ({ projects, modalProject, setModalProject }) => {
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalProject(null);
  }

  React.useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setModalProject(null);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <ProjectDetail data={modalProject} />
    </div>
  );
};

export default ProjectModal;
