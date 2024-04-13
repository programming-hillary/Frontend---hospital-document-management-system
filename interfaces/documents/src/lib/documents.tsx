import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './documents.module.css';
import { UserCategory } from './user-category';

/* eslint-disable-next-line */
export interface DocumentsProps {}

export interface Documents {
  icon: IconProp
  category: UserCategory
  description: string
  date: string
  format: string
}

export default Documents;
