import React from 'react';
import PropTypes from 'prop-types';

const DescriptionForm = ({ form, setFormParms }) => {
  const handleInput = ({ target: { value: description } }) => {
    setFormParms({ ...form, description });
  };
  return (
    <label htmlFor="description">
      <span className="wallet-exps-label">
        Descrição:
      </span>
      <input
        type="text"
        id="description"
        value={ form.description }
        onChange={ handleInput }
        placeholder="Digite sua descrição"
        data-testid="description-input"
      />
    </label>
  );
};

DescriptionForm.propTypes = {
  form: PropTypes.shape({ description: PropTypes.string }).isRequired,
  setFormParms: PropTypes.func.isRequired,
};

export default DescriptionForm;
