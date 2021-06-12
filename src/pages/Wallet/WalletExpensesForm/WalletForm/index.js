import React from 'react';
import PropTypes from 'prop-types';
import ValueForm from './ValueForm';
import PaymentForm from './PaymentForm';
import TagForm from './TagForm';
import DescriptionForm from './DescriptionForm';
import CurrencyForm from './CurrencyForm';

const WalletForm = ({ form, setFormParms, handleSubmit }) => (
  <form className="wallet-exps-content">
    <ValueForm form={ form } setFormParms={ setFormParms } />
    <CurrencyForm form={ form } setFormParms={ setFormParms } />
    <PaymentForm form={ form } setFormParms={ setFormParms } />
    <TagForm form={ form } setFormParms={ setFormParms } />
    <DescriptionForm form={ form } setFormParms={ setFormParms } />
    <button
      onClick={ handleSubmit }
      className="submit-form-btn"
      type="submit"
    >
      Adicionar despesa
    </button>
  </form>
);

WalletForm.propTypes = {
  form: PropTypes.shape({}).isRequired,
  setFormParms: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default WalletForm;
