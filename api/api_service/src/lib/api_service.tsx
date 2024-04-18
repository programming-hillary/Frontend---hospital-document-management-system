import { ReactNode, createContext, useContext, useEffect, useReducer } from 'react';
import { Users } from '@org.mwashi-mwale/users';
import axios from 'axios';

export const UserApiService = createContext<Users | undefined>(undefined);

export function useUserContext() {
  const user = useContext(UserApiService);

  if (user == undefined) {
    throw new Error('useUserContext must be used with a UserApiService');
  }

  return user;
}

export default useUserContext;
