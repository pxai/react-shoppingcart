import { createContext, useReducer, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

const ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      throw new Error('ACTIOM_TYPE_NOT_FOUND');
  }
}

export const INITIAL_STATE = {
  currentUser: null
};

export const UserProvider = ({ children }) => {
  const [ {currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE)
  const setCurrentUser = (user) => {
    dispatch({type: ACTION_TYPES.SET_CURRENT_USER, payload: user })
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
