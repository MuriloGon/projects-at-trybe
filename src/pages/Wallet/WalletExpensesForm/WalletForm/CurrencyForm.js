import React from 'react';
import PropTypes from 'prop-types';

const CurrencyForm = ({ form, setFormParms }) => {
  const handleSelect = (
    { target: { value: currency } },
  ) => setFormParms({ ...form, currency });

  const { currencies } = form;

  return (
    <label htmlFor="currency">
      <span className="wallet-exps-label">
        Moeda:
      </span>
      <select
        id="currency"
        onChange={ handleSelect }
        data-testid="currency-input"
      >
        {currencies.length > 0 ? form.currencies.map((curr, i) => (
          <option
            value={ curr }
            data-testid={ curr }
            key={ i + 1 }
          >
            {curr}
          </option>)) : <option>----</option>}
      </select>
    </label>
  );
};

CurrencyForm.propTypes = {
  form: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  setFormParms: PropTypes.func.isRequired,
};

export default CurrencyForm;
