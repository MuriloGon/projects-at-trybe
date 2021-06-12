import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions';

const auth = (state = false, action) => {
  switch (action.type) {
  case AUTH_LOGIN:
    return true;
  case AUTH_LOGOUT:
    return false;
  default:
    return state;
  }
};

export default auth;
