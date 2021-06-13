import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { editItem as editAction } from '../../../actions';

import WalletForm from './WalletForm';

import './styles/WalletExpenses.css';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

// form default state
const defaultFormState = {
  value: '0',
  currency: 'USD',
  currencies: [],
  payment: 'Dinheiro',
  description: '',
  tag: 'Alimentação',
};

// React Component
const WalletExpenses = ({ editItem }) => {
  const expense = useSelector((st) => st.wallet.editObj);
  const [form, setFormParms] = useState({
    ...defaultFormState,
    value: expense.value,
    currency: expense.currency,
    payment: expense.method,
    description: expense.description,
    tag: expense.tag,
  });

  const editField = (e) => {
    e.preventDefault();
    editItem({
      id: expense.id,
      value: form.value,
      description: form.description,
      exchangeRates: expense.exchangeRates,
      currency: form.currency,
      method: form.payment,
      tag: form.tag,
    });
  };

  useEffect(() => {
    const currencies = Object.keys(expense.exchangeRates).filter((x) => x !== 'USDT');
    const initForm = {
      ...form,
      currencies,
      currency: currencies[0],
      tag: tags[0],
      payment: payments[0] };
    setFormParms(initForm);
  }, []);

  return (
    <div className="wallet-exps">
      <WalletForm
        form={ form }
        setFormParms={ setFormParms }
        handleSubmit={ editField }
      />
    </div>
  );
};

// Prop-Types
WalletExpenses.propTypes = {
  editItem: PropTypes.func.isRequired,
};

// Redus maps
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editItem: (formData) => dispatch(editAction(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletExpenses);
