import React, { useContext } from 'react';
import StarWarsContext from '../../Contexts/StarWarsContext';

function Form() {
  const {
    filters: { filterByName: { name }, setFilterName },
  } = useContext(StarWarsContext);

  return (
    <form>
      <input
        data-testid="name-filter"
        placeholder="Nome do planeta"
        type="text"
        value={ name }
        onChange={ ({ target: { value } }) => { setFilterName(value); } }
      />
    </form>
  );
}
export default Form;
