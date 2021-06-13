import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableRow from './TableRow';

const TableBody = ({ wallet }) => {
  const { expenses } = wallet;
  return (
    <tbody className="expenses-body">
      {expenses.length > 0
      && expenses.map((item, i) => <TableRow key={ i } item={ item } />)}
    </tbody>
  );
};

TableBody.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default connect(
  (state) => ({ wallet: state.wallet }),
  null,
)(TableBody);
