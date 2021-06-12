import React from 'react';
import PropTypes from 'prop-types';

const ValueForm = ({ form, setFormParms }) => (
  <label htmlFor="value">
    <span className="wallet-exps-label">
      Valor:
    </span>
    <input
      id="value"
      value={ form.value }
      onChange={ ({ target: { value } }) => setFormParms({ ...form, value }) }
      className="value-input"
      type="number"
      data-testid="value-input"
    />
  </label>
);

ValueForm.propTypes = {
  form: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }).isRequired,
  setFormParms: PropTypes.func.isRequired,
};

export default ValueForm;
