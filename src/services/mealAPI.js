const MEAL_CATEGORIES_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const MEAL_AREAS_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const MEAL_INGREDIENTS_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export async function getMealCategories() {
  try {
    const response = await fetch(MEAL_CATEGORIES_ENDPOINT);
    const data = await response.json();
    return data.meals;
  } catch (erro) {
    console.log('Erro in get meal categories');
  }
}

export async function getMealAreas() {
  try {
    const response = await fetch(MEAL_AREAS_ENDPOINT);
    const data = await response.json();
    return data.meals;
  } catch (erro) {
    console.log('Erro in get meal areas');
  }
}

export async function getMealIngredients() {
  try {
    const response = await fetch(MEAL_INGREDIENTS_ENDPOINT);
    const data = await response.json();
    return data.meals;
  } catch (erro) {
    console.log('Erro in get meal ingredients');
  }
}

export function mealIngredientImg(ingredientName) {
  return `https://www.themealdb.com/images/ingredients/${ingredientName}.png`;
}

export async function getMeals() {
  const doze = 12;
  try {
    const response = await fetch(MEALS);
    const data = await response.json();
    return data.meals.slice(0, doze);
  } catch (erro) {
    console.log('Erro in get all meats');
  }
}
