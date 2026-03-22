import styles from './Projects.module.css';

const projects = [
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
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.description}>{p.description}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub →
                </a>
                {p.linkedinPost && (
                  <a
                    href={p.linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    LinkedIn post →
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