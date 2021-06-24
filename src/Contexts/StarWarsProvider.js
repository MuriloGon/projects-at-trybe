import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=2')
      .then((res) => res.json()).then(setData);
  }, []);

  const startWarsContext = {
    data,
    setData,
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
