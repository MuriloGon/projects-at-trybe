import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const MINUS_ONE = -1;

const cb1 = (order) => (a, b) => {
  if (a[order.column] > b[order.column]) return 1;
  if (a[order.column] < b[order.column]) return MINUS_ONE;
  return 0;
};

const cb2 = (order) => (a, b) => {
  if (Number(a[order.column]) > Number(b[order.column])) return 1;
  if (Number(a[order.column]) < Number(b[order.column])) return MINUS_ONE;
  return 0;
};

const cb3 = (order) => (a, b) => {
  if (a[order.column] > b[order.column]) return MINUS_ONE;
  if (a[order.column] < b[order.column]) return 1;
  return 0;
};

const cb4 = (order) => (a, b) => {
  if (Number(a[order.column]) > Number(b[order.column])) return MINUS_ONE;
  if (Number(a[order.column]) < Number(b[order.column])) return 1;
  return 0;
};
function StarWarsProvider({ children }) {
  const [data, setData] = useState();
  const [filteredResults, setFilteredResults] = useState();
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets')
      .then((res) => res.json()).then(setData);
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      const { results } = data;
      const { filterByNumericValues, order } = filters;
      const { name: filterName } = filters.filterByName;

      let filtered = results.filter(
        ({ name }) => name.toLowerCase().includes(filterName.toLowerCase()),
      );

      filterByNumericValues.forEach(({ column, comparison, value }) => {
        filtered = filtered.filter((item) => {
          switch (comparison) {
          case 'maior que': return Number(item[column]) > Number(value);
          case 'menor que': return Number(item[column]) < Number(value);
          case 'igual a': return Number(item[column]) === Number(value);
          default: return true;
          }
        });
      });

      switch (order.sort) {
      case 'ASC':
        if (order.column === 'name') filtered = filtered.sort(cb1(order));
        else filtered = filtered.sort(cb2(order));
        break;
      case 'DESC':
        if (order.column === 'name') filtered = filtered.sort(cb3(order));
        else filtered = filtered.sort(cb4(order));
        break;
      default:
        break;
      }

      setFilteredResults(filtered);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filters]);

  const setFilterName = (name) => {
    setFilters((st) => ({ ...st, filterByName: { name } }));
  };

  const setNumericFilter = (column, comparison, value) => {
    const output = { column, comparison, value };
    const hasRepeated = filters
      .filterByNumericValues.some((item) => column === item.column);

    if (hasRepeated) {
      const repeatedIndex = filters.filterByNumericValues
        .findIndex((item) => item.column === column);
      const filteredFilters = filters.filterByNumericValues.filter(
        (_, i) => i !== repeatedIndex,
      );
      setFilters((st) => (
        { ...st, filterByNumericValues: [...filteredFilters, output] }));
    } else {
      setFilters((st) => (
        { ...st, filterByNumericValues: [...st.filterByNumericValues, output] }));
    }
  };

  const resetFilter = (filter) => {
    const removedFilter = filters.filterByNumericValues
      .filter(({ column }) => column !== filter);

    setFilters((st) => ({ ...st,
      filterByNumericValues: removedFilter }));
  };

  const resetNumberedFilters = () => {
    setFilters((st) => ({ ...st, filterByNumericValues: [] }));
  };

  const setOrderObj = (column, sort) => {
    setFilters((st) => ({ ...st, order: { column, sort } }));
  };

  const startWarsContext = {
    data,
    setData,
    filters: {
      ...filters,
      setFilterName,
      setNumericFilter,
      setOrderObj,
      resetNumberedFilters,
      resetFilter,
    },
    filteredResults,
  };

  return (
    <StarWarsContext.Provider value={ startWarsContext }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default StarWarsProvider;
