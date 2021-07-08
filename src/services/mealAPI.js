const MEAL_CATEGORIES_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const MEAL_AREAS_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const MEAL_INGREDIENTS_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const number = -1;
const MEAL_RANDOM_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/random.php';

export async function getMealCategories(dataQty = number) {
  try {
    const response = await fetch(MEAL_CATEGORIES_ENDPOINT);
    const data = await response.json();
    return data.meals.slice(0, dataQty);
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
  return `https://www.themealdb.com/images/ingredients/${ingredientName}-Small.png`;
}

export async function getMeals(dataQty = number) {
  try {
    const response = await fetch(MEALS);
    const data = await response.json();
    return data.meals.slice(0, dataQty);
  } catch (erro) {
    console.log('Erro in get all meats');
  }
}

export async function getRandomMeal() {
  try {
    const response = await fetch(MEAL_RANDOM_ENDPOINT);
    const data = await response.json();
    const [out] = data.meals;
    return out;
  } catch (erro) {
    console.log('Erro in getting random meal');
  }
}

const MEALS_BY_INGREDIENT_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
export async function getMealsByIngredient(qty, category) {
  try {
    const response = await fetch(MEALS_BY_INGREDIENT_ENDPOINT + category);
    console.log(MEALS_BY_INGREDIENT_ENDPOINT + category);
    const data = await response.json();
    const out = data.meals.slice(0, qty);
    return out;
  } catch (erro) {
    console.error('Erro in getting meals by category');
  }
}

export async function getMealByIngredient(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  } catch (erro) {
    console.log('Erro in get meal ingredient');
    return null;
  }
}

export async function getMealByName(name) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    return data.meals;
  } catch (erro) {
    console.log('Erro in get meal by name');
    return null;
  }
}

export async function getMealByFirstLetter(firstLetter) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const data = await response.json();
    return data.meals;
  } catch (erro) {
    console.log('Erro in get meal by first letter');
    return null;
  }
}
