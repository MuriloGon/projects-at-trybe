import { meals } from './mealsData';

export const doneRecipesMockData = [{
  id: meals.meal1.idMeal,
  type: 'meal',
  area: 'comida',
  category: meals.meal1.category,
  alcoholicOrNot: 'non alcoolic',
  name: meals.meal1.strMeal,
  image: meals.meal1.strMealThumb,
  doneDate: '2021-06-01',
  tags: meals.meal1.strTags.split(','),
},
{
  id: meals.meal1.idMeal,
  type: 'meal',
  area: 'comida',
  category: meals.meal1.category,
  alcoholicOrNot: 'non alcoolic',
  name: meals.meal1.strMeal,
  image: meals.meal1.strMealThumb,
  doneDate: '2021-06-02',
  tags: meals.meal1.strTags.split(','),
}];

export const favoriteRecipesMockData = [

];
