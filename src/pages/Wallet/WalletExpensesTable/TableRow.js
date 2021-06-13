import React from 'react';
import { BiPencil, BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, toggleEdit } from '../../../actions';

const TableRow = ({ item }) => {
  const { description, tag, method, value, currency, exchangeRates, id } = item;
  const dispatch = useDispatch();
  const edit = useSelector((st) => st.wallet.editEnabled);
  const rowEditId = useSelector((st) => st.wallet.editObj);
  const isRowEditing = () => {
    if (rowEditId !== undefined && rowEditId.id !== undefined && id !== undefined) {
      return rowEditId.id === id;
    }
    return false;
  };
  const outline = isRowEditing() ? '2px dashed red' : '';
  const conditionalActionBtns = () => (isRowEditing() ? <td>Editando</td> : <td>-</td>);
  return (
    <tr style={ { outline } }>
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{(value)}</td>
      <td>
        { exchangeRates[currency] ? exchangeRates[currency].name.split('/')[0] : null }
      </td>
      <td>
        { exchangeRates[currency]
          ? parseFloat(exchangeRates[currency].ask).toFixed(2) : null }
      </td>
      <td>
        {
          exchangeRates[currency] !== undefined ? Number((parseFloat(value)
            * parseFloat(exchangeRates[currency].ask))).toFixed(2) : null
        }
      </td>
      <td>Real</td>
      {!edit ? (
        <td className="action-btns">
          <BiPencil
            className="action-btn edit-btn"
            data-testid="edit-btn"
            onClick={ () => { dispatch(toggleEdit(id)); } }
          />
          <BiX
            className="action-btn delete-btn"
            data-testid="delete-btn"
            onClick={ () => { dispatch(deleteExpense(id)); } }
          />
        </td>) : conditionalActionBtns()}

    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
