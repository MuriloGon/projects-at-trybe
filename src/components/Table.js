import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { characters } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Origem</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char) => (
            <tr key={ char.name }>
              <td>{char.name}</td>
              <td>{char.origin}</td>
              <td>{char.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      origin: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
};

export default Table;
