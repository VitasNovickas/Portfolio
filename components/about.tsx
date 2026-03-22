import styles from './About.module.css';

const races = [
  { event: 'Vilnius Marathon', distance: '42.2 km', date: 'Sep 2024', result: '4:52:53' },
  { event: 'Vilnius Half Marathon', distance: '5 km', date: 'May 2024', result: '0:28:40' },
  { event: 'Vilnius Half Marathon', distance: '5 km', date: 'May 2026', result: 'Registered' },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.label}>About</p>
          <h2 className={styles.heading}>Background</h2>
        </div>
        <div className={styles.right}>
          <p className={styles.bio}>
            I am studying AI with a growing interest in quantitative finance —
            how mathematical models can be applied to understand and navigate
            financial markets. I am at an early stage, building knowledge and
            practical skills along the way.
          </p>
          <p className={styles.bio}>
            I play football regularly and took up running a few years ago.
            In 2024 I finished my first full marathon in Vilnius.
            I am currently preparing for a triathlon.
          </p>

          <div className={styles.racesBlock}>
            <p className={styles.racesLabel}>Race log</p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Distance</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {races.map((r) => (
                  <tr key={r.event + r.date}>
                    <td>{r.event}</td>
                    <td>{r.distance}</td>
                    <td>{r.date}</td>
                    <td className={r.result === 'Registered' ? styles.upcoming : ''}>
                      {r.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}