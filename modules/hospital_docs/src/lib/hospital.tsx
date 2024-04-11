import styles from './hospital.module.css';

/* eslint-disable-next-line */
export interface HospitalProps {}

export function Hospital(props: HospitalProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Hospital!</h1>
    </div>
  );
}

export default Hospital;
