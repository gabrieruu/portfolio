import React from 'react';
import Aside from '../helper/Aside';
import Dropdown from '../dropdown/Dropdown';
import styles from './Projects.module.css';
import ReactJS from '../../assets/ReactJS';
import Html5 from '../../assets/Html5';
import TerminalIcon from '../../assets/TerminalIcon';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import zozo from '../../assets/cover1.jpg';

const projectsData = [
  {
    id: 1,
    type: 'html',
    name: 'Pokedex',
    tags: ['HTML', 'CSS Modules', 'REACT', 'JS'],
    img: {
      src: zozo,
      alt: 'Imagem padrão',
    },
    description:
      'Loremasdasasdasdasdasdasdasd ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum ex arcu, sit amet condimentum risus condimentum a. Vestibulum hendrerit ex nibh.',
    gitHubLink: '',
    link: '/projects/pokedex',
  },
  {
    id: 2,
    type: 'react',
    name: 'suco2',
    tags: ['HTML', 'CSS Modules', 'REACT', 'JS'],
    img: {
      src: zozo,
      alt: 'Imagem padrão',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum ex arcu, sit amet condimentum risus condimentum a. Vestibulum hendrerit ex nibh.',
    gitHubLink: '',
    link: '',
  },
  {
    id: 3,
    type: 'react',
    name: 'suco3',
    tags: ['HTML', 'CSS Modules', 'REACT', 'JS'],
    img: {
      src: zozo,
      alt: 'Imagem padrão',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum ex arcu, sit amet condimentum risus condimentum a. Vestibulum hendrerit ex nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum ex arcu, sit amet condimentum risus condimentum a. Vestibulum hendrerit ex nibh.',
    gitHubLink: '',
    link: '',
  },
  {
    id: 4,
    type: 'html',
    name: 'suco4',
    tags: ['HTML', 'CSS Modules', 'REACT', 'JS'],
    img: {
      src: zozo,
      alt: 'Imagem padrão',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum ex arcu, sit amet condimentum risus condimentum a. Vestibulum hendrerit ex nibh.',
    gitHubLink: '',
    link: '',
  },
];

const Projects = () => {
  const [projectFilter, setProjectFilter] = React.useState('all');
  const [projects, setProjects] = React.useState('');
  const [modalProject, setModalProject] = React.useState(null);

  const filtersValue = [
    { filter: 'all', name: 'Todos', icon: <TerminalIcon /> },
    { filter: 'html', name: 'HTML', icon: <Html5 /> },
    { filter: 'react', name: 'React', icon: <ReactJS /> },
  ];

  React.useEffect(() => {
    if (projectFilter === 'all') {
      setProjects(projectsData);
    } else {
      const filteredProject = projectsData.filter(
        (project) => project.type === projectFilter,
      );
      setProjects(filteredProject);
    }
  }, [projectFilter]);

  return (
    <>
      <Aside>
        <Dropdown text={'Projetos'}>
          {filtersValue.map((filters) => (
            <label className={styles.projectLabels} key={filters.filter}>
              <input
                type="checkbox"
                value={filters.filter}
                checked={projectFilter === filters.filter}
                onClick={({ target }) => setProjectFilter(target.value)}
              />
              {filters.icon}
              <p>{filters.name}</p>
            </label>
          ))}
        </Dropdown>
      </Aside>
      {modalProject && (
        <ProjectModal
          modalProject={modalProject}
          setModalProject={setModalProject}
        />
      )}
      <div className={`${styles.container} animeRight`}>
        {projects &&
          projects.map((p, index) => (
            <ProjectCard
              key={index}
              data={p}
              setModalProject={setModalProject}
            />
          ))}
      </div>
    </>
  );
};

export default Projects;
