import styles from './medical-tests.module.css';

/* eslint-disable-next-line */
export interface MedicalTestsProps {}

export function MedicalTests(props: MedicalTestsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MedicalTests!</h1>
    </div>
  );
}

export default MedicalTests;
