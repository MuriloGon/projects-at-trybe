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

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryId,
  validatePostData: [validateTitle, validateContent, validateCategoryId],
};