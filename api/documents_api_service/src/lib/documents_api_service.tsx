import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Documents } from '@org.mwashi-mwale/documents';

axios.defaults.baseURL = 'http://localhost:8080/auth';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

const ACTIONS = {
  GET_DOCUMENTS: 'get_documents',
  EDIT_DOCUMENTS: 'edit_documents',
  ADD_DOCUMENTS: 'post_documents',
  DELETE_DOCUMENTS: 'delete_documents',

  ERROR: 'error',
};

const initialState = {
  loading: true,
  error: false,
  documents: {},
};

const reducer = (state: any, action: { type: any; payload: any }) => {
  // return { documents : state.documents}
  switch (action.type) {
    case ACTIONS.GET_DOCUMENTS:
      return {
        loading: false,
        error: false,
        documents: action.payload,
      };
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
    case ACTIONS.DELETE_DOCUMENTS:
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

const documentsApiCall = (): Documents => {
  const [hosDocDocuments, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getDocuments = () => {
      axios
        .get('/documents')
        .then((response) => {
          dispatch({ type: ACTIONS.GET_DOCUMENTS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    const editDocuments = () => {
      axios
        .put('/documents')
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
        .post('/documents')
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
    const deleteDocuments = () => {
      axios
        .delete('/documents')
        .then((response) => {
          dispatch({ type: ACTIONS.DELETE_DOCUMENTS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    getDocuments();
    editDocuments();
    addDocuments();
    deleteDocuments();
  }, []);
  return hosDocDocuments;
};
export const DocumentsApiService = createContext<Documents | undefined>(
  documentsApiCall()
);

export function useDocumentContext() {
  const document = useContext(DocumentsApiService);

  if (document == undefined) {
    throw new Error(
      'useDocumentContext should be used with DocumentApiservice'
    );
  }

  return document;
}

export default useDocumentContext;
