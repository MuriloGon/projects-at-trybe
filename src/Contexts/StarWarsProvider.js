import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

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
      const { filterByNumericValues } = filters;
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

      setFilteredResults(filtered);
    }
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

  const startWarsContext = {
    data,
    setData,
    filters: {
      ...filters,
      setFilterName,
      setNumericFilter,
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
