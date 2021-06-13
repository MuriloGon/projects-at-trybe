export const AUTH_LOGIN = 'auth/login';
export const AUTH_LOGOUT = 'auth/logout';

export const USER_SAVE_EMAIL = 'user/save-email';

export const WALLET_REQUESTING = 'wallet/requesting';
export const WALLET_REQUEST_FINISHED = 'wallet/requested';
export const WALLET_REQUEST_ERROR = 'wallet/resquest-error';
export const WALLET_SAVE_EXPENSE = 'wallet/save-expense';
export const WALLET_DELETE_ITEM = 'wallet/delete-expense';
export const WALLET_TOGGLE_EDIT = 'wallet/edit-toggle-expense';
export const WALLET_EDIT_ITEM = 'wallet/edit-item-expense';

export const login = () => ({ type: AUTH_LOGIN });
export const logout = () => ({ type: AUTH_LOGOUT });

export const saveEmail = (email) => ({
  type: USER_SAVE_EMAIL,
  payload: email,
});

export const saveExpense = (expenseData) => ({
  type: WALLET_SAVE_EXPENSE,
  payload: expenseData,
});

export const deleteExpense = (id) => ({
  type: WALLET_DELETE_ITEM,
  payload: id,
});

export const toggleEdit = (id) => ({
  type: WALLET_TOGGLE_EDIT,
  payload: id,
});

export const editItem = (formData) => ({
  type: WALLET_EDIT_ITEM,
  payload: formData,
});

export const walletFetching = () => ({
  type: WALLET_REQUESTING,
});

export const walletFetched = () => ({
  type: WALLET_REQUEST_FINISHED,
});

export const walletError = () => ({
  type: WALLET_REQUEST_ERROR,
});

export const fetchData = (formData) => async (dispatch) => {
  // const TIMEOUT = 500;
  try {
    dispatch(walletFetching());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const dataFetched = await response.json();

    // setTimeout(() => {
    dispatch(walletFetched());
    // }, TIMEOUT);

    dispatch(saveExpense({ ...formData, exchangeRates: dataFetched }));
  } catch (error) {
    console.error(error);
    dispatch(walletFetched());
    dispatch(walletError());
  }
};
