import { Category, ProductQuery } from '../helpers/mlInterfaces';
import { Product } from '../helpers/mercadolibre/product';

export const getAllCategories = async (): Promise<Array<Category> | []> => {
  try {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(endpoint);
    const data = await response.json() as Array<Category>;
    return data;
  } catch (error) {
    return [];
  }
};

export const itemByCategoryAndQuery = async (
  id: string, query: string,
): Promise<ProductQuery | null> => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${id}&q=${query}`;
    const response = await fetch(endpoint);
    const data = await response.json() as ProductQuery;
    return data;
  } catch (error) {
    return null;
  }
};

export const getItemById = async (id: string): Promise<Product | null> => {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(endpoint);
    const data = await response.json() as Product;
    return data;
  } catch (error) {
    return null;
  }
};
