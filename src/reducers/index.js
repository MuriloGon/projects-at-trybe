import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import auth from './auth';

const reducer = combineReducers({ user, wallet, auth });

export default reducer;
