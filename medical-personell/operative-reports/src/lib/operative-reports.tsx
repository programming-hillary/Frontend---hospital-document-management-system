import styles from './operative-reports.module.css';

/* eslint-disable-next-line */
export interface OperativeReportsProps {}

export function OperativeReports(props: OperativeReportsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OperativeReports!</h1>
    </div>
  );
}

export default OperativeReports;
