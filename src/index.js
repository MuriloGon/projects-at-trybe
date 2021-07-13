import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import theme from './styles/theme';

ReactDOM.render(
  <BrowserRouter>
    <ReduxProvider store={ store }>
      <ThemeProvider theme={ theme }>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
