import styles from './mental-status-exams.module.css';

/* eslint-disable-next-line */
export interface MentalStatusExamsProps {}

export function MentalStatusExams(props: MentalStatusExamsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MentalStatusExams!</h1>
    </div>
  );
}

export default MentalStatusExams;
