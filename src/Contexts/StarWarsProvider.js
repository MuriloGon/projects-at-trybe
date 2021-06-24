import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState();
  const [filteredResults, setFilteredResults] = useState();
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=2')
      .then((res) => res.json()).then(setData);
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      const { results } = data;
      const { name: filterName } = filters.filterByName;
      const filtered = results.filter(
        ({ name }) => name.toLowerCase().includes(filterName.toLowerCase()),
      );
      setFilteredResults(filtered);
    }
  }, [data, filters]);

  const setFilterName = (name) => {
    setFilters((st) => ({ ...st, filterByName: { name } }));
  };

  const startWarsContext = {
    data,
    setData,
    filters: {
      ...filters,
      setFilterName,
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
