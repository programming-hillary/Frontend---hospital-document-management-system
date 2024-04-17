import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { BuilderCategory } from './builder-category';
import { DocumentCategory } from './document-category';

/* eslint-disable-next-line */
export interface DocumentsProps {}

export interface Documents {
  icon: IconProp;
  category: DocumentCategory;
  description: string;
  date: string;
  format: string;
  name: string;
  builder_category: BuilderCategory;
    
}

export default Documents;
