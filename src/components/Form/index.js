import React, { useContext } from 'react';
import Filters from './Filters';
import StarWarsContext from '../../Contexts/StarWarsContext';
import Order from './Order';

function Form() {
  const {
    filters: { filterByName: { name },
      setFilterName, resetNumberedFilters },
  } = useContext(StarWarsContext);
  const handleReset = (e) => {
    e.preventDefault();
    resetNumberedFilters();
  };

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
      <Order />
      <Filters />
    </>
  );
}
export default Form;
