import React, { Component } from 'react';
import BuyerInfo from './BuyerInfo';
import PaymentMethod from './PaymentMethod';

const initialState = {
  fullName: '',
  cpf: '',
  email: '',
  telephone: '',
  cep: '',
  address: '',
  complement: '',
  number: '',
  city: '',
  state: '',
  payment: '',
};

class PurchaseForm extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const allFilled = !Object.values(this.state).includes(''); // Verifica se há algum campo sem ser preenchido
    if (allFilled) {
      this.setState({ ...initialState });
    }
  }

  render() {
    return (
      <form>
        <BuyerInfo { ...this.state } handleChange={ this.handleChange } />
        <PaymentMethod handleChange={ this.handleChange } />
        <button type="submit" onClick={ this.handleClick }>Comprar</button>
      </form>
    );
  }
}

export default PurchaseForm;
