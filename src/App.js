import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

const handleAuth = (bool, component, to = '/not-allowed') => (
  bool ? component : <Redirect to={ `${to}` } />
);

const App = ({ isLogged }) => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>

    <Route exact path="/login">
      <Login />
    </Route>

    <Route exact path="/carteira">
      {handleAuth(isLogged, <Wallet />)}
    </Route>

    <Route path="/not-allowed">
      <div style={ { textAlign: 'center' } }>
        <h1>Logue-se para acessar à aplicação</h1>
        <Link to="/login">Faça o login aqui</Link>
      </div>
    </Route>

    <Route path="*">
      <h1>ERROR 404</h1>
    </Route>

  </Switch>
);

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLogged: state.auth,
});

export default connect(mapStateToProps, null)(App);
