import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Vitas Novickas</h1>
      <p>Breaking into ML & Finance</p>
      <a
        href="https://www.linkedin.com/in/vitas-novickas-96534627a/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkedinLink}
      >
        <Image
          src="/linkedin.png"
          alt="LinkedIn"
          width={32}
          height={32}
          className={styles.linkedinIcon}
        />
      </a>
    </section>
  );
}