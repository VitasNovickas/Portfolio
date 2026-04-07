import styles from './Projects.module.css';
import NextImage from 'next/image';

type Project = {
  number: string;
  title: string;
  tags: string[];
  description: string;
  github?: string;
  linkedinPost?: string;
  logo?: string;
  websiteLink?: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Project_Quant-model_1 ',
    tags: ['Python', 'ML', 'Finance'],
    description:
      'Short description of what this does, the problem it solves, and what you learned building it.',
    github: 'https://github.com/VitasNovickas/Project_Quant-model_1',
    linkedinPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7408974617240842240/?originTrackingId=Sl%2FDrxBK8fr6yiBHrNAlkQ%3D%3D'
  },
  {
    number: '02',
    title: 'Laliga-prediction-model',
    tags: ['Python', 'ML','football-data.co.uk', 'Football'],
    description:
      'An XGBoost-based machine learning model that predicts the probability of a LaLiga team finishing in the top 4 or winning the title (top 1) based on in-season performance statistics.',
    github: 'https://github.com/VitasNovickas/Laliga-prediction-model',
    linkedinPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7438660080285278208/?originTrackingId=nj2rgrEtj0CGxRwUf3Ku9A%3D%3D'
  },
  {
    number: '03',
    title: 'Quizza.online',
    tags: ['AI', 'Startup','Educational technology', 'JavaScript', 'HTML', 'Supabase'],
    description:
      'Real-time multiplayer quiz game developed closesly togehter with Vakris Perliba',
    websiteLink: 'https://quizza.online/',
    logo: '/image/fCWmk9zw.jpg',
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <p className={styles.label}>Projects</p>
        <h2 className={styles.heading}>Selected work</h2>
      </div>
      <div className={styles.list}>
        {projects.map((p) => (
          <div key={p.number} className={styles.card}>
            <span className={styles.number}>{p.number}</span>
            <div className={styles.cardBody}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{p.title}</h3>
                {p.logo && (
                  <NextImage
                    src={p.logo}
                    alt={`${p.title} logo`}
                    width={28}
                    height={28}
                    className={styles.logo}
                  />
                )}
              </div>
              <p className={styles.description}>{p.description}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <div className={styles.links}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    GitHub →
                  </a>
                )}
                {p.linkedinPost && (
                  <a href={p.linkedinPost} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    LinkedIn post →
                  </a>
                )}
                {p.websiteLink && (
                  <a href={p.websiteLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Visit site →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}