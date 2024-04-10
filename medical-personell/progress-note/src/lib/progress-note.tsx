import styles from './progress-note.module.css';

/* eslint-disable-next-line */
export interface ProgressNoteProps {}

export function ProgressNote(props: ProgressNoteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProgressNote!</h1>
    </div>
  );
}

export default ProgressNote;
