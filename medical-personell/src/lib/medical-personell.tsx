import styles from './medical-personell.module.css';

/* eslint-disable-next-line */
export interface MedicalPersonellProps {}

export function MedicalPersonell(props: MedicalPersonellProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MedicalPersonell!</h1>
    </div>
  );
}

export default MedicalPersonell;
