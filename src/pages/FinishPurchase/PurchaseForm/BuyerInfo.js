import React from 'react';
import PropTypes from 'prop-types';

function BuyerInfo(props) {
  const {
    fullName,
    cpf,
    email,
    telephone,
    cep,
    address,
    complement,
    number,
    city,
    state,
    handleChange } = props;

  return (
    <div>
      <input
        type="text"
        name="fullName"
        value={ fullName }
        onChange={ handleChange }
        placeholder="Nome Completo"
      />
      <input
        type="text"
        name="cpf"
        value={ cpf }
        onChange={ handleChange }
        placeholder="CPF"
      />
      <input
        type="text"
        name="email"
        value={ email }
        onChange={ handleChange }
        placeholder="Email"
      />
      <input
        type="text"
        name="telephone"
        value={ telephone }
        onChange={ handleChange }
        placeholder="Telefone"
      />
      <input
        type="text"
        name="cep"
        value={ cep }
        onChange={ handleChange }
        placeholder="CEP"
      />
      <input
        type="text"
        name="address"
        value={ address }
        onChange={ handleChange }
        placeholder="Endereço"
      />
      <input
        type="text"
        name="complement"
        value={ complement }
        onChange={ handleChange }
        placeholder="Complemento"
      />
      <input
        type="text"
        name="number"
        value={ number }
        onChange={ handleChange }
        placeholder="Número"
      />
      <input
        type="text"
        name="city"
        value={ city }
        onChange={ handleChange }
        placeholder="Cidade"
      />
      <select name="state" value={ state } onChange={ handleChange }>
        <option value="">Estado</option>
        <option value="AM">Amazonas</option>
        <option value="AP">Amapá</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="MG">Minas Gerais</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="SP">São Paulo</option>
      </select>
    </div>
  );
}

BuyerInfo.propTypes = {
  fullName: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default BuyerInfo;
