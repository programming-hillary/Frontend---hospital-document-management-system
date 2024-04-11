import styles from './discharge-summary.module.css';

/* eslint-disable-next-line */
export interface DischargeSummaryProps {}

export function DischargeSummary(props: DischargeSummaryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DischargeSummary!</h1>
    </div>
  );
}

export default DischargeSummary;
