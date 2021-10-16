// @ts-nocheck
import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import SignIn from "../src/Pages/SignIn";
import { theme } from "./theme";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SignIn />
      </div>
    </ThemeProvider>
  );
}

export default App;
