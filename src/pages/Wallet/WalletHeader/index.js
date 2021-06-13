/* eslint-disable max-lines-per-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingAnimation from './LoadingAnimation';

import './styles/WalletHeader.css';

const WalletHeader = ({ email, expenses, isLoading }) => {
  let sum = 0;
  const currency = 'BRL';
  if (expenses.length > 0) {
    expenses.forEach(({ value, exchangeRates, currency: apiCurrency }) => {
      const higherCurrency = exchangeRates[apiCurrency];
      if (higherCurrency !== undefined) {
        sum += (Number.isNaN(parseFloat(value)) ? 0 : parseFloat(value))
        * parseFloat(higherCurrency.ask);
      }
    });
  }
  return (
    <header className="wallet-header">
      <ul className="wallet-header-content">
        <li>Trybe</li>
        <div className="wallet-header-info">
          <li>
            Email:
            {' '}
            <span data-testid="email-field">
              {email}
            </span>
          </li>
          <li>
            Despesa Total: R$
            {' '}
            <span data-testid="total-field">
              {(sum).toFixed(2)}
            </span>
            {' '}
            <span data-testid="header-currency-field">
              {currency}
            </span>
          </li>
          {isLoading ? <LoadingAnimation /> : null}
        </div>
      </ul>
    </header>
  );
};

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape({
      ask: PropTypes.string.isRequired,
    }).isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  isLoading: state.wallet.isFetching,
});

export default connect(mapStateToProps, null)(WalletHeader);
