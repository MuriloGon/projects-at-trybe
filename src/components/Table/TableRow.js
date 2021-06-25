import React from 'react';
import PropTypes from 'prop-types';
import apiDataStructure from './data';

function TableRow({ data }) {
  return (
    <tr>
      {
        apiDataStructure.map(({ key }, i) => (
          <td
            key={ `${key}-${i}` }
            data-testid={ key === 'name' ? 'planet-name' : null }
          >
            {data[key]}
          </td>
        ))
      }
    </tr>
  );
}

TableRow.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default TableRow;
