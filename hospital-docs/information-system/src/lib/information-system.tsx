import styles from './information-system.module.css';

/* eslint-disable-next-line */
export interface InformationSystemProps {}

export function InformationSystem(props: InformationSystemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InformationSystem!</h1>
    </div>
  );
}

export default InformationSystem;
