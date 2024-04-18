// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { UserApiService, useUserContext } from '@org.mwashi-mwale/api_service';
import Keycloak from 'keycloak-js';
import Landing_Page from './Landing_Page';
import { config } from './Constants';
import axios from 'axios';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { Dimmer, Header, Icon } from 'semantic-ui-react';
import { ReactNode, useEffect, useReducer } from 'react';
import { UserApiService } from '@org.mwashi-mwale/api_service';

axios.defaults.baseURL = 'http://localhost:8080/auth';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

const ACTIONS = {
  GET_DOCTORS: 'get_doctors',
  EDIT_DOCTORS: 'edit_doctors',
  ADD_DOCTORS: 'post_doctors',
  DELETE_DOCTORS: 'delete_doctors',

  GET_PATIENTS: 'get_patients',
  EDIT_PATIENTS: 'edit_patients',
  ADD_PATIENTS: 'post_patients',
  DELETE_PATIENTS: 'delete_patients',

  ERROR: 'error',
};

const initialState = {
  loading: true,
  error: false,
  users: {},
};

const reducer = (state: any, action: { type: any; payload: any }) => {
  // return { users : state.users}
  switch (action.type) {
    case ACTIONS.GET_DOCTORS:
      return {
        loading: false,
        error: false,
        users: action.payload,
      };
    case ACTIONS.ADD_DOCTORS:
      return {
        loading: false,
        error: false,
        users: action.payload,
      };
    case ACTIONS.EDIT_DOCTORS:
      return {
        loading: false,
        error: false,
        users: action.payload,
      };
    case ACTIONS.DELETE_DOCTORS:
      return {
        loading: false,
        error: false,
        users: action.payload,
      };

    case ACTIONS.GET_PATIENTS:
      return {
        loading: false,
        error: false,
        users: action.payload,
      };
    case ACTIONS.ADD_PATIENTS:
      return {
        loading: false,
        error: false,
        users: action.payload,
      };
    case ACTIONS.EDIT_PATIENTS:
      return {
        loading: false,
        error: false,
        users: action.payload,
      };
    case ACTIONS.DELETE_PATIENTS:
      return {
        loading: false,
        error: false,
        users: action.payload,
      };
    case ACTIONS.ERROR:
      return {
        loading: false,
        error: true,
        users: [],
      };

    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getDoctcors = () => {
      axios
        .get('/doctors')
        .then((response) => {
          dispatch({ type: ACTIONS.GET_DOCTORS, payload: response.data });
          console.log(response.data);
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    const editDoctors = () => {
      axios
        .put('/doctors')
        .then((response) => {
          dispatch({ type: ACTIONS.EDIT_DOCTORS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    const addDoctors = () => {
      axios
        .post('/doctors')
        .then((response) => {
          dispatch({ type: ACTIONS.ADD_DOCTORS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    const deleteDoctors = () => {
      axios
        .delete('/doctors')
        .then((response) => {
          dispatch({ type: ACTIONS.DELETE_DOCTORS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };

    const getPatients = () => {
      axios
        .get('/patients')
        .then((response) => {
          dispatch({ type: ACTIONS.GET_DOCTORS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    const editPatients = () => {
      axios
        .put('/patients')
        .then((response) => {
          dispatch({ type: ACTIONS.EDIT_PATIENTS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    const addPatients = () => {
      axios
        .post('/patients')
        .then((response) => {
          dispatch({ type: ACTIONS.ADD_PATIENTS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };
    const deletePatients = () => {
      axios
        .delete('/patients')
        .then((response) => {
          dispatch({ type: ACTIONS.DELETE_PATIENTS, payload: response.data });
        })
        .catch((e) => {
          return dispatch({
            type: ACTIONS.ERROR,
            payload: undefined,
          });
        });
    };

    getDoctcors();
    editDoctors();
    addDoctors();
    deleteDoctors();

    getPatients();
    editPatients();
    addPatients();
    deletePatients();
  }, []);
  return (
    <UserApiService.Provider value={[state, dispatch]}>
      {children}
    </UserApiService.Provider>
  );
};

// -- Axios

const instance = axios.create({
  baseURL: config.url.API_BASE_URL,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 404) {
      return { status: error.response.status };
    }
    return Promise.reject(error.response);
  }
);

// -- Helper functions

function bearerAuth(token: any) {
  return `Bearer ${token}`;
}

function getUserExtrasMe(token: any) {
  return instance.get(`/api/userextras/me`, {
    headers: { Authorization: bearerAuth(token) },
  });
}
function saveUserExtrasMe(
  token: string | undefined,
  userExtra: { avatar: any }
) {
  return instance.post(`/api/userextras/me`, userExtra, {
    headers: { Authorization: bearerAuth(token) },
  });
}

export function App() {
  const keycloak = new Keycloak({
    url: `${config.url.KEYCLOAK_BASE_URL}`,
    realm: 'hosdocs-microservices-realm',
    clientId: 'hosdocs-app',
  });
  const initOptions = { pkceMethod: 'S256' };

  const handleOnEvent = async (event: string, error: any) => {
    if (event === 'onAuthSuccess') {
      if (keycloak.authenticated) {
        let response = await getUserExtrasMe(keycloak.token);
        if (response.status === 404) {
          const username = keycloak.tokenParsed!.preferred_username;
          const userExtra = { avatar: username };
          response = await saveUserExtrasMe(keycloak.token, userExtra);
          console.log('UserExtra created for ' + username);
        }
        response.data.avatar;
      }
    }
  };

  const loadingComponent = (
    <Dimmer inverted active={true} page>
      <Header style={{ color: '#4d4d4d' }} as="h2" icon inverted>
        <Icon loading name="cog" />
        <Header.Content>
          Keycloak is loading
          <Header.Subheader style={{ color: '#4d4d4d' }}>
            or running authorization code flow with PKCE
          </Header.Subheader>
        </Header.Content>
      </Header>
    </Dimmer>
  );

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={initOptions}
      LoadingComponent={loadingComponent}
      onEvent={(event, error) => handleOnEvent(event, error)}
    >
      {/* <Suspense fallback={<LoadingPage />}>*/}

      <UserProvider>
        <Landing_Page />
      </UserProvider>

      {/*</Suspense> */}
    </ReactKeycloakProvider>
  );
}

export default App;
