import styles from './insurance-forms.module.css';

/* eslint-disable-next-line */
export interface InsuranceFormsProps {}

export function InsuranceForms(props: InsuranceFormsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InsuranceForms!</h1>
    </div>
  );
}

export default InsuranceForms;
