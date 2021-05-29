import React, { createContext, useReducer } from "react";
import { initialState } from "./../../data";
import { reducer } from "./../reducer/reducer";

export const CoronaContext = createContext({});

export const CoronaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CoronaContext.Provider value={{ state, dispatch }}>
      {children}
    </CoronaContext.Provider>
  );
};

export default CoronaProvider;
