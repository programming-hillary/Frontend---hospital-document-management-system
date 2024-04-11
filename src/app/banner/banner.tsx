import styles from './banner.module.css';

/* eslint-disable-next-line */
export interface BannerProps {}

export function Banner(props: BannerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={styles.welcome_note}>
          Welcome to the most efficient Document Management system
        </p>
        <p className={styles.banner}>
          Hosdocs
        </p>
        <p className={styles.tagline}>
          For the practioner who wants to focus on what matters
        </p>
      </div>
    </div>
  );
}

export default Banner;
