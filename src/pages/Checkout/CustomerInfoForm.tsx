/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import boletoIcon from '../../assets/boleto-icon.png';
import visaIcon from '../../assets/visa-icon.png';
import mastercardIcon from '../../assets/mastercard-icon.png';
import eloIcon from '../../assets/elo-icon.png';

const CustomerContainer = styled.section`

  form {
    padding-block: 0.5rem;
    background: white;
  }

  input, select {
    box-sizing: border-box;
    border: none;
    font-size: 1.20rem;
    border-radius: 4px;
    padding: 0.5rem;
    background: hsla(196.94117647058823, 100%, 50%, 0.239);

    :focus {
      outline: 2px solid hsla(196.94117647058823, 100%, 30%, 1);
      z-index: 2;
    }
  }

  .row {
    display: flex;
    flex-flow: wrap row;
    & > * {
      flex: 1;
      margin: 2px;
    }
  }

  label {
    display: flex;
    align-items: center;
  }
  .payment-methods {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;

    label {
      display: flex;
      flex-flow: nowrap column;
    }

    span {
      margin: 0.5rem;
    }

    img {
      height: 50px;
    }
  }

  .submit-btn {
    margin-top: 2rem;
    border: none;
    background: hsl(120, 40%, 40%);
    font-size: 1.25rem;
    padding: 0.5rem 5rem ;
    border-radius: 4px;
    color: white;
    cursor: pointer;

    &:hover {
      background: hsl(120, 40%, 35%);
    }

    &:active {
      background: hsl(120, 40%, 45%);
    }
  }
  .finish-form {
    display: flex;
    justify-content: center;
  }
`;

const CustomerInfoForm: FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [adress, setAdress] = useState('');
  const [complement, setComplement] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('SP');
  const [paymethod, setPaymethod] = useState('SP');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRedirect(true);
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <CustomerContainer>
      <h2>Informações do Comprador</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={({ target: { value } }) => { setName(value); }}
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={({ target: { value } }) => { setCpf(value); }}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={({ target: { value } }) => { setEmail(value); }}
          />
          <input
            type="text"
            placeholder="Telefone"
            value={phone}
            onChange={({ target: { value } }) => { setPhone(value); }}
          />
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={({ target: { value } }) => { setCep(value); }}
          />
          <input
            type="text"
            placeholder="Endereço"
            value={adress}
            onChange={({ target: { value } }) => { setAdress(value); }}
          />
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="Complemento"
            value={complement}
            onChange={({ target: { value } }) => { setComplement(value); }}
          />
          <input
            type="text"
            placeholder="Número"
            value={number}
            onChange={({ target: { value } }) => { setNumber(value); }}
          />
          <input
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={({ target: { value } }) => { setCity(value); }}
          />
          <select
            value={state}
            onChange={({ target: { value } }) => { setState(value); }}
          >
            <option>SP</option>
            <option>RJ</option>
            <option>MG</option>
          </select>
        </div>
        <section>
          <h2>Método de Pagamentos</h2>
          <div className="payment-methods">
            <label htmlFor="radio1">
              <span>Boleto</span>
              <img src={boletoIcon} alt="boleto" />
              <input
                id="radio1"
                type="radio"
                name="method"
                value="Boleto"
                onChange={({ target: { value } }) => { setPaymethod(value); }}
              />
            </label>

            <label htmlFor="radio2">
              <span>Visa</span>
              <img src={visaIcon} alt="visa" />
              <input
                id="radio2"
                type="radio"
                name="method"
                value="Visa"
                onChange={({ target: { value } }) => { setPaymethod(value); }}
              />
            </label>

            <label htmlFor="radio3">
              <span>MasterCard</span>
              <img src={mastercardIcon} alt="mastercard" />
              <input
                id="radio3"
                type="radio"
                name="method"
                value="Mastercard"
                onChange={({ target: { value } }) => { setPaymethod(value); }}
              />
            </label>
            <label htmlFor="radio4">
              <span>Elo</span>
              <img src={eloIcon} alt="elo" />
              <input
                id="radio4"
                type="radio"
                name="method"
                value="Elo"
                onChange={({ target: { value } }) => { setPaymethod(value); }}
              />
            </label>
          </div>
        </section>
        <div className="finish-form">
          <button className="submit-btn" type="submit">Comprar</button>
        </div>
      </form>
    </CustomerContainer>
  );
};

export default CustomerInfoForm;
