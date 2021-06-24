/* eslint-disable react/no-multi-comp */
import React, { useContext } from 'react';
import StarWarsContext from '../../Contexts/StarWarsContext';
import TableRow from './TableRow';
import apiDataStructure from './data';

function Table() {
  const { filteredResults } = useContext(StarWarsContext);

  if (filteredResults === undefined) return <h1>Carregando</h1>;

  return (
    <table>
      <thead>
        <tr>
          {
            apiDataStructure.map(({ key, text }) => (
              <th key={ key }>{text}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          filteredResults.map(
            (datum) => (<TableRow key={ datum.name } data={ datum } />),
          )
        }
      </tbody>
    </table>
  );
}

export default Table;
