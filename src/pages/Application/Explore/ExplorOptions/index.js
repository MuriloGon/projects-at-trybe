import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import chooseOption from '../../../../utils/chooseOption';
import { fetchRandomMenu } from '../../../../services/apisMaps';

const chooseIngredientByType = chooseOption({
  meals: '/explorar/comidas/ingredientes',
  drinks: '/explorar/bebidas/ingredientes',
});

const chooseAreaBy = chooseOption({
  meals: '/explorar/comidas/area',
});

function ExploreOptions({ type }) {
  const [randomMenu, setRandomMenu] = useState(0);

  useEffect(() => {
    const key = type === 'meals' ? 'idMeal' : 'idDrink';
    fetchRandomMenu(type)().then((data) => { setRandomMenu(data[key]); });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chooseSurprise = chooseOption({
    meals: `/comidas/${randomMenu}`,
    drinks: `/bebidas/${randomMenu}`,
  });

  return (
    <>
      <Link data-testid="explore-by-ingredient" to={ chooseIngredientByType(type) }>
        Por Ingredientes
      </Link>

      { (type === 'meals')
        && (
          <Link data-testid="explore-by-area" to={ chooseAreaBy(type) }>
            Por Local de Origem
          </Link>
        )}

      <Link data-testid="explore-surprise" to={ chooseSurprise(type) }>
        Me Surpreenda!
      </Link>
    </>
  );
}

ExploreOptions.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ExploreOptions;
