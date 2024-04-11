import styles from './consent-forms.module.css';

/* eslint-disable-next-line */
export interface ConsentFormsProps {}

export function ConsentForms(props: ConsentFormsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ConsentForms!</h1>
    </div>
  );
}

export default ConsentForms;
