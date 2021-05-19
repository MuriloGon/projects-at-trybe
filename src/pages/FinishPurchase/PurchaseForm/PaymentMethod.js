import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethods extends Component {
  genericInput = (id) => {
    const { handleChange } = this.props;
    return (
      <label htmlFor={ id }>
        <input
          id={ id }
          type="radio"
          name="payment"
          value={ id }
          onChange={ handleChange }
        />
        {id}
      </label>
    );
  }

  render() {
    return (
      <div style={ { display: 'flex' } }>
        <div>
          <p>Boleto: </p>
          {this.genericInput('boleto')}
        </div>
        <div>
          <p>Cartão de crédito: </p>
          {this.genericInput('visa')}
          {this.genericInput('mastercard')}
          {this.genericInput('elo')}
        </div>
      </div>
    );
  }
}

PaymentMethods.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default PaymentMethods;
