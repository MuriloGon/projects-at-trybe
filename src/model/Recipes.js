/// <reference path="../utils/types.js" />

const { ObjectId } = require('mongodb');
const { recipesCollection } = require('../variables');
const conn = require('./connection');

/**
 * @param {string} userId - user ID 
 * @param {string} name - ingredient name 
 * @param {string} ingredients - ingredients
 * @param {string} preparation - preparation steps
 * @returns {Promise<null> | Promise<{_id: string, userId: string, name:string, ingredients:string, preparation:string}>}
 */
async function registerRecipe(userId, name, ingredients, preparation) {
  const recipes = await (await conn()).collection(recipesCollection);
  const { insertedId } = await recipes.insertOne({ 
      userId: ObjectId(userId), 
      name,
      ingredients,
      preparation, 
    });
  if (!insertedId) return null;
  return { _id: insertedId.toString(), userId, name, ingredients, preparation };
}

module.exports = {
  registerRecipe,
};