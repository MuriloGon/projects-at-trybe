import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

const Auth = ({ auth = false, loggedPath = '', notLoggedPath = '' }) => (
  auth ? (
    loggedPath !== '' && <Redirect to={ loggedPath } />
  ) : (notLoggedPath !== '' && <Redirect to={ notLoggedPath } />)
);

Auth.propTypes = {
  auth: PropTypes.bool,
  loggedPath: PropTypes.string,
  notLoggedPath: PropTypes.string,
};

export default Auth;
