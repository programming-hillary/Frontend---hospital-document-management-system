import styles from './my_history.module.css';

/* eslint-disable-next-line */
export interface MyHistoryProps {}

export function MyHistory(props: MyHistoryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyHistory!</h1>
    </div>
  );
}

export default MyHistory;
