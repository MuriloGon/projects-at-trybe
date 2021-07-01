import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsOrDrinks } from '../services/apisMaps';
import { setAllDrinks } from '../slices/allDrinks';
import DrinksCard from './DrinksCard';

function DrinksList() {
  const dispatch = useDispatch();
  const drinksStore = useSelector((state) => state.allDrinks.drinks);

  useEffect(() => {
    const getAllDrinks = async () => {
      const drinks = await fetchMealsOrDrinks('drinks')()
        .then((data) => data);
      dispatch(setAllDrinks(drinks));
    };

    getAllDrinks();
  }, [dispatch]);

  return (
    <section>
      <div data-testid="drinks-list" className="class-drinks-list">
        {
          drinksStore.map((drink, index) => <DrinksCard key={ index } drink={ drink } />)
        }
      </div>
    </section>
  );
}

export default DrinksList;
