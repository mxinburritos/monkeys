import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { MuiThemeProvider, ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple'
import { deepPurple, lightBlue, indigo } from '@material-ui/core/colors';

const colorTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: lightBlue,
    secondary: indigo,
  },
});

ReactDOM.render(
  <ThemeProvider theme={colorTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>, document.getElementById('root')
);