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

async function getAllRecipes() {
  const recipes = await (await conn()).collection(recipesCollection);
  const data = await recipes.find({}).toArray();
  return data;
}

async function getRecipeById(recipeId) {
  if (!ObjectId.isValid(recipeId)) return null;
  const recipes = await (await conn()).collection(recipesCollection);
  const data = await recipes.findOne({ _id: ObjectId(recipeId) });
  if (!data) return null;
  const idKey = '_id';
  return { 
    ...data, 
    _id: data[idKey].toString(), 
    userId: data.userId.toString(),
  };
}

async function updateRecipe(recipeId, name, ingredients, preparation) {
  if (!ObjectId.isValid(recipeId)) return null;

  const recipes = await (await conn()).collection(recipesCollection);
  await recipes.updateOne(
    { _id: ObjectId(recipeId) },
    { $set: { name, ingredients, preparation } },
  );

  const data = await getRecipeById(recipeId);
  if (!data) return null;

  const idKey = '_id';
  return { 
    ...data, 
    _id: data[idKey].toString(), 
    userId: data.userId.toString(),
  };
}

async function deleteRecipe(recipeId) {
  if (!ObjectId.isValid(recipeId)) return null;
  const recipes = await (await conn()).collection(recipesCollection);
  const { deletedCount } = await recipes.deleteOne({ _id: ObjectId(recipeId) });
  if (!deletedCount) return false;
  return true;
}

async function updateRecipeImage(recipeId, imagePath) {
  if (!ObjectId.isValid(recipeId)) return null;
  const recipes = await (await conn()).collection(recipesCollection);
  await recipes.updateOne(
    { _id: ObjectId(recipeId) },
    { $set: { image: imagePath } },
  );

  const data = await getRecipeById(recipeId);
  if (!data) return null;
  const idKey = '_id';
  return { 
    ...data, 
    _id: data[idKey].toString(), 
    userId: data.userId.toString(),
  };
}

module.exports = {
  registerRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  updateRecipeImage,
};