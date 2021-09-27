const schema = require('../schemas/usersValidations');

async function validateUserData(req, res, next) {
  const { email, name, password } = req.body;
  const isValid = schema.validateUserBody({ name, email, password });
  if (!isValid) return res.status(400).json({ message: 'Invalid entries. Try again.' });
  return next();  
}

module.exports = validateUserData;