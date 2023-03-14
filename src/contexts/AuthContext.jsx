import { async } from "@firebase/util";
import { red } from "@mui/material/colors";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";
import { ACTIONS } from "../helpers/consts";

export const authContext = createContext();

const init = {
  user: null,
};

function reducer(state, action) {
  switch (action.tyoe) {
    case ACTIONS.GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, init);

  async function register({ email, password }) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function login({ email, password }) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS.GET_USER,
        payload: user,
      });
    });
  }, []);

  const value = {
    user: state.user,
    register: register,
    login: login,
    logout: logout,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
