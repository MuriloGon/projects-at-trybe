import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../slices/rootReducer';

const renderWithRouterAndRedux = (component,
  initialState, intitalPaths, store = createStore(rootReducer, initialState,
    applyMiddleware(thunk))) => {
  const history = createMemoryHistory({ initialEntries: intitalPaths });
  return ({
    ...render(
      <Router history={ history }>
        <Provider store={ store }>
          {component}
        </Provider>
      </Router>,
    ),
    history,
    store,
  });
};
export default renderWithRouterAndRedux;
