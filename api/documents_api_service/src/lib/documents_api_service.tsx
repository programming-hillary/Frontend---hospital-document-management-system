import {
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import axios from 'axios';
import { Documents } from '@org.mwashi-mwale/documents';
import React from 'react';

axios.defaults.baseURL = 'http://localhost:8080/auth';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

type IDocumentItem = [
  Documents[] | undefined,
  React.Dispatch<React.SetStateAction<Documents[] | undefined>>
];

export const IDocumentContext = React.createContext<IDocumentItem>([
  [],
  () => null,
]);

interface Props {
  children: ReactNode;
}


export const DocumentProvider = ({ children }: Props) => {
  const editDocuments = () => {
    useEffect(() => {
      axios.put('/Documents').catch((e) => {
        return '';
      });
    }),
      [];
  };

  const addDocuments = () => {
    useEffect(() => {
      axios.post('/Documents').catch((e) => {
        return '';
      }),
      [];
    });
  };

  const documentOps = () => {
    addDocuments()
    editDocuments()
  }

  function useQuery<T>(
    arg0: string,
    documentOps: any
  ): { data: any; error: any } {
    return documentOps
  }

  //Retrieve the data and status using UseQuery
  const { data, error } = useQuery<Documents[]>('document_ops', documentOps);

  // As explained in the commend at the top, the value are not initialised, therefore they can be undefined
  const [document, setDocument] = React.useState<Documents[] | undefined>();

  if (!error) {
    setDocument(data);
  }

  return (
    <IDocumentContext.Provider value={[document, setDocument]}>
      {children}
    </IDocumentContext.Provider>
  );
};

export function useDocumentContext() {
  const documents = useContext(IDocumentContext);

  if (documents == undefined) {
    throw new Error(
      'useDocumentsContext should be used with DocumentsApiservice'
    );
  }

  return documents;
}

export default useDocumentContext;
