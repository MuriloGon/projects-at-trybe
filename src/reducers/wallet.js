import { WALLET_SAVE_EXPENSE,
  WALLET_REQUESTING, WALLET_REQUEST_FINISHED } from '../actions';

const DEFAULT_WALLET = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = DEFAULT_WALLET, action) => {
  switch (action.type) {
  case WALLET_SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.payload },
      ],
    };

  case WALLET_REQUESTING:
    return { ...state, isFetching: true };

  case WALLET_REQUEST_FINISHED:
    return { ...state, isFetching: false };

  default:
    return state;
  }
};

export default wallet;
