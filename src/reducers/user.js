import { USER_SAVE_EMAIL,
} from '../actions';

const user = (state = { email: '' }, action) => {
  switch (action.type) {
  case USER_SAVE_EMAIL:
    return { ...state, email: action.payload };

  default:
    return state;
  }
};

export default user;
