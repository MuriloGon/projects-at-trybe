const DRINK_CATEGORIES_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const DRINK_AREAS_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';
const DRINK_INGREDIENTS_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

export async function getDrinksCategories() {
  try {
    const response = await fetch(DRINK_CATEGORIES_ENDPOINT);
    const data = await response.json();
    return data.drinks;
  } catch (erro) {
    console.log('Erro on get drink categories');
  }
}

export async function getDrinksAreas() {
  try {
    const response = await fetch(DRINK_AREAS_ENDPOINT);
    const data = await response.json();
    return data.drinks;
  } catch (erro) {
    console.log('Erro on get drink areas');
  }
}

export async function getDrinksIngredients() {
  try {
    const response = await fetch(DRINK_INGREDIENTS_ENDPOINT);
    const data = await response.json();
    return data.drinks;
  } catch (erro) {
    console.log('Erro on get drink ingredients');
  }
}

export function drinkIngredientImg(drinkName) {
  return `https://www.thecocktaildb.com/images/ingredients/${drinkName}.png`;
}
