import React from 'react';
import { BiPencil, BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../../actions';

const TableRow = ({ item }) => {
  const { description, tag, method, value, currency, exchangeRates, id } = item;
  const { name: currencyName, ask } = exchangeRates[currency];
  const dispatch = useDispatch();

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
      <td className="action-btns">
        <BiPencil className="action-btn edit-btn" />
        <BiX
          className="action-btn delete-btn"
          data-testid="delete-btn"
          onClick={ () => { dispatch(deleteExpense(id)); } }
        />
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
