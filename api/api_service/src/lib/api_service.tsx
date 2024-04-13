import { createContext, useContext, useEffect, useReducer } from 'react';
import { Users } from '@org.mwashi-mwale/users';
import axios from 'axios';

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

const userApiCall = (): Users => {
  const [hosDocUsers, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getDoctcors = () => {
      axios
        .get('/doctors')
        .then((response) => {
          dispatch({ type: ACTIONS.GET_DOCTORS, payload: response.data })
          console.log(response.data)
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

    getDoctcors()
    editDoctors()
    addDoctors()
    deleteDoctors()

    getPatients()
    editPatients()
    addPatients()
    deletePatients()
  }, []);
  return hosDocUsers
};

export const UserApiService = createContext<Users | undefined>(userApiCall);

export function useUserContext() {
  const user = useContext(UserApiService);

  if (user == undefined) {
    throw new Error('useUserContext must be used with a UserApiService');
  }

  return user;
}

export default useUserContext;
