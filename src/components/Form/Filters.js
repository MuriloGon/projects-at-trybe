import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../../Contexts/StarWarsContext';
import { allowedColumns, comparisonOperations } from './data';

function Filters() {
  const {
    filters: { filterByNumericValues, setNumericFilter, resetFilter },
  } = useContext(StarWarsContext);

  const [columnFilter, setColumnFilter] = useState(allowedColumns[0]);
  const [comparisonFilter, setComparisonFilter] = useState(comparisonOperations[0]);
  const [valueFilter, setValueFilter] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setNumericFilter(columnFilter, comparisonFilter, valueFilter);
    setValueFilter('');
  };

  const currentFilters = filterByNumericValues.map(({ column }) => column);
  let selectableFilters = allowedColumns;

  currentFilters.forEach((item) => {
    selectableFilters = selectableFilters.filter((e) => e !== item);
  });

  useEffect(() => {
    setColumnFilter(selectableFilters[0]);
  }, [filterByNumericValues, selectableFilters]);

  const disabled = selectableFilters.length <= 0;
  return (
    <form>
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ ({ target: { value } }) => { setColumnFilter(value); } }
        disabled={ disabled }
      >
        {disabled ? <option>Not Available</option>
          : selectableFilters.map((item) => (
            <option key={ `column-${item}` } value={ item }>{item}</option>))}
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ ({ target: { value } }) => { setComparisonFilter(value); } }
        disabled={ disabled }
      >
        {
          comparisonOperations.map((key) => (
            <option key={ key } value={ key }>{key}</option>))
        }
      </select>

      <input
        data-testid="value-filter"
        value={ valueFilter < 0 ? 0 : valueFilter }
        type="number"
        onChange={ ({ target: { value } }) => { setValueFilter(value); } }
        disabled={ disabled }
      />

      <button
        data-testid="button-filter"
        type="submit"
        onClick={ handleClick }
        disabled={ valueFilter <= 0 || disabled }
      >
        Filtrar
      </button>
      <div>
        {
          currentFilters.map((filter) => (
            <div key={ `filter-${filter}` } data-testid="filter">
              {filter}
              <button
                onClick={ () => { resetFilter(filter); } }
                type="button"
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </form>
  );
}

export default Filters;
