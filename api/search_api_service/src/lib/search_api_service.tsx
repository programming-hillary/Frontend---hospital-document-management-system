import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Searches } from '@org.mwashi-mwale/searches';

axios.defaults.baseURL = 'http://localhost:8080/auth';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

const ACTIONS = {
  EDIT_SEARCH: 'edit_search',
  ADD_SEARCH: 'post_search',

  ERROR: 'error',
};

const initialState = {
  loading: true,
  error: false,
  search: {},
};

const reducer = (state: any, action: { type: any; payload: any }) => {
  // return { searches : state.searches}
  switch (action.type) {
    case ACTIONS.ADD_SEARCH:
      return {
        loading: false,
        error: false,
        searches: action.payload,
      };
    case ACTIONS.EDIT_SEARCH:
      return {
        loading: false,
        error: false,
        searches: action.payload,
      };

    case ACTIONS.ERROR:
      return {
        loading: false,
        error: true,
        searches: [],
      };

    default:
      return state;
  }
};

const searchApiCall = () => {
  const [hosDocSearch, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const editSearch = () => {
      axios
        .put('/search')
        .then((response) => {
          dispatch({ type: ACTIONS.EDIT_SEARCH, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    const addSearch = () => {
      axios
        .post('/search')
        .then((response) => {
          dispatch({ type: ACTIONS.ADD_SEARCH, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    editSearch()
    addSearch()
  }, []);
  return hosDocSearch
};
export const SearchApiService = createContext<Searches | undefined>(
  searchApiCall
);

export function useSearchContext() {
  const Search = useContext(SearchApiService);

  if (Search == undefined) {
    throw new Error(
      'useSearchContext should be used with SearchApiservice'
    );
  }

  return Search;
}

export default useSearchContext;
