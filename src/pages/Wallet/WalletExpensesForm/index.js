import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData as fetchDataAction } from '../../../actions';

import WalletForm from './WalletForm';

import './styles/WalletExpenses.css';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

// Fetch data
const fetchCurrencyData = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
};

// form default state
const defaultFormState = {
  value: '0',
  currency: '',
  currencies: [],
  payment: '',
  description: '',
  tag: '',
};

// React Component
const WalletExpenses = ({ fetchData, expenses }) => {
  const [form, setFormParms] = useState(defaultFormState);
  const [data, setData] = useState({});
  const [initialForm, setInitialForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData({
      id: expenses.length,
      value: form.value,
      description: form.description,
      currency: form.currency,
      method: form.payment,
      tag: form.tag,
    });
    setFormParms(initialForm);
  };

  useEffect(() => {
    fetchCurrencyData()
      .then((dataFetched) => setData(dataFetched));
  }, []);

  useEffect(() => {
    const currencies = Object.keys(data).filter((x) => x !== 'USDT');
    const initForm = {
      ...form,
      currencies,
      currency: currencies[0],
      tag: tags[0],
      payment: payments[0] };
    setFormParms(initForm);
    setInitialForm(initForm);
  }, [data]);

  return (
    <div className="wallet-exps">
      <WalletForm
        form={ form }
        setFormParms={ setFormParms }
        handleSubmit={ handleSubmit }
      />
    </div>
  );
};

// Prop-Types
WalletExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchData: PropTypes.func.isRequired,
};

// Redus maps
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (formData) => dispatch(fetchDataAction(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletExpenses);
