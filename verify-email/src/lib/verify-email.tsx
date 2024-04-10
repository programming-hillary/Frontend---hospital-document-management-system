import styles from './verify-email.module.css';

/* eslint-disable-next-line */
export interface VerifyEmailProps {}

export function VerifyEmail(props: VerifyEmailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to VerifyEmail!</h1>
    </div>
  );
}

export default VerifyEmail;
