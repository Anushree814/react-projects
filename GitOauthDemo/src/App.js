import React, { createContext, useReducer } from "react";
import classes from "./App.module.css";
import { Route, Switch } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import { initialState, reducer } from "./store/index";

export const AuthContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Switch classname={classes.App}>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
