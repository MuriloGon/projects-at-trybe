import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ item }) => {
  const { description, tag, method, value, currency, exchangeRates } = item;
  const { name: currencyName, ask } = exchangeRates[currency];
  return (
    <tr>
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{(value)}</td>
      <td>{currencyName.split('/')[0]}</td>
      <td>{parseFloat(ask).toFixed(2)}</td>
      <td>{((parseFloat(value) * parseFloat(ask))).toFixed(2)}</td>
      <td>Real</td>
      <td>
        -
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ask: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TableRow;
