import React, { useState, useContext } from 'react';
import StarWarsContext from '../../Contexts/StarWarsContext';
import { allowedColumns } from './data';

function Order() {
  const {
    filters: { setOrderObj },
  } = useContext(StarWarsContext);

  const [column, setColumn] = useState('name');
  const [order, setOrder] = useState('ASC');

  const sortColumns = ['name', ...allowedColumns];

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderObj(column, order);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <select
        data-testid="column-sort"
        value={ column }
        onChange={ ({ target: { value } }) => { setColumn(value); } }
      >
        {
          sortColumns.map((col) => (
            <option key={ `sortcolumn-${col}` } value={ col }>{col}</option>
          ))
        }
      </select>

      <span>
        <label htmlFor="asc-radio">
          Ascendent
          <input
            data-testid="column-sort-input-asc"
            id="asc-radio"
            type="radio"
            name="order"
            defaultChecked
            onClick={ ({ target: { value } }) => { setOrder(value); } }
            value="ASC"
          />
        </label>

        <label htmlFor="desc-radio">
          Descendent
          <input
            data-testid="column-sort-input-desc"
            id="desc-radio"
            type="radio"
            name="order"
            onClick={ ({ target: { value } }) => { setOrder(value); } }
            value="DESC"
          />
        </label>
      </span>

      <button data-testid="column-sort-button" type="submit">Order Column</button>
    </form>
  );
}

export default Order;
