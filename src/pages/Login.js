import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles/Login.css';

import { Redirect } from 'react-router';
import { login, saveEmail as saveEmailStore } from '../actions';
import placeholder from '../assets/login_placeholder.svg';

const MAX_LENGTH = 6;

const btnStyle = (validation) => ({
  cursor: validation ? 'pointer' : 'not-allowed',
});

const Login = ({ authLogin, saveEmail, isLogged }) => {
  const [loginEmail, setUser] = useState('');
  const [loginPassword, setPassword] = useState('');

  const validatelogin = (loginEmail === 'alguem@email.com')
    && (loginPassword.length >= MAX_LENGTH);

  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin();
    saveEmail(loginEmail);
  };

  const loggedRender = <Redirect to="/carteira" />;

  const defaultRender = (
    <form className="login-form">
      <img className="login-form-img" src={ placeholder } alt="login placeholder" />
      <input
        autoComplete="on"
        className="login-form-input"
        value={ loginEmail }
        onChange={ ({ target: { value } }) => setUser(value) }
        placeholder="Email"
        type="email"
        data-testid="email-input"
      />
      <input
        autoComplete="on"
        className="login-form-input"
        value={ loginPassword }
        onChange={ ({ target: { value } }) => setPassword(value) }
        placeholder="Password"
        type="password"
        data-testid="password-input"
      />
      <button
        style={ btnStyle(validatelogin) }
        onClick={ handleSubmit }
        className="login-form-submit"
        type="submit"
        disabled={ !validatelogin }
      >
        Entrar
      </button>
    </form>
  );

  return isLogged ? loggedRender : defaultRender;
};

const mapStateToProps = (state) => ({
  isLogged: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  authLogin: () => dispatch(login()),
  saveEmail: (email) => dispatch(saveEmailStore(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
