import React, { useContext } from 'react';
import Filters from './Filters';
import StarWarsContext from '../../Contexts/StarWarsContext';
import { allowedColumns } from './data';

function Form() {
  const {
    filters: { filterByName: { name },
      setFilterName, resetNumberedFilters },
  } = useContext(StarWarsContext);
  const handleReset = (e) => {
    e.preventDefault();
    resetNumberedFilters();
  };

  const sortColumns = ['name', ...allowedColumns];

  return (
    <>
      <form>
        <label htmlFor="planet">
          Nome do planeta
          <input
            id="planet"
            data-testid="name-filter"
            placeholder="Nome do planeta"
            type="text"
            value={ name }
            onChange={ ({ target: { value } }) => { setFilterName(value); } }
          />
        </label>
        <button type="button" onClick={ handleReset }>Reset Filters</button>
      </form>
      <select>
        {
          sortColumns.map((column) => (
            <option key={ `sortcolumn-${column}` }>{column}</option>
          ))
        }
      </select>
      <Filters />
    </>
  );
}
export default Form;
