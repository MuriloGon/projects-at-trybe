import React from 'react';
import PropTypes from 'prop-types';

const PaymentForm = ({ form, setFormParms }) => {
  const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const handleSelect = (
    { target: { value: payment } },
  ) => setFormParms({ ...form, payment });
  return (
    <label htmlFor="payment">
      <span className="wallet-exps-label">
        Método
        de
        pagamento:
      </span>
      <select
        id="payment"
        onChange={ handleSelect }
        data-testid="method-input"
      >
        {payments.map((pay, i) => <option key={ i } tag={ pay }>{pay}</option>)}
      </select>
    </label>
  );
};

PaymentForm.propTypes = {
  form: PropTypes.shape({}).isRequired,
  setFormParms: PropTypes.func.isRequired,
};

export default PaymentForm;
