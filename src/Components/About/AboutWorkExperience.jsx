import React from 'react';
import styles from './AboutWorkExperience.module.css';
import CodeBlock from '../contact/CodeBlock';

const experience = [
  {
    company: 'Denakop',
    job: 'Web Analyst',
    period: 'Dezembro de 2022 - Janeiro de 2024',
    functions: [
      'Desenvolvimento web utilizando JavaScript, HTML, CSS, Bootstrap e jQuery.',
      'Suporte e gestão de sites WordPress, incluindo resolução de problemas e otimização de plugins.',
      'Criação e aprimoramento de layouts web usando Figma.',
      'Gerenciamento e implementação de ferramentas de publicidade para sites, garantindo maior engajamento e eficácia na colocação de anúncios. ',
      'Análise de métricas e desempenho de mídia paga.',
      'Identificação e acompanhamento de KPIs e tradução de dados complexos em insights relevantes.',
      'Colaboração com equipes multidisciplinares para alinhar os esforços de desenvolvimento web aos objetivos gerais da empresa.',
    ],
  },
  {
    company: 'Moovin Plataforma E-commerce',
    job: 'Product Owner',
    period: 'Janeiro de 2021 - Setembro de 2022',
    functions: [
      'Realização de estudos aprofundados sobre plataformas concorrentes para identificar oportunidades de melhorias.',
      'Desenvolvimento e manutenção do backlog do produto, garantindo alinhamento com os objetivos e metas do projeto.',
      'Reuniões com stakeholders para discutir progressos, coletar feedbacks e alinhar prioridades.',
      'Criação e gestão de Sprints, supervisionando o ciclo de vida do desenvolvimento do produto e garantindo a entrega pontual de recursos.',
      'Colaboração com equipes multidisciplinares para traduzir necessidades de negócios em requisitos técnicos.',
      'Acompanhamento de avanços da indústria e tecnologias emergentes para impulsionar a inovação dentro do produto.',
      'Colaboração com equipes multidisciplinares para alinhar os esforços de desenvolvimento web aos objetivos gerais',
    ],
  },
  {
    company: 'Denakop',
    job: 'Web Analyst',
    period: 'Dezembro de 2022 - Janeiro de 2024',
    functions: [
      'Desenvolvimento web utilizando JavaScript, HTML, CSS, Bootstrap e jQuery.',
      'Suporte e gestão de sites WordPress, incluindo resolução de problemas e otimização de plugins.',
      'Criação e aprimoramento de layouts web usando Figma.',
      'Gerenciamento e implementação de ferramentas de publicidade para sites, garantindo maior engajamento e eficácia na colocação de anúncios. ',
      'Análise de métricas e desempenho de mídia paga.',
      'Identificação e acompanhamento de KPIs e tradução de dados complexos em insights relevantes.',
      'Colaboração com equipes multidisciplinares para alinhar os esforços de desenvolvimento web aos objetivos gerais da empresa.',
    ],
  },
];

const AboutWorkExperience = () => {
  return (
    <CodeBlock color={'white'} className={styles.container}>
      <span data-line> // Experiências</span>
      <span data-line>
        <span>const</span> <span>suco</span> <span>= [</span>
      </span>
      {experience.map((exp, index) => (
        <>
          <span data-line> &#123;</span>
          <span data-line>
            <span>empresa:</span>
            <span> '{exp.company}',</span>
          </span>
          <span data-line>
            <span>cargo:</span>
            <span> '{exp.job}',</span>
          </span>
          <span data-line>
            <span>periodo:</span>
            <span> '{exp.period}',</span>
          </span>
          <span data-line>
            <span>
              funcoes: <span>[</span>
            </span>
          </span>
          {exp.functions.map((f, index) => (
            <span className={styles.functions} key={index} data-line>
              '{f}' <span>,</span>
            </span>
          ))}
        </>
      ))}
      <span data-line>]</span>
      <span data-line>&#125;</span>
      <span data-line>&#125;</span>
    </CodeBlock>
  );
};

export default AboutWorkExperience;
