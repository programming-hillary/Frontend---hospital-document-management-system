import {
  createContext,
  useContext,
} from 'react';
import { Documents } from '@org.mwashi-mwale/documents';

export const DocumentContext = createContext<Documents|undefined>(undefined)

export function useDocumentContext(): Documents {
  const documents = useContext(DocumentContext);

  if (documents == undefined) {
    throw new Error(
      'Application returns undefined'
    );
  }

  return documents;
}

export default useDocumentContext;
