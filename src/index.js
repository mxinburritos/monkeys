import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { MuiThemeProvider, ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple'

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#000'
    },
    secondary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#000',
    },
    error: {
      main: '#ff6666',
      light: '#000',
      dark: '#000',
      contrastText: '#000',
    },
    divider: '#000',
    action: {
      active: '#444',
      hover: '#444444',
      selected: '#555',
      disabled: '#000',
      disabledBackground: '#000',
    },
    text: {
      primary: '#fff',
      secondary: '#ccc',
      disabled: '#000',
      hint: '#000',
      icon: '#000',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      default: '#121212',
      paper: '#303030',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={colorTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>, document.getElementById('root')
);