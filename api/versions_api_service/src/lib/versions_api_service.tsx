import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import axios from 'axios';
import { Versions } from '@org.mwashi-mwale/versions';

axios.defaults.baseURL = 'http://localhost:8080/auth';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

const ACTIONS = {
  GET_VERSIONS: 'get_versions',

  ERROR: 'error',
};

const initialState = {
  loading: true,
  error: false,
  Versions: {},
};

const reducer = (state: any, action: { type: any; payload: any }) => {
  // return { versions : state.versions}
  switch (action.type) {
    case ACTIONS.GET_VERSIONS:
      return {
        loading: false,
        error: false,
        versions: action.payload,
      };

    case ACTIONS.ERROR:
      return {
        loading: false,
        error: true,
        versions: [],
      };

    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

export const VersionsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getVersions = () => {
      axios
        .put('/versions')
        .then((response) => {
          dispatch({ type: ACTIONS.GET_VERSIONS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    getVersions();
  }, []);
  return (
    <VersionsApiService.Provider value={[state, dispatch]}>
      {children}
    </VersionsApiService.Provider>
  );
};
export const VersionsApiService = createContext<Versions | undefined>(
  undefined
);

export function useVersionsContext() {
  const versions = useContext(VersionsApiService);

  if (versions == undefined) {
    throw new Error(
      'useVersionsContext should be used with VersionsApiservice'
    );
  }

  return versions;
}

export default useVersionsContext;
