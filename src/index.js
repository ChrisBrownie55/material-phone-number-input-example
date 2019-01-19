
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({ typography: { useNextVariants: true } });

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Demo />
  </ThemeProvider>,
  document.querySelector("#root")
);
    