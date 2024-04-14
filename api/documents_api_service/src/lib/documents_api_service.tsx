import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import axios from 'axios';
import { Documents } from '@org.mwashi-mwale/documents';
import { UserCategory } from './user-category';
import { icon } from '@fortawesome/fontawesome-svg-core';

axios.defaults.baseURL = 'http://localhost:8080/auth';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

const ACTIONS = {
  EDIT_DOCUMENTS: 'edit_documents',
  ADD_DOCUMENTS: 'post_documents',

  ERROR: 'error',
};

const initialState = {
  loading: true,
  error: false,
  documents: {
    icon,
    category: UserCategory,
    description: '',
    date: '',
    format: '',
  },
};

const reducer = (state: any, action: { type: any; payload: any }) => {
  // return { documents : state.documents}
  switch (action.type) {
    case ACTIONS.ADD_DOCUMENTS:
      return {
        loading: false,
        error: false,
        documents: action.payload,
      };
    case ACTIONS.EDIT_DOCUMENTS:
      return {
        loading: false,
        error: false,
        documents: action.payload,
      };

    case ACTIONS.ERROR:
      return {
        loading: false,
        error: true,
        documents: [],
      };

    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

export const DocumentsApiService = createContext<Documents | undefined>(
  undefined
);

export const DocumentProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const editDocuments = () => {
      axios
        .put('/Documents')
        .then((response) => {
          dispatch({ type: ACTIONS.EDIT_DOCUMENTS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    const addDocuments = () => {
      axios
        .post('/Documents')
        .then((response) => {
          dispatch({ type: ACTIONS.ADD_DOCUMENTS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    editDocuments();
    addDocuments();
  }, []);
  return (
    <DocumentsApiService.Provider value={[state, dispatch]}>
      {children}
    </DocumentsApiService.Provider>
  );
};

export function useDocumentContext() {
  const documents = useContext(DocumentsApiService);

  if (documents == undefined) {
    throw new Error(
      'useDocumentsContext should be used with DocumentsApiservice'
    );
  }

  return documents;
}

export default useDocumentContext;
