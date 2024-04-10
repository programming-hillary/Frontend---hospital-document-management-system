import styles from './health-surveys.module.css';

/* eslint-disable-next-line */
export interface HealthSurveysProps {}

export function HealthSurveys(props: HealthSurveysProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HealthSurveys!</h1>
    </div>
  );
}

export default HealthSurveys;
