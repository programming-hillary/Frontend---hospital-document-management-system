import styles from './medical-report.module.css';

/* eslint-disable-next-line */
export interface MedicalReportProps {}

export function MedicalReport(props: MedicalReportProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MedicalReport!</h1>
    </div>
  );
}

export default MedicalReport;
