import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import MealsCard from './MealsCard';
import { fetchMealsOrDrinks } from '../services/apisMaps';
import { setAllMeals } from '../slices/allMeals';

function MealsList() {
  const dispatch = useDispatch();
  const mealsStore = useSelector((state) => state.allMeals.meals);
  const doze = 12;

  useEffect(() => {
    const getAllMeals = async () => {
      const meals = await fetchMealsOrDrinks('meals')(doze).then((data) => data);
      dispatch(setAllMeals(meals));
    };

    getAllMeals();
  }, [dispatch]);

  return (
    <section>
      <div data-testid="meals-list" className="class-meals-list">
        { mealsStore.map((meal, index) => <MealsCard key={ index } meal={ meal } />)}
      </div>
    </section>
  );
}

// MealsList.propTypes = {
//   mealsStore: PropTypes.arrayOf(
//     PropTypes.object,
//   ).isRequired,
// };

export default MealsList;
