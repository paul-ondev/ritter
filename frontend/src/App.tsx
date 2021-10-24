// @ts-nocheck
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import SignIn from "../src/Pages/SignIn";
import { Home } from "./Pages/Home";
import { theme } from "./theme";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
