const joi = require('joi');
const { validObj, errObj } = require('./validationUtils');

function validateTitle(title) {
  if (title === undefined) return errObj(false, '"title" is required'); 
  return validObj(true);
}

function validateContent(content) {
  if (content === undefined) return errObj(false, '"content" is required'); 
  return validObj(true);
}

function validateCategoryId(categoryIds) {
  if (categoryIds === undefined || !Array.isArray(categoryIds)) {
    return errObj(false, '"categoryId" is required');
  } 
  return validObj(true);
}

function validatePost(post) {
  const schema = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    categoryIds: joi.array().items(joi.number().required()).required(),
  }).required();
  const validation = schema.validate(post);
  if (validation.error) {
    return {
      valid: false,
      message: validation.error.details[0].message,
    };
  }
  return { valid: true };
}

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryId,
  validatePost,
  validatePostData: [validateTitle, validateContent, validateCategoryId],
};