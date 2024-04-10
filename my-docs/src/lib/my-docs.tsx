import styles from './my-docs.module.css';

/* eslint-disable-next-line */
export interface MyDocsProps {}

export function MyDocs(props: MyDocsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyDocs!</h1>
    </div>
  );
}

export default MyDocs;
